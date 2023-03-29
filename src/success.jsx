import Countdown from 'react-countdown'
import flor from './img/FLORES.png'

const Success = () => {
  return (
    <div className='success'>
      <h1>Gracias por tu confirmación!</h1>
      <h2>Te esperamos con ansias 😃</h2>
      <div className='conteo'>
        <div className='faltan'>Faltan:</div>
        <Countdown
          className='num'
          date='2023-09-23T13:30:00'
        />{' '}
        <img
          src={flor}
          alt='flo'
          className='flor flor__left'
        />
        <img
          src={flor}
          alt='flo'
          className='flor flor__right'
        />
        <small className='dias'>
          Dias &nbsp;hrs &nbsp;mins &nbsp;segs
        </small>
      </div>
    </div>
  )
}

export default Success
