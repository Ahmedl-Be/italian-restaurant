import Featured from '/components/Featured/Featured'
import Offer from '/components/Offer/Offer'
import Slider from '/components/Slider/Slider'

export default  function Home() {
  return (
    <div className=''>
      <Slider />
      <Featured />
      <Offer />
    </div>
  )
}
