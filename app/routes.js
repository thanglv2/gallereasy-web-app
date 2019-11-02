import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainLayout from 'containers/MainLayout';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MainLayout} />
    </Switch>
  </BrowserRouter>
)
