/**
 * Actividadusuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/model-and-orm/model
 */

module.exports = {

  attributes: {
    actividad:{
      model: 'actividad',
      required: true
    },
    usuario:{
      model: 'usuario',
      required: true
    },
    usuarioblog:{
      model: 'usuarioblog',
      required: true
    },
    creador:{
      model: 'usuarioblog',
      required: true
    },
    descripcion:{
      type: 'string'
    },
    blog:{
      model: 'blog',
      required: true
    },
    blogapi:{
      model: 'blog',
    },
  },

};
