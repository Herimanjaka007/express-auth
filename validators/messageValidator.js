import { check, validationResult } from "express-validator";

const messageValidator = [
    check("title")
        .trim()
        .notEmpty().withMessage("Title is required"),
    check("message")
        .trim()
        .notEmpty().withMessage("Message content is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }
        return next();
    }
]

export default messageValidator;