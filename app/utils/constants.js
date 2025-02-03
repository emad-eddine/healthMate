export const COLORS = {
  LIGHT_PURPLE: '#8a86e2',
  HEART_RED: '#C12D2D',
  DARK_GRAY: '#32313A',
  LIGHT_WHITE: '#fcfeff',
  LIGHT_PINK: '#df90c4',
};

export const REGEX = {
  number: /^[0-9]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^[a-zA-Z\s]+$/,
  weightInKg: /^[0-9]+(\.[0-9]+)?$/,
  heightInCm: /^[0-9]+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
};

export const errorMessage = {
  number: 'Must be a valid number.',
  email: 'Must be a valid email address.',
  name: 'Must contain only alphabets and spaces.',
  weightInKg: 'Must be a valid weight in kilograms.',
  heightInCm: 'Must be a valid height in centimeters.',
  password: 'Must be at least 8 characters with one uppercase letter.',
};
