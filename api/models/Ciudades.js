/**
 * Ciudades.js
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
    departamento:{
      model: 'departamento'
    },
    descripcion:{
      type: 'string',
      required: true
    }
  },

};
