import { testFunction } from '../index'

describe(testFunction, () => {
  test('return value', () => {
    expect(testFunction({ param: 'stringParam' })).toEqual({
      param: 'stringParam',
    })
  })
})
