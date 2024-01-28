/**
 * Interpolate the value between two points in a straight line.
 * If the interpolated value is less than the cutoff the end paramater will be returned
 */
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

/**
 * Map an existing value from one range to a new range.
 *
 * First get the percentage location of current value to in the first given range
 * Then get max range value of the new range by subtracing the new floor from the new ceiling
 * Create the new value by multiplying the percentage location by new range.
 * Finally add the new floor to this new value to make sure were mapping to the correct range
 */
export const mapToRange = (
  value: number,
  oldFloor: number,
  oldCeiling: number,
  newFloor: number,
  newCeling: number
) =>
  ((value - oldFloor) / (oldCeiling - oldFloor)) * (newCeling - newFloor) +
  newFloor
