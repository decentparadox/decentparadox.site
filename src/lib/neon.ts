import { neon } from '@neondatabase/serverless';

export const sql = neon(import.meta.env.PUBLIC_NEON_DATABASE_URL);