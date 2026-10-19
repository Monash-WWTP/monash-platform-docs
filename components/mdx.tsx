import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { Accordions, Accordion } from 'fumadocs-ui/components/accordion';
import { Files, Folder, File } from 'fumadocs-ui/components/files';
import { SourceLinks } from './sources';
import type { MDXComponents } from 'mdx/types';
export function getMDXComponents(components?: MDXComponents) {
 return { ...defaultMdxComponents, Step, Steps, Tabs, Tab, Accordions, Accordion, Files, Folder, File, SourceLinks, ...components } satisfies MDXComponents;
}
export const useMDXComponents = getMDXComponents;
declare global { type MDXProvidedComponents = ReturnType<typeof getMDXComponents>; }
