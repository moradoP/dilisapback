/**
 * Usuarioblog.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    usuario:{
      model: 'usuario'
    },
    nombre:{
      type: 'string',
      required: true
    },
    slugnombre:{
      type: 'string',
      required: true
    },
    creador:{
      model: 'usuarioblog',
      required: true
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    password:{
      type: 'string',
      required: true
    },
    apellido:{
      type: 'string',
      required: true
    },
    slugapellido:{
      type: 'string',
      required: true
    },
    doctipo:{
      type: 'string',
      enum:[
        'cc',
        'exc'
      ],
      defaultsTo: 'cc'
    },
    documento:{
      type: 'string',
      required: true
    },
    barrio:{
      model: 'barrios'
    },
    ciudad:{
      model: 'ciudades'
    },
    pais:{
      model: 'pais'
    },
    telefono:{
      type: 'string'
    },
    celular:{
      type: 'string'
    },
    extra:{
      collection: 'Comentarios'
    },
    contrato:{
      collection: 'contrato'
    },
    blog:{
      model: 'blog',
      required: true
    },
    blogapi:{
      model: 'blog',
      required: true
    },
    direccion:{
      type: 'string'
    },
    rol:{
      model: 'rol'
    },
    roles:{
      collection: 'usuariorol'
    }
  },

};
