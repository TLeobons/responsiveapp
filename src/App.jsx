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
      <Main>
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
      </Main>
      <SideBar>

      </SideBar>
    </Container>
  );
}

export default App

const Container = styled.div`
  display: flex;
  grid-template-columns: 240px 1fr 320px;
`
const Main = styled.main`
  padding: 40px;
  width: 100%;

`
const SideBar = styled.aside`
  height: 100vh;
  border-left: 1px solid #F1F1F2;
  padding: 40px;
`