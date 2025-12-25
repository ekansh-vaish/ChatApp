const Joi = require("joi");

const UserValidate = Joi.object({
  Username: Joi.string().required(),
  Email: Joi.string().email().required(),
  Password : Joi.string().required(),
  Phone: Joi.number().required(),
  image: Joi.string().optional(),
  created_At: Joi.date().optional(),
});


const ChatValidate = Joi.object({
Message : Joi.string().required(),
created_At : Joi.date().optional()    
})
module.exports = { UserValidate,ChatValidate };
