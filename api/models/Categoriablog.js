/**
 * Categoriablog.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    categoria:{
      model: 'categoria',
      required: true
    },
    blog:{
      model: 'blog',
      required: true
    },
    apiblog:{
      model: 'blog',
      required: true
    },
    creador:{
      model: 'usuarioblog'
    },

  },

};
