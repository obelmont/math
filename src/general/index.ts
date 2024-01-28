export const lerp = (
  start: number,
  end: number,
  distance: number,
  cutoff: number = 0
) => {
  const value = start + (end - start) * distance
  // use cutoff to prevent tiny floating point numbers
  if (end - value < cutoff) return end
  return value
}

export const mapToRange = (
  value: number,
  oldFloor: number,
  oldCeiling: number,
  newFloor: number,
  newCeling: number
) =>
  ((value - oldFloor) / (oldCeiling - oldFloor)) * (newCeling - newFloor) +
  newFloor

export { getRandom } from '../random'
