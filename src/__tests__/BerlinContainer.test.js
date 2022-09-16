import { cleanup, render } from '@testing-library/react'

import BerlinClockContainer from '../components'

afterEach(cleanup)

describe('BerlinClockContainer should', () => {
  test('render BerlinClock', () => {
    const { getByTestId } = render(<BerlinClockContainer />)
    expect(getByTestId('berlin-clock')).toBeTruthy()
  })

  test('render StandardClock', () => {
    const { getByTestId } = render(<BerlinClockContainer />)
    expect(getByTestId('standard-clock')).toBeTruthy()
  })
})
