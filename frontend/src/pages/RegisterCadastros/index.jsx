import React, { useState, useEffect } from 'react'
//import { get } from 'lodash'
//import { isInt } from 'validator'

import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import axios from '../../services/axios'
import { Container, Titulo } from '../../styles/GlobalStyles'
import { Form } from './styled'

export default function RegisterCadastros({ history }) {

  

  useEffect(() => {

  }, [])

  const getSetores = async () => {
    
  }
  const loadSetores = () => {
    
  }

  const loadTipos = () => {
   
  }

  const loadStatus = () => {
   
  }

  

  return (
    <Container>

      <Titulo></Titulo>

      <Form >
        <input
          type="text"
          placeholder="Modelo"
        />
        <input
          type="number"
          placeholder="Patrimonio"
        />
        <input
          type="text"
          placeholder="Numero de Série"
        />
        <div>
          <select
            class="form-select form-select- mb-3"
          >
            <option>Selecione um setor</option>
            {}
          </select>
        </div>
        <div>
          <select
            class="form-select form-select- mb-3"
          >
            <option>Selecione o tipo de papel que deseja</option>
            {}
          </select>
        </div>
        <div>
          <select
            class="form-select form-select- mb-3"
          >
            <option>Selecione Status do Equipamento</option>
          </select>
        </div>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  )
}
//{ match, history }
RegisterCadastros.propTypes = {
  history: PropTypes.shape([]).isRequired
}
//  match: PropTypes.shape({}).isRequired,
