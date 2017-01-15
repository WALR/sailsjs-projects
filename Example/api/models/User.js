/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
  	codigo: {
  		type: 'integer',
  		primaryKey: true,
  		required: true
  	},
  	first_name: {
  		type: 'string',
  		required: true
  	},
  	last_name: {
  		type: 'string',
  		required: true
  	},
  	email: {
  		type: 'string',

  	},
  	password: {
      type: 'string',
      minLength: 6,
      required: true,
      columnName: 'hashed_password'
    },


    toJSON: function() {
	  	var obj = this.toObject();
	  	delete obj.password;
	  	return obj;
	  }

  },

  // Lifecycle Callbacks
  beforeCreate: function (values, cb) {

    // Hash password
    bcrypt.hash(values.password, 10, function(err, hash) {
      if(err) return cb(err);
      values.password = hash;
      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  }

};

