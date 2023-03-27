import React from 'react'
import './Form.scss'

function MyForm() {
  //     { name: '', email: '', allergies: '', menu: '' },
  //   ])
  //   const [message, setMessage] = useState('')

  // const handleChange = (e, index) => {
  //   const { name, value } = e.target
  //   list[index][name] = value
  // }

  // const handleAddClick = () => {
  //     { name: '', allergies: '', menu: '' },
  //   ])
  // }

  // const handleRemoveClick = (index) => {
  //   list.splice(index, 1)
  // }

  return (
    <form method='POST'>
      {/* <div className='row'> */}
      <input
        type='hidden'
        value='confirmacion'
        name='formulario'
      />
      <input
        required
        name='name'
        autoComplete='off'
        className='form__input'
        type='text'
        placeholder='Nombres de todos'
      />
      <input
        required
        name='email'
        autoComplete='off'
        className='form__input'
        type='email'
        placeholder='Email de solo un invitado'
      />
      <select required className='form__select' name='menu'>
        <option value=''>Selecciona tu menú</option>
        <option value='normal'>Normal</option>
        <option value='veg'>Vegetariano</option>
        <option value='celiaco'>Celicao</option>
        <option value='inf'>Infantil</option>
      </select>
      <input
        name='allergies'
        autoComplete='off'
        className='form__input'
        type='text'
        placeholder='¿Alguien con alergias o intolerancias?'
      />
      {/* </div> */}

      <textarea
        className='form__textarea'
        placeholder='Escríbenos un mensaje, nos gustaría leerte....'
        name='message'
        id='message'
        rows='7'
      />
      <button
        type='submit'
        className='form__button--send form__button'
      >
        Enviar confirmación
      </button>
    </form>
  )
}

export default MyForm
