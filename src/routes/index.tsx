import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout';
import ContentCreator from '../pages/ContentCreator';

const Routes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route path="/" exact component={ContentCreator} />
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default Routes;