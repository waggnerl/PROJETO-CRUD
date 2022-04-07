import React  from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { Home, PersonAddAlt } from '@mui/icons-material'
import { Nav } from './styled'

export default function Header() {    
  return (
    <>      
        <Nav>          
            <Link to="/">
              <Tooltip title="Pagina Inicial">
                <Home />
              </Tooltip>
            </Link>                 
            <Link to="/cadastro/register">
              <Tooltip title="Incluir Cadastro">
                <PersonAddAlt />
              </Tooltip>
            </Link>                                                
        </Nav>     
    </>
  )
}
