import React, { useState } from 'react'
import './Form.scss'

function MyForm() {
  const [formValues, setFormValues] = useState([
    { name: '', email: '', allergies: '', menu: '' },
  ])
  const [message, setMessage] = useState('')

  const handleChange = (e, index) => {
    const { name, value } = e.target
    const list = [...formValues]
    list[index][name] = value
    setFormValues(list)
  }

  const handleAddClick = () => {
    setFormValues([
      ...formValues,
      { name: '', allergies: '', menu: '' },
    ])
  }

  const handleRemoveClick = (index) => {
    const list = [...formValues]
    list.splice(index, 1)
    setFormValues(list)
  }

  return (
    <form>
      {formValues.map((formValue, index) => (
        <div key={index} className='form'>
          <div className='row'>
            <input
              name='name'
              autoComplete='off'
              className='row__input'
              type='text'
              value={formValue.name}
              onChange={(e) => handleChange(e, index)}
              placeholder='Nombre'
            />
            <input
              name='email'
              autoComplete='off'
              className='row__input'
              type='email'
              value={formValue.email}
              onChange={(e) => handleChange(e, index)}
              placeholder='Email'
            />
            <select
              className='row__select'
              name='menu'
              value={formValue.menu}
              onChange={(e) => handleChange(e, index)}
            >
              <option value=''>Selecciona tu menú</option>
              <option value='normal'>Normal</option>
              <option value='veg'>Vegetariano</option>
              <option value='celiaco'>Celicao</option>
              <option value='inf'>Infantil</option>
            </select>
            <input
              name='allergies'
              autoComplete='off'
              className='row__input'
              type='text'
              value={formValue.allergies}
              onChange={(e) => handleChange(e, index)}
              placeholder='¿Alergias o intolerancias?'
            />

            {index === formValues.length - 1 && (
              <button
                className='form__button--add form__button'
                type='button'
                onClick={handleAddClick}
              >
                +
              </button>
            )}
            {index !== formValues.length - 1 && (
              <button
                className='row__button--del'
                type='button'
                onClick={() => handleRemoveClick(index)}
              >
                {index !== formValues.length - 1 && '🗑️'}
              </button>
            )}
          </div>
        </div>
      ))}
      <textarea
        className='form__textarea'
        placeholder='Mensaje'
        name='message'
        id='message'
        cols='30'
        rows='7'
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type='submit'
        className='form__button--send form__button'
      >
        Enviar
      </button>
    </form>
  )
}

export default MyForm
