/**
 * Actividadarticulo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/model-and-orm/model
 */

module.exports = {

  attributes: {
    articulo: {
      model: 'articulo',
      required: true
    },
    articuloblog: {
      model: 'articuloblog',
      required: true
    },
    actividad:{
      model: 'actividad',
      required: true
    },
    descripcion:{
      type: 'string'
    },
    creador:{
      model: 'usuarioblog',
      required: true
    },
    blog:{
      model: 'blog',
      required: true
    },
    blogapi:{
      model: 'blog'
    },

  },

};
