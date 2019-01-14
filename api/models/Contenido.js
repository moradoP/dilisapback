/**
 * Contenido.js
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
    descripcion:{
      type: 'string'
    },
    articulo:{
      model: 'articulo'
    },
    articuloblog:{
      model: 'articuloblog'
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
