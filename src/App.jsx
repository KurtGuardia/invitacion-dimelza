import './App.scss'
import Form from './componetns/Form'
import Countdown from 'react-countdown'

function App() {
  return (
    <div className='App'>
      <section className='hero'>
        <h3>
          {' '}
          Después de estos años de maravillosa convivencia
          queremos dar un paso más...
        </h3>
        <h2>¡Nos casamos!</h2>
        <div className='nombres'>
          Dimelza
          <span>y</span>
          Jose Andres
        </div>
        <h3>
          Y nos hace mucha ilusión compartir con vosotros
          uno de los mejores días de nuestra vida.
        </h3>{' '}
        <p className='fecha'>23 / 09 / 2023</p>
        <div className='conteo'>
          <div className='faltan'>Faltan:</div>
          <Countdown
            className='num'
            date='2023-09-23T13:30:00'
          />
          <small className='dias'>
            Dias &nbsp;hrs &nbsp;mins &nbsp;segs
          </small>
        </div>
      </section>
      <section className='lugar'>
        <a
          href='http://www.cateringelcarmelo.es/'
          target={'_blank'}
          rel='noreferrer'
        >
          <h3>Finca Montecarmelos</h3>{' '}
        </a>

        <p> Número: +34 675301055 📞</p>
        <iframe
          className='map'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2510196915773!2d-5.674185700000001!3d41.0416394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f296cdac8360d%3A0x6c4bc373cece5674!2sFinca%20Montecarmelos%20(Bodas%20y%20eventos)!5e0!3m2!1sen!2ses!4v1679162950403!5m2!1sen!2ses'
          width='400'
          height='310'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
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
      </section>
      <section className='formulario'>
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
