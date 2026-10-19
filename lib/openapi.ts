import { createOpenAPI } from 'fumadocs-openapi/server';
import schema from '@/reference/openapi.json';
import type { Document } from 'fumadocs-openapi';
export const openapi=createOpenAPI({input:{platform:{...schema,servers:[{url:'http://127.0.0.1:8181',description:'Synthetic local development only'}]} as unknown as Document}});
