/**
 * Contrato.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string',
      required: true
    },
    slug:{
      type: 'string',
      required: true
    },
    creador:{
      model: 'usuarioblog'
    },
    blog:{
      model: 'blog',
      required: true
    },
    blogapi:{
      model: 'blog',
      required: true
    },
    descripcion:{
      type: 'string'
    },
    contrartoarticulo:{
      collection: 'contratoarticulo'
    },
    valor:{
      type: 'float',
      defaultsTo: 0
    },
    tipe:{
      type: 'string',
      enum:[
        'factura',
        'resivo',
        'comprobante',
        'compra',
        'gasto'
      ],
      defaultsTo: 'factura'
    },
    cajero:{
      model: 'usuario'
    },
    vendedor:{
      model: 'usuario'
    },
    cliente:{
      model: 'usuario'
    },
    contratopago:{
      collection: 'contratopago'
    },
    contratousuario:{
      model: 'contratousuario'
    },
    direccion:{
      model: 'ciudadbarrio'
    }
  },

};
