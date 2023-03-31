import React from 'react'
import './Form.scss'

function MyForm() {
  return (
    <form method='POST' action='/success'>
      <input
        type='hidden'
        value='confirmacion'
        name='form-name'
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
