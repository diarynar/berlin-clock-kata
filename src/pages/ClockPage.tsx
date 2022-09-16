import BerlinClockContainer from '../components'
import ConvertBerlinToDigital from '../components/ConvertBerlinToDigital'
import ConvertDigitalToBerlin from '../components/ConvertDigitalToBerlin'

function BerlinClockPage() {
  return (
    <div className="clock-container  flex flex-column gap-20 ">
      <ConvertDigitalToBerlin />
      <ConvertBerlinToDigital />
      <BerlinClockContainer />
    </div>
  )
}

export default BerlinClockPage
