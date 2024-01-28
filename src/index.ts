interface Params {
  param: string
}

export const testFunction = (params: Params): Params => {
  console.log(new Date().getMilliseconds())
  return params
}
