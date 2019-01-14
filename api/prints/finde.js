
var _ = _ || require('lodash');

/**
 * Optional:
 * @param {Object} where       - the find criteria (passed directly to the ORM)
 * @param {Integer} limit      - the maximum number of records to send back (useful for pagination)
 * @param {Integer} skip       - the number of records to skip (useful for pagination)
 * @param {String} sort        - the order of returned records, e.g. `name ASC` or `age DESC`
 * @param {String} callback - default jsonp callback param (i.e. the name of the js function returned)
 */

module.exports = function findRecords(req, res) {

  var
    Model = ActionUtilityService.util.parseModel(req),
    modelname = req.options.model || req.options.controller || req.allParams().modelname
  ;

  if (ActionUtilityService.util.parsePk(req)) {
    return require('../../node_modules/sails/lib/hooks/blueprints/actions/findOne')(req, res);
  }

  var
    page = ActionUtilityService.util.parsePage(req) || 1,
    limit = ActionUtilityService.util.parseLimit(req)
  ;

  var
    where = ActionUtilityService.util.parseCriteria(req),
    query = Model
      .find()
      .where(where)
      .limit(limit)
      .skip(ActionUtilityService.util.parseSkip(req))
      .sort(ActionUtilityService.util.parseSort(req))
      .paginate({
        page: page,
        limit: limit || ActionUtilityService.util.parsePerPage(req)
      })
  ;
  sails.log.info(where)
  query = ActionUtilityService.util.populateRequest(query, req);
  return query
    .then(function (matchingRecords) {
      var promises = [];
      if (req._sails.hooks.pubsub && req.isSocket) {
        Model.subscribe(req, matchingRecords);
        if (req.options.autoWatch) {
          Model.watch(req);
        }
        // Also subscribe to instances of all associated models
        _.each(matchingRecords, function (record) {
          ActionUtilityService.util.subscribeDeep(req, record);
          // Agregar a la factura la referencia
          if(modelname === 'contrato' && record.tipo === 'factura' && !record.ref){
            record.ref = sailsTokenAuth.issueToken({
              id: record.id,
              creado: record.createdAt,
              numero: record.numero,
              valor: record.valor,
              usuario: (record.usuario && record.usuario.id) || record.usuario,
              creador: (record.creador && record.creador.id) || record.creador
            });
            promises.push(Contrato
              .update({
                id: record.id
              }, {
                ref: record.ref
              })
            );
          }
        });
      }
      return Promise
        .all(promises)
        .then(function(){
          return Model
            .count()
            .then(function (total) {
              var
                last = Math.ceil(total / limit),
                start = (page * limit) - limit,
                end = start + matchingRecords.length,
                info = {
                  total: total,
                  limit: limit,
                  ini: start + 1,
                  end: end,
                  page: {
                    here: page,
                    first: 1,
                    last: last,
                    next: total > end && end > 1?page + 1:1,
                    prev: page > 1?page - 1:last
                  }
                }
              ;
              res
                .set('info', info)
                .set('total', info.total)
                .set('limit', info.limit)
                .set('ini', info.ini)
                .set('end', info.end)
                .set('page', info.page.here)
                .set('last-page', info.page.last)
                .set('first-page', info.page.first)
                .set('next-page', info.page.next)
                .set('prev-page', info.page.prev)
                .ok(matchingRecords)
              ;
            })
          ;
        })
      ;
    }, function(err){
      sails.log.info(err);
      return err;
    })
    .catch(function (err) {
      if (err) return res.serverError(err);
    })
};
