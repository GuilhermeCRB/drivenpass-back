import Joi from "joi";

const userSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(10).required()
});

export default userSchema;