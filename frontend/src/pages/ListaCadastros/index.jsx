/* eslint-disable no-undef */
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import { FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa'
import history from '../../services/history'
import { toast } from 'react-toastify'
import { Container, Titulo } from '../../styles/GlobalStyles'
import { CadastroContainer, Th, Td } from './styled'
import axios from '../../services/axios'
import { Edit, Delete, PriorityHigh } from '@mui/icons-material'
import { Tooltip } from '@mui/material'




export default function ListaCadastros() {
  const [cadastro, setCadastro] = useState([])
  useEffect(() => {
    getCadastro()
  }, [])
  {
    /*Chamada Para Buscar Cadastro*/
  }
  const getCadastro = async () => {
    await axios.get('./cadastro').then(res=>{
      if(res.status === 200){
        setCadastro(res.data)
      }
    })
    .catch(e=>{
      toast.error(
        'Erro ao carregar Cadastros.'
      )
    })
  }
  {
    /*Fim da Chamada Para Buscar Cadastro*/
  }
  {
    /* Chamada para listar dados de Cadastro */
  }
  const loadCadastros = () => {
    if (cadastro.length <= 0) return false
    return cadastro.map((lista, index) => {
      return (
        <tr key={index}>
          <Td>
            {cadastro.map(a => {
              if (a.id === lista.id)
                return (
                  <Link to={`/cadastro/${a.id}/edit`}>
                    <Tooltip title="Editar Cadastro" placement="left-start">
                      <Edit />
                    </Tooltip>
                  </Link>
                )
            })}
          </Td>
          <Td>
            {cadastro.map(a => {
              if (a.id === lista.id) return a.nome
            })}
          </Td>
          <Td>
            {cadastro.map(a => {
              if (a.id === lista.id) return a.cpf
            })}
          </Td>
        </tr>
      )
    })
  }
  {
    /* Chamada para listar dados de Cadastro */
  }
  return (
    <>
      <Container>

        <CadastroContainer>
          <Titulo>Cadastros</Titulo>

          <row>
            <table class="table">
              <thead>
                <tr>
                  <Th></Th>
                  <Th>Nome</Th>
                  <Th>CPF</Th>                  
                  <Th></Th>
                </tr>
              </thead>
              <tbody>{loadCadastros()}</tbody>
            </table>
          </row>
        </CadastroContainer>
      </Container>
    </>
  )
}
EditCadastro.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired
}
