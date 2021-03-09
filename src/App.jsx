import {useEffect, useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios'

import GlobalStyle from 'style/global'
import {menuItems} from 'menus'
import NotFound from 'components/404'
import NewTrip from 'components/NewTrip'
import Trips from 'components/Trips'
import NavMenu from 'components/NavMenu'

const App = () => {

  const [results, setResults] = useState([])

  const mapping = {
    newtrip: NewTrip,
    trips: Trips
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get('https://task-devel.cleevio-vercel.vercel.app/api/country')
    setResults(data)
    console.log('fetched', data)
  }

  return (
    <div className="App">
      <GlobalStyle/>
        {/* {results} */}
        <NavMenu>
        <Switch>
          {menuItems.map((item, i) => (
            <Route key={i} path={`/${item.path}`} component={mapping[item.path]}/>
            
          ))}
          <Route path="/404" component={NotFound} />
          <Route path="/" exact component={App} />
          <Redirect to="/404" component={NotFound} />
        </Switch>
        </NavMenu>

    </div>
  );
}

export default App;
