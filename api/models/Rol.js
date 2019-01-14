/**
 * Rol.js
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
    slug:{
      type: 'string',
      required: true
    },
    creador:{
      model: 'usuarioblog',
      required: true
    },
    icon:{
      type: 'string'
    },
    descripcion:{
      type: 'string'
    },
    usuarios:{
      collection: 'usuario'
    },
    rolusuario:{
      collection: 'rolusuario'
    }
  },

};
