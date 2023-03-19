import './App.scss'
import Photo from './componetns/Photo'
import Form from './componetns/Form'
import Countdown from 'react-countdown'
import { useEffect, useState } from 'react'
import JSConfetti from 'js-confetti'

function App() {
  const [displayText, setText] = useState(false)
  const [displayNoticia, setNoticia] = useState(false)
  const [displayInvit, setInvit] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const jsConfetti = new JSConfetti()

  const handleOk = () => {
    setShowOverlay(false)
    const audio = new Audio('/song.mp3')
    audio.loop = true
    audio.play()
  }

  const handleNo = () => {
    setShowOverlay(false)
  }

  useEffect(() => {
    displayNoticia &&
      jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 800,
        confettiColors: [
          '#fcc4b7',
          '#c4b7fc',
          '#ff971f',
          '#6b92ff',
          '#ff85a1',
          '#ff85a1',
        ],
      })
  }, [displayNoticia, jsConfetti])

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.pageYOffset
      if (scrollPosition >= 950) {
        setText(true)
      }

      if (scrollPosition >= 1500) {
        setNoticia(true)
      }

      if (scrollPosition >= 2100) {
        setInvit(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [jsConfetti])

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1024px)')
    setIsMobile(mql.matches)
  }, [])

  return (
    <div className='App'>
      {isMobile && (
        <h1 className='sorry'>
          Lo siento, no me dio para hacer la invitación
          'responsiva' 🤷 <br /> Tienes que verla en un
          ordenador 💻
        </h1>
      )}{' '}
      {showOverlay && (
        <div className='overlay'>
          <h3>¿Quieres ingresar con música?</h3>
          <div className='buttons'>
            <button onClick={handleOk}>Si</button>
            <button onClick={handleNo}>No</button>
          </div>
        </div>
      )}
      <section className='hero'>
        <Photo />
        <div className='container'>
          <img
            src='/imgs/craspedia.png'
            alt='craspedia'
            className='craspedia'
          />
          <p className='fecha'>23 / 09 / 2023</p>
          <div className='nombres'>
            Dimelza
            <span>y</span>
            Jose Andres
          </div>
        </div>
        <img
          src='/imgs/line.png'
          alt='line'
          className='hero__line'
        />
        <img
          src='/imgs/mancha.png'
          alt='line'
          className='mancha--left'
        />
      </section>
      <section className='intro'>
        <h3 className={`text ${displayText && 'show'}`}>
          {' '}
          Después de estos años de maravillosa convivencia
          queremos dar un paso más...
        </h3>
        <h2
          className={`noticia ${displayNoticia && 'show'}`}
        >
          ¡Nos casamos!
        </h2>
        <h3
          className={`invitacion ${displayInvit && 'show'}`}
        >
          Y nos hace mucha ilusión compartir con vosotros
          uno de los mejores días de nuestra vida.
        </h3>
        <img
          src='/imgs/mancha.png'
          alt='line'
          className='mancha--right'
        />
      </section>
      <section className='conteo'>
        <div className='faltan'>Faltan:</div>
        <Countdown
          className='num'
          date='2023-09-23T13:30:00'
        />
        <small className='dias'>
          Dias &nbsp;hrs &nbsp;mins &nbsp;segs
        </small>
        <img
          src='/imgs/rosca.png'
          alt='rosca'
          className='rosca'
        />
        <img
          src='/imgs/mancha.png'
          alt='line'
          className='mancha--left'
        />
      </section>
      <section className='lugar'>
        <h3>Finca Montecarmelos</h3>
        <iframe
          className='video'
          width='960'
          height='520'
          src='https://www.youtube.com/embed/VW0wYXFKZl8?controls=0'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
        <h2>Te esperamos</h2>
        <img
          src='/imgs/mancha.png'
          alt='line'
          className='mancha--right'
        />
        <a
          href='http://www.cateringelcarmelo.es/'
          target={'_blank'}
          rel='noreferrer'
        >
          Sitio web 🔗
        </a>
        <p> Número: +34 675301055 📞</p>
        <p>Mapita: 🗺️</p>
        <iframe
          className='map'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2510196915773!2d-5.674185700000001!3d41.0416394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f296cdac8360d%3A0x6c4bc373cece5674!2sFinca%20Montecarmelos%20(Bodas%20y%20eventos)!5e0!3m2!1sen!2ses!4v1679162950403!5m2!1sen!2ses'
          width='600'
          height='450'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
        <h3>Código de vestimenta: 👗</h3>
        <p>NO CODE!! Como más cómodo te sientas! 😉</p>
        <h3>Alojamientos: 🏨</h3>
        <ul>
          {' '}
          <li>
            {' '}
            <p>
              {' '}
              &#8259; <em>(precio especial)</em> Hotel
              Castellano I <b>+34 923 22 85 16</b> <br />{' '}
              (Reservar directamente con José Andrés)
            </p>
          </li>
          <li>
            {' '}
            <p>
              {' '}
              &#8259; Hotel Mercado <b>
                +34 923 72 00 15
              </b>{' '}
              <a href='https://www.facebook.com/profile.php?id=100070928086294'>
                🔗
              </a>
            </p>
          </li>
          <li>
            {' '}
            <p>
              {' '}
              &#8259; Hotel San Polo <b>
                +34 923 21 11 77
              </b>{' '}
              <a href='https://www.hotelsanpolo.es/'>🔗</a>
            </p>
          </li>
          <li>
            {' '}
            <p>
              {' '}
              &#8259; Artheus Salamanca{' '}
              <b>+34 923 21 25 00</b>{' '}
              <a href='https://www.facebook.com/hotelartheuscarmelitas'>
                🔗
              </a>
            </p>
          </li>
        </ul>
        <h3>Número Radio-taxi: 🚖</h3>
        <p>+34 923 25 00 00 </p>
        <img
          src='/imgs/mancha.png'
          alt='line'
          className='mancha--left mancha'
        />
      </section>
      <section className='formulario'>
        <h3>¿Vienes?</h3>
        <Form />
      </section>
      <footer>
        <p>
          Invitación web creada por un amigo para Dimelza y
          José Andres &copy;
        </p>
      </footer>
    </div>
  )
}

export default App
