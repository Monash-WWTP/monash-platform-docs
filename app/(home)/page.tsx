import Link from 'next/link';
import { Cards, Card } from 'fumadocs-ui/components/card';
import { Callout } from 'fumadocs-ui/components/callout';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { Droplets, Microscope, Wrench, MapPinned, ArrowRight } from 'lucide-react';
export default function HomePage() {
 return <main className="home-manual">
  <div className="home-intro"><h1>Understand the platform.<br/>Use it with confidence.</h1><p>The practical manual for CitizenFlood, water monitoring and the research sandbox. Start with your task, then explore the data, methods and engineering behind it.</p><Link className="home-start" href="/docs">Explore the manual <ArrowRight size={18}/></Link></div>
  <Callout title="Know which version you are using">The published Android app uses its legacy backend. Current source uses the shared API; integrated production acceptance remains open. Simulations are illustrative and unvalidated. <Link href="/docs/overview/status">Read the current status.</Link></Callout>
  <section aria-labelledby="choose-path"><h2 id="choose-path">Choose your starting point</h2><Cards>
   <Card title="Citizens" href="/docs/get-started/citizens" icon={<Droplets/>}>Install CitizenFlood, understand observations and find the right reporting guide.</Card>
   <Card title="Operators" href="/docs/get-started/operators" icon={<MapPinned/>}>Read lab records, review community reports and explore scenarios with explicit limits.</Card>
   <Card title="Researchers" href="/docs/science" icon={<Microscope/>}>Inspect model logic, accounting equations, parameter provenance and validation gaps.</Card>
   <Card title="Developers & maintainers" href="/docs/get-started/local-development" icon={<Wrench/>}>Run a synthetic local environment, inspect contracts and prepare a reproducible release.</Card>
  </Cards></section>
  <section className="home-read-map"><div><h2>A manual grounded in evidence</h2><p>Every guide identifies its source revision and implementation evidence. Measured observations, reported conditions and simulated outputs remain separate.</p><Link href="/docs/how-it-works/architecture">See how the platform fits together →</Link></div><Steps><Step><h3>Get oriented</h3><p>Check product availability, roles and the distinction between released software and current source.</p></Step><Step><h3>Complete a task</h3><p>Follow a workflow with prerequisites, expected results and troubleshooting.</p></Step><Step><h3>Inspect the reasoning</h3><p>Follow source evidence, API contracts and scientific assumptions before interpreting results.</p></Step></Steps></section>
  <footer>Documentation baseline: platform <code>e6437c4</code> · source review 19 October 2026. <Link href="/docs/contributing/documentation">How this manual is maintained</Link></footer>
 </main>;
}
