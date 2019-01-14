/**
 * Contratoarticulo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    contrato:{
      model: 'contrato',
      required: true
    },
    articulo:{
      model: 'articulo',
      required: true
    },
    creador:{
      model: 'usuarioblog'
    },
    articuloblog:{
      model: 'articuloblog',
      required: true
    },
    blog:{
      model: 'blog',
      required: true
    },
    blogapi:{
      model: 'blog',
      required: true
    }

  },

};
