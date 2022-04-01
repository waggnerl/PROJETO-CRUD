import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
//import { isEmail, isInt, isFloat } from 'validator'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
//import { FaUserCircle, FaEdit } from 'react-icons/fa'
//import { Link } from 'react-router-dom'

import axios from '../../services/axios'
import { Container } from '../../styles/GlobalStyles'
import { Form, ProfilePicture, Title } from './styled'


export default function EditCadastro({ match, history }) {
  const id = get(match, 'params.id', '')

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [inome, setINome] = useState([])
  const [icpf, setICpf] = useState([])
  


  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`/cadastro/${id}`)
        setNome(data.nome)       
        setCpf(data.cpf)
      } catch (err) {
        const status = get(err, 'response.status', 0)
        const errors = get(err, 'response.data.errors', [])

        if (status === 400) errors.map(error => toast.error(error))
        history.push('/')
      }
    }
    getData()
    })
    
      {
        /*Envio de dados  */
      }
    const handleSubmit = async e => {
      e.preventDefault()
      let formErrors = false
      
      if (formErrors) return
  
      try {
        await axios.put(`/cadastro/${id}`, {
          nome,
          cpf
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
  
      {/* Fim Envio de dados  */}
  return (
    <Container>
      <Title>
        Editar dados cadastrais
      </Title>
      <Form onSubmit={handleSubmit}>
      <label>Nome:</label>
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

EditCadastro.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired
}
