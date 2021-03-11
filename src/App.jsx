import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyle from 'style/global';
import { menuItems } from 'menus';
import NotFound from 'components/404';
import NewTrip from 'components/NewTrip';
import Trips from 'components/Trips';
import NavMenu from 'components/NavMenu'

const App = () => {

  const mapping = {
    newtrip: NewTrip,
    trips: Trips,
  }

  return (
    <Container className="App">
      <GlobalStyle />
      <NavMenu />
      <Switch>
        {menuItems.map((item, i) => (
          <Route
            key={i}
            path={`/${item.path}`}
            component={mapping[item.path]}
          />
        ))}
        <Route path="/404" component={NotFound} />
        <Route path="/" exact component={App} />
        <Redirect to="/404" component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App

const Container = styled.main`
  display: flex;
`