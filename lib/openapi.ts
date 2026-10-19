import { documentedSchema } from './documented-schema.mjs';
import { createOpenAPI } from 'fumadocs-openapi/server';
import schema from '@/reference/openapi.json';
import type { Document } from 'fumadocs-openapi';
export const openapi=createOpenAPI({input:{platform:documentedSchema(schema) as unknown as Document}});
