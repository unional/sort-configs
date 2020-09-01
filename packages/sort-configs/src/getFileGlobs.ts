export function getFileGlobs({ include }: { include: string[] | null }, globs: string[] | undefined): string[] {
  return globs ?? include ?? ['.']
}
