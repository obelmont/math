import { mapToRange, lerp } from '../index'

describe(lerp, () => {
  test('returns correct linear interpolation value', () => {
    expect(lerp(0, 10, 0.5)).toEqual(5)
  })

  test('returned value will cutoff if to small', () => {
    expect(lerp(9.99, 10, 0.2, 0.1)).toEqual(10)
  })
})

describe(mapToRange, () => {
  test('returns correct value mapped to new range', () => {
    expect(mapToRange(5, 0, 10, 0, 100)).toEqual(50)
  })
})
