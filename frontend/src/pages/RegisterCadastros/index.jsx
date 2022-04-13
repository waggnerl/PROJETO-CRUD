import React, { useState } from 'react'
import { get } from 'lodash'

import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import axios from '../../services/axios'
import { Container, Titulo } from '../../styles/GlobalStyles'
import { Form } from './styled'

export default function RegisterCadastros({ history }) {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  {
    /* Inicio Envio de dados  */
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/cadastro', {
        nome,
        cpf,        
      })
      toast.success('Cadastro criado com sucesso!')
      history.push('/')
      } catch (err) {
      const data = get(err, 'response.data', {})
      const errors = get(data, 'errors', [])

      if (errors.length > 0) {
        errors.map(error => toast.error(error))
      } else {
        toast.error('Erro desconhecido')
      }
    }
  }
  {
    /* Fim Inicio Envio de dados  */
  }
  return (
    <Container>

      <Titulo>Registrar Cadastro</Titulo>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={e=>setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="CPF"
          onChange={e=>setCpf(e.target.value)}
        />
      
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  )
}

RegisterCadastros.propTypes = {
  history: PropTypes.shape([]).isRequired
}
