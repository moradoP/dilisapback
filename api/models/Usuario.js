/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string',
      required: true
    },
    slugnombre:{
      type: 'string',
      required: true
    },
    apellido:{
      type: 'string',
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
    passwordConfirmation:{
      type: 'string',
      required: true
    },
    slugapellido:{
      type: 'string',
      required: true
    },
    usuarioblog:{
      collection: 'usuarioblog'
    },
  },
  customToJSON: function() {
    var obj = this.toObject();
    delete obj.password;
    delete obj._csrf;
    delete obj.passwordConfirmation;
    return obj;
  },
  beforeCreate: function(values, next){
    sails.log.info(52, "hp enterere");
    var
      password = values.password,
      passwordConfirmation = values.passwordConfirmation
    ;
    sails.log.info(57, password+";"+passwordConfirmation);
    if (!password || !passwordConfirmation || password != values.passwordConfirmation) {
      var
        passwordDoesNotMatchError = [{
          name: 'passwordDoesNotMatch',
          message: 'Las Contraseñas Deben Coincidir'
        }]
        return next({
          err: passwordDoesNotMatchError
        });
    }
    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword){
      values.encryptedPassword = encryptedPassword;
      next();
    });

  }

};
