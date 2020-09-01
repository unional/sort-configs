export function getFileGlobs({ include }: { include: string[] | null }, globs: string[] | undefined): string[] {
  const result = globs ?? include ?? ['.']
  if (result.length === 0) return ['.']
  return result
}
