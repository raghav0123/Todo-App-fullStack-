const { z } = require('zod');

// Schema for Registration
const signUpSchema = z.object({
  name: z.string( 'Name is required' )
  .trim()
  .min(1, 'Name is required'),
  email: z.string('Email is required' )
  .trim()
  .toLowerCase()
  .email('Invalid email address'),
  password: z.string('Password is required' )
  .min(6, 'Password must be at least 6 characters'),
});

// Schema for Login (Different requirements!)
const loginSchema = z.object({
  email: z.string('Email is required' ).trim().toLowerCase().email('Invalid email address'),
  password: z.string('Password is required').min(1, 'Password is required'),
});

module.exports = { signUpSchema, loginSchema };