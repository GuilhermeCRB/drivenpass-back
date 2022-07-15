import { CreateUser } from "../services/accessService.js";
import Joi from "joi";

const userSchema = Joi.object<CreateUser>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});

export default userSchema;