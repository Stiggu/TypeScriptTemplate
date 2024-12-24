import { sum } from './index'

it('sum', () => {
  const result = sum(1, 2)

  expect(result).toBe(3)
})