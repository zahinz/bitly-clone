import { validationResult } from "express-validator";

export function validate(req, res, next) {
  const message = req?.customValidationMessage || "invalid request";
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message, errors: errors.array() });
  } else {
    next();
  }
}
