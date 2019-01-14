/**
 * Galeria.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string',
      required: true
    },
    creador:{
      model: 'usuarioblog'
    },
    slug: {
      type: 'string'
    },
    articulo: {
      model: 'articulo',
      required: true
    },
    galeria: {
      model: 'galeria'
    },
    archivos: {
      collection: 'archivogaleria',
      via: 'galeria'
    },
    sizeminw: {
      type: 'integer',
      defaultsTo: 150
    },
    sizeminh: {
      type: 'integer',
      defaultsTo: 150
    },
    sizemidw: {
      type: 'integer',
      defaultsTo: 300
    },
    sizemidh: {
      type: 'integer',
      defaultsTo: 300
    },
    sizebigw: {
      type: 'integer',
      defaultsTo: 600
    },
    sizebigh: {
      type: 'integer',
      defaultsTo: 600
    }
  },

};
