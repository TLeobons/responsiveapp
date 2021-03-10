import {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {globeIcon} from 'assets/svgs'
import Netherlands from 'assets/flags/netherlands.svg'

const NewTrip = () => {
  
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

//  TODO: cant insert flags
  const flagsMapping = {
   aw: Netherlands,
  }

  const fetchData = async () => {
    const { data } = await axios.get('https://task-devel.cleevio-vercel.vercel.app/api/country')
    const sortedData = data.sort((a, b) => a.label > b.label ? 1 : -1)
    setCountries(sortedData)
    console.log('fetched', sortedData);
  }

  return (
    <Container>
      <Heading>New trip</Heading>
      <Form>
        <FormGroup>
        
          <label for='countries'>Where do you want to go</label>
          <select name='countries'>
          {/* TODO: cant insert globeIcon */}
            <option> <img src={globeIcon} alt='' height='20px'/> Select Country</option>
            {countries.map(country => (
            <option value={country.label}>{flagsMapping[country.value]}{country.label}</option>
            ))}
          </select>

        </FormGroup>

        <FormGroup>
        
          <label for='start-date'>Start date</label>
          <input id='start-date' type='date'/>

          <label for='end-date'>End date</label>
          <input id='end-date' type='date'/>

        </FormGroup>

        <FormGroup>
          
          <label for='company'>Company name</label>
          <input id='company' name='company'/>

          <label for='street'>Street</label>
          <input id='street' name='street'/>

          <label for='street-number'>Street number</label>
          <input id='street-number' name='street-number'/>

          <label for='city'>City</label>
          <input id='city' name='city'/>

          <label for='zip-code'>Zip code</label>
          <input id='zip-code' name='zip-code'/>

        </FormGroup>

        <FormGroup>

          <label for='tested-covid'>Have you been recently tested for <strong>COVID-19</strong></label>
          {/* TODO: error "input a void element tag" */}
          {/* <input id='tested-covid' type='radio'>Yes</input> */}
          {/* <input id='tested-covid' type='radio'>No</input> */}

        </FormGroup>

      </Form>
    </Container>
  )
}

export default NewTrip

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const Heading = styled.h1`
  padding: 2rem;
  border-bottom: 1px solid var(--grey);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const FormGroup = styled.div`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;

`