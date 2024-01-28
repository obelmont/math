const getRandom = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

const getRandomInteger = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomIntegerInclusive = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
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

// Monte Carlo probability function (prefers larger numbers)
// for (let index = 0; index < 100; index++) {
//   console.log(monteCarlo())
// }

// const getMonteCarlo = (): number => {
//   while (true) {
//     const r1 = Math.random()
//     const probability = r1
//     const r2 = Math.random()
//     if (r2 < probability) return r1
//   }
// }

export {
  getRandom,
  getRandomInteger,
  getRandomIntegerInclusive,
  getRandomGaussian,
  // getMonteCarlo,
}
