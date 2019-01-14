/**
 * Categoria.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo:{
      type: 'string',
      required: true
    },
    creador:{
      model: 'usuarioblog'
    },
    slug:{
      type: 'string',
      required: true
    },
    categoriablog:{
      collection: 'categoriablog'
    },
    valor:{
      type: 'string',
      required: true
    },
    descripcion:{
      type: 'string',
      required: true
    },
    categoriaDe:{
      type: 'string',
      enum:[
        'producto',
        'materia',
        'mensaje',
        'estado'
      ],
      defaultsTo: 'producto'
    }
  },

};
