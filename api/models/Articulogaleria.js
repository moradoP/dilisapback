/**
 * Articulogaleria.js
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
    articuloblog:{
      model: 'articuloblog'
    },
    galeria: {
      model: 'galeria',
      required: true
    },
    usuario: {
      model: 'usuario',
      required: true
    },
    usuarioblog:{
      model: 'usuarioblog',
      required: true
    }

  },

};
