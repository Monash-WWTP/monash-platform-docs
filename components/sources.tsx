import snapshot from '@/reference/platform.json';
export function SourceLinks({ paths }: { paths: string[] }) {
 return <details className="source-evidence"><summary>Implementation evidence</summary><ul>{paths.map(path => <li key={path}><a href={`${snapshot.repository}/blob/${snapshot.revision}/${path}`} target="_blank" rel="noreferrer">{path}</a></li>)}</ul><p>Platform revision <code>{snapshot.revision.slice(0,7)}</code>. Source checked {snapshot.verifiedDate}; deployment acceptance is separate.</p></details>;
}
