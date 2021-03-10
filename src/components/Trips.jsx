import styled from 'styled-components'
import Tips from 'components/Tips'

const Trips = () => {
  return (
    <AllTrips>
      <Main>
        Test main
      </Main>
      <Tips/>
    </AllTrips>
  )
}

export default Trips

const AllTrips = styled.section`
  display: flex;
`
const Main = styled.main`
  height: 100vh;
  width: 500px;
`