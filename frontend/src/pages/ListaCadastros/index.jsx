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
  const [equipamentos, setEquipamentos] = useState([])
  const [equipamentosId, setEquipamentosId] = useState([])
  const [contador, setContador] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    
  }, [])

  {
    /*Chamada Para Buscar Equipamentos*/
  }

  const getEquipamentos = async () => {

   
  }
  {
    /* Fim da chamada para listar dados de equipamentos */
  }
  {
    /*Chamada Para Buscar Contador*/
  }
  const getContador = async () => {

   
  }
  {
    /*Fim da Chamada Para Buscar Contador*/
  }

  {
    /* Chamada para listar dados de equipamentos */
  }
  const loadCadastros = () => {
    if (cadastros.length <= 0) return false
    return cadastros.map((lista, index) => {
      return (
        <tr key={index}>
          <Td>
            {cadastros.map(a => {
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
            {cadastros.map(a => {
              if (a.id === lista.id) return 
            })}
          </Td>
          <Td>
            {cadastros.map(a => {
              if (a.id === lista.id) return 
            })}
          </Td>
          
        </tr>
      )
    })
  }
  {
    /* Chamada para listar dados de equipamentos */
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
              <tbody>{}</tbody>
            </table>
          </row>
        </CadastroContainer>
      </Container>
    </>
  )
}
