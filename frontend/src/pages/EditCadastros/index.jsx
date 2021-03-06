import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'


import axios from '../../services/axios'
import { Container } from '../../styles/GlobalStyles'
import { Form, Title } from './styled'


export default function EditCadastros({ match, history }) {
  const id = get(match, 'params.id', '')

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')



  const handleSubmit = async e => {
    e.preventDefault()
    try {

      await axios.put(`/cadastro/${id}`, {
        nome,
        cpf,
      })
      toast.success('Cadastro editado com sucesso!')
      history.push('/')
    } catch (err) {
      const status = get(err, 'response.status', 0)
      const data = get(err, 'response.data', {})
      const errors = get(data, 'errors', [])

      if (errors.length > 0) {
        errors.map(error => toast.error(error))
      } else {
        toast.error('Erro desconhecido')
      }
    }
  }





  return (
    <Container>
      <Title>
        Alterar Dados
      </Title>

      <Form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <label>CPF:</label>
        <input
          type="number"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  )
}

EditCadastros.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired
}
