import { createOpenAPI } from 'fumadocs-openapi/server';
import schema from '@/reference/openapi.json';
import type { Document } from 'fumadocs-openapi';
export const openapi=createOpenAPI({input:{platform:schema as unknown as Document}});
