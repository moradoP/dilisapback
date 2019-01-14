/**
 * Contratopago.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    pago: {
      model: 'pago',
      required: true
    },
    contrato:{
      model: 'contrato',
      required: true
    },
    creador:{
      model: 'usuarioblog'
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
