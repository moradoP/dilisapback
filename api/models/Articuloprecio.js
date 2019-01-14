/**
 * Articuloprecio.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/model-and-orm/model
 */

module.exports = {

  attributes: {
    articulo:{
      model: 'articulo'
    },
    articuloblog:{
      model: 'articuloblog'
    },
    contrato:{
      model: 'contrato'
    },
    creador:{
      model: 'usuarioblog'
    },
    titulo:{
      type: 'string',
      required: true
    },
    slug:{
      type: 'string',
      required: true
    },
    moneda:{
      type: 'string',
      enum:[
        'cop',
        'usd'
      ],
      defaultsTo: 'cop'
    },
    tipo:{
      type: 'string',
      enum:[
        'compra',
        'venta'
      ],
      defaultsTo: 'cop'
    },
    valor:{
      type: 'float',
      required: true,
    },
    vueltos:{
      type: 'float',
      defaultsTo: 0
    }

  },

};
