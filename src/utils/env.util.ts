import dotenv from 'dotenv';

dotenv.config();

export const getEnv = (key: string): string => {
  const value = process.env[key];

  if (value == null || value === '') {
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value;
};
