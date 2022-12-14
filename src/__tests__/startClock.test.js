import { startClock } from '../utils/utils'

let _Date
describe('startClock should', () => {
  test('display time in format hh:mm:ss format', () => {
    const MOCKED_DATE = new Date('2017-06-13T04:41:20')
    global.Date = jest.fn(() => MOCKED_DATE)

    const formattedDate = startClock(new Date())

    expect(formattedDate).toBe('04:41:20')
    global.Date = _Date
  })
})
