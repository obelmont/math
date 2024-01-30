/**
 * Get random value between two numbers
 * This can return a floating point number
 */
const getRandom = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

/**
 * Get random value between two numbers
 * This random value will not be either the min or max number
 * This will only return an integer
 */
const getRandomInteger = (min: number, max: number): number => {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
  )
}

/**
 * Get random value between two numbers
 * This random value can be the min and max number
 * This will only return an integer
 */
const getRandomIntegerInclusive = (min: number, max: number): number => {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
  )
}

const getRandomGaussian = (mu: number = 0, sigma: number = 1): number => {
  let x1, x2, w

  // learn what is going on in here
  do {
    x1 = Math.random() * 2 - 1
    x2 = Math.random() * 2 - 1
    w = x1 * x1 + x2 * x2
  } while (w >= 1)
  w = Math.sqrt((-2 * Math.log(w)) / w)
  const y1 = x1 * w

  // multiply the random number by sigma (std deviation) and add mu (mean)
  return y1 * sigma + mu
}

/**
 * Get random value between 0 and 1 using the Monte Carlo method
 * Monte Carlo probability prefers to return larger numbers
 */
const getMonteCarlo = (): number => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const r1 = Math.random()
    const probability = r1
    const r2 = Math.random()
    if (r2 < probability) return r1
  }
}

export {
  getRandom,
  getRandomInteger,
  getRandomIntegerInclusive,
  getRandomGaussian,
  getMonteCarlo,
}
