import React from 'react'
import { Switch,Route } from 'react-router-dom'

import RegisterCadastros from '../pages/RegisterCadastros/index'
import EditCadastros from '../pages/EditCadastros/index'
import ListaCadastros from '../pages/ListaCadastros/index'
import Page404 from '../pages/page404.js/index.jsx'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ListaCadastros}  />
      <Route
        exact
        path="/cadastro/register/"
        component={RegisterCadastros}        
      />
      <Route
        exact
        path="/cadastro/:id/edit"
        component={EditCadastros}
      />
      
      <Route path="*" component={Page404} />
    </Switch>
  )
}
