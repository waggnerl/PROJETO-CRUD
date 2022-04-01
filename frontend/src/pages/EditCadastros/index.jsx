import React, { useState, useEffect } from 'react'
//import { get } from 'lodash'
//import { isEmail, isInt, isFloat } from 'validator'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
//import { FaUserCircle, FaEdit } from 'react-icons/fa'
//import { Link } from 'react-router-dom'

import axios from '../../services/axios'
import { Container } from '../../styles/GlobalStyles'
import { Form, ProfilePicture, Title } from './styled'


export default function EditCadastros({ match, history }) {


  useEffect(() => {
    async function getData() {
      
  }})
  {
    /* Início extrair dados de setores */
  }
  const getSetores = async () => {
   
  }
  {
    /* Fim extrair dados de setores */
  }
  {
    /* Início carregar dados de setores */
  }
  const loadSetores = () => {
   
  }
  {
    /* Fim carregar dados de setores */
  }
  {
    /* Início carregar options select-setores */
  }
  const loadSetoresId = () => {
    
  }
  {
    /* Fim carregar options select-setores */
  }

  {
    /* Inicio Envio de dados  */
  }
  const handleSubmit = async e => {
    
  }

  return (
    <Container>

      <Title>
        Impressora: {} <br /> Patrimonio: {}
      </Title>

      <Form >
        <div>
          <label>Tipo:</label>
          <select
            class="form-select form-select- mb-3"
          >
            <option></option>
            <option>Preto e Branco</option>
            <option>Colorido</option>
          </select>
        </div>
        <label>Patrimônio:</label>
        <input
          type="number"
        />
        <label>Número de Série:</label>
        <input
          type="text"
        />
        <div>
          <label>Setor:</label>
          <select
            class="form-select form-select- mb-3"
          >
          </select>
        </div>
        <div>
          <label>Status:</label>
          <select
            class="form-select form-select- mb-3"
          >
            <option></option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
        </div>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  )
}

EditCadastros.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired
}
