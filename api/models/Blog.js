/**
 * Blog.js
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
    slug:{
      type: 'string',
      required: true
    },
    url:{
      type: 'string',
      required: true
    },
    host:{
      type: 'string',
      required: true
    },
    blogs:{
      model: 'blog'
    },
    pais:{
      model: 'pais'
    },
    ciudad:{
      model: 'ciudades'
    },
    departamento:{
      model: 'departamento'
    },
    ofrece: {
      type: 'string',
      enum: [
        'productos',
        'servicios',
      ],
      defaultsTo: 'producto'
    },
    tipo: {
      type: 'string',
      enum: [
        'sucursal',
        'bodega',
        'administrativo'
      ],
      defaultsTo: 'administrativo'
    },

  },

};
