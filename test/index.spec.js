import {isPersian, toWords, toNumber} from '../source/lib'

describe('Modules', () => {
  it('toNumber', () => {
    expect(toNumber.convert('دویست و پنجاه هزار')).toBe(250000)
    expect(toNumber.convert('دوازده هزار بیست دو')).toBe(12022)
  })
})
