import Joi from "joi";

import { CreateUser } from "../services/accessService";

const userSchema = Joi.object<CreateUser>({
    email: Joi.string().required(),
    password: Joi.string().min(10).required()
});

export default userSchema;