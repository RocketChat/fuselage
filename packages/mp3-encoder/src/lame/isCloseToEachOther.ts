export function isCloseToEachOther(a: number, b: number) {
  return Math.abs(a) > Math.abs(b)
    ? Math.abs(a - b) <= Math.abs(a) * 1e-6
    : Math.abs(a - b) <= Math.abs(b) * 1e-6;
}
