import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  HomeDashboard,
  CreatePassword,
  EditPassword,
  Settings,
  NoMatch,
} from './routes'
import { ErrorBoundary, Layout } from './containers'
import store from './redux/store'
import {
  HOME_DASHBOARD_ROUTE,
  CREATE_PASSWORD_ROUTE,
  EDIT_PASSWORD_ROUTE,
  SETTINGS_ROUTE,
} from './constants/routes'

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router basename="/passwords-manager">
        <Layout>
          <Switch>
            <Route
              exact
              path={HOME_DASHBOARD_ROUTE}
              component={HomeDashboard}
            />
            <Route
              exact
              path={CREATE_PASSWORD_ROUTE}
              component={CreatePassword}
            />
            <Route path={EDIT_PASSWORD_ROUTE} component={EditPassword} />
            <Route path={SETTINGS_ROUTE} component={Settings} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </ErrorBoundary>
  </Provider>
)

export default App
