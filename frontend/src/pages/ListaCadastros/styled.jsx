import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as colors from '../../config/colors'
export const CadastroContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  div + div {
    border-top: 1px solid #eee;
  }
  span {
    width: 20px;
  }
  td {
    margin-left: 15px;
  }
`


export const Th = styled.th`
  text-align: center;
  vertical-align: middle;
`
export const Td = styled.td`
  font-size: 10px;
  text-align: center;
  vertical-align: middle;
`
