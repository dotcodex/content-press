import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout';
import Home from '../pages/Home';

const Routes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default Routes;