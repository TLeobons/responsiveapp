import {useEffect, useState} from 'react'
import axios from 'axios'
import {globeIcon} from 'assets/svgs'
import Netherlands from 'assets/flags/netherlands.svg'

const NewTrip = () => {
  
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

//  TODO:
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
    <form>
      <label for='countries'>Where do you want to go</label>
      <select name='countries'>
      {/* TODO: */}
        <option> <img src={globeIcon} alt='' height='20px'/> Select Country</option>
        {countries.map(country => (
        <option value={country.label}>{flagsMapping[country.value]}{country.label}</option>
        ))}
      </select>
    </form>
  )
}

export default NewTrip