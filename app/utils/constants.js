export const COLORS = {
  DARK_BLUE: '#13131A',
  MEDIUM_YELLOW: '#FFD650',
  WHITE_TEXT: '#E2E2E2',
  ERROR_RED: '#FF0000',
  GREEN_SUCCESS: '#00FF00',
  MEDIUM_PURPLE: '#4630EB',
  ASH_GRAY: '#B2BEB5',
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
