/**
 * Categoriusuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    categoria: {
      model: 'categoria',
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
      model: 'usuarioblog'
    },
  },

};
