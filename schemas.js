const joi = require("joi");

module.exports.salonValidatorSchema = joi.object({
  salon: joi
    .object({
      salonName: joi.string().required(),
      salonType: joi.string().required(),
      salonAveragePrice: joi.number().min(0).required(),
      salonImage: joi.string().allow(""),
      salonStreetAddress: joi.string().required(),
      salonZipCode: joi.number().required(),
      salonCity: joi.string().required(),
      salonState: joi.string().required(),
    })
    .required(),
});

module.exports.reviewValidatorSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().required().min(1).max(5),
      body: joi.string().required(),
    })
    .required(),
});
