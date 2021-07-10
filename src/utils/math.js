export function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Arguments must be numbers')
  }

  return a * b
}
