import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { HomeDashboard, Settings, NoMatch } from './routes'
import ErrorBoundary from './containers/ErrorBoundary'
import store from './redux/store'
import { history } from './redux/router'
import {
  HOME_DASHBOARD,
  SETTINGS_ROUTE,
  NO_MATCH_ROUTE,
} from 'constants/routes'

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={HOME_DASHBOARD} component={HomeDashboard} />
          <Route path={SETTINGS_ROUTE} component={Settings} />
          <Route path={NO_MATCH_ROUTE} component={NoMatch} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  </Provider>
)

export default App
