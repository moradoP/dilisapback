/**
 * Archivogaleria.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/model-and-orm/model
 */

module.exports = {

  attributes: {
    usuario: {
      model: 'usuario',
      required: true
    },
    usuarioblog: {
      model: 'usuarioblog',
      required: true
    },
    archivo: {
      model: 'archivo',
      required: true
    },
    galeria: {
      model: 'galeria',
      required: true
    }
  },
  index: [
    {
      ind: {
        archivo: 1,
        galeria: 1
      },
      ops: {
        unique: true
      }
    }
  ]
};
