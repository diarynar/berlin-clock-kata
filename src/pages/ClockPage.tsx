import CurrentClockDisplay from '../components/CurrentClockDisplay'
import ConvertBerlinToDigital from '../components/ConvertBerlinToDigital'
import ConvertDigitalToBerlin from '../components/ConvertDigitalToBerlin'

function BerlinClockPage() {
  return (
    <div className="clock-container  flex flex-column gap-20 ">
      <ConvertDigitalToBerlin />
      <ConvertBerlinToDigital />
      <CurrentClockDisplay />
    </div>
  )
}

export default BerlinClockPage
