import { check, validationResult } from 'express-validator';

const signupValidator = [
    check('first_name')
        .trim()
        .notEmpty().withMessage('First name is required')
        .isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),

    check('last_name')
        .trim()
        .notEmpty().withMessage('Last name is required')
        .isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),

    check('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),

    check('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export default signupValidator;