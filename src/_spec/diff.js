import assert from 'assert'
import {checkNaN} from '../helpers/util'
import diff from '../diff'
import of from '../of'
const date1 = of([2013, 0, 2, 11, 22, 33, 123])

describe('diff', () => {
  it('should be curried', () => {
    const date2 = of([2013, 0, 2, 11, 22, 33, 223])

    assert.equal(diff('milliseconds')(date1)(date2), diff('milliseconds', date1, date2))
  })

  it('should return NaN when given an invalid unit', () => {
    const date2 = of([2013, 0, 2, 11, 22, 33, 223])

    assert(checkNaN(diff('invalid', date1, date2)))
  })

  it('milliseconds', () => {
    const date2 = of([2013, 0, 2, 11, 22, 33, 223])

    assert.equal(diff('milliseconds', date1, date2), 100)
  })

  it('seconds', () => {
    const date2 = of([2013, 0, 2, 11, 22, 42, 223])

    assert.equal(diff('seconds', date1, date2), 9)
  })

  it('minutes', () => {
    const date2 = of([2013, 0, 2, 11, 44, 33, 223])

    assert.equal(diff('minutes', date1, date2), 22)
  })

  it('hours', () => {
    const date2 = of([2013, 0, 2, 22, 22, 33, 223])

    assert.equal(diff('hours', date1, date2), 11)
  })

  it('weeks', () => {
    const date2 = new Date('2013-01-16 22:22:33.223')

    assert.equal(diff('weeks', date1, date2), 2)
  })

  it('months', () => {
    const date2 = of([2014, 1, 2, 22, 22, 33, 223])

    assert.equal(diff('months', date1, date2), 13)
  })

  it('years', () => {
    const date2 = of([2015, 0, 2, 22, 22, 33, 223])

    assert.equal(diff('years', date1, date2), 2)
  })
})
