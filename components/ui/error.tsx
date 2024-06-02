export function Error({ error }: { error?: string }) {
  return error ? <span className="text-red-400">{error}</span> : null;
}
