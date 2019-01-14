/**
 * Actividad.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/model-and-orm/model
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string',
      required: true
    },
    slugtitulo:{
      type: 'string',
      required: true
    },
    creador:{
      model: 'usuarioblog',
      required: true
    },
    usuario:{
      collection: 'actividadusuario'
    },
    articulos:{
      collection: 'actividadarticulo'
    },
    blog:{
      model: 'blog',
      required: true
    },
    blogapi:{
      model: 'blog'
    },
    descripcion:{
      type: 'string'
    },
    valor:{
      type: 'float'
    },
    fechainicia:{
      type: 'string',
      columnType: 'datetime'
    },
    fechafinal:{
      type: 'string',
      columnType: 'datetime'
    },
    tipo:{
      type: 'string',
      enum: [
        'actividad',
        'evento',
        'noticia'
      ],
      defaultsTo: 'actividad'
    }
  },

};
