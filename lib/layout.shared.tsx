import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
export function baseOptions(): BaseLayoutProps {
 return { nav: { title: 'Monash Water · Docs' }, links: [{text:'Platform',url:'https://monash-water-platform.vercel.app',external:true},{ text:'Manual', url:'/docs' }], themeSwitch:{enabled:true} };
}
