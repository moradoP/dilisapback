/**
 * Usuariorol.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    usuario:{
      model: 'usuario'
    },
    usuarioblog:{
      model: 'usuarioblog'
    },
    creador:{
      model: 'usuarioblog',
      required: true
    },
    rol:{
      model: 'rol'
    }
  },

};
