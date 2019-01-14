/**
 * Contratousuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    contrato:{
      model: 'contrato'
    },
    usuario:{
      model: 'usuario'
    },
    usuarioblog:{
      model: 'usuarioblog'
    },
    creador:{
      model: 'usuarioblog'
    },
    blog:{
      model: 'blog'
    },
    blogapi:{
      model: 'blog'
    }
  },

};
