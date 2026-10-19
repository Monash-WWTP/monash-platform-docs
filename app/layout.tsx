import localFont from 'next/font/local';
import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import './global.css';
const manrope = localFont({src:'../public/fonts/Manrope.ttf',display:'swap'});
export const metadata:Metadata={title:{default:'Monash Water documentation',template:'%s | Monash Water Docs'},description:'User guides, developer setup, architecture and scientific methods for the Monash Water platform.'};
export default function Layout({ children }: LayoutProps<'/'>) {
 return <html lang="en" className={manrope.className} suppressHydrationWarning><body className="flex min-h-screen flex-col"><Provider>{children}</Provider></body></html>;
}
