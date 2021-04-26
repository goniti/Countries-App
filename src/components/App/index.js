import './App.scss'
import {useEffect, useState} from 'react'

function App() {
    const [country, setCountry] = useState([])
    console.log(country)
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then((response) => response.json())
            .then((json) => {
                const selectedCountry = Math.floor(Math.random() * json.length)
                const dataCountry = json[selectedCountry]
                setCountry(dataCountry)
            })
    }, [])

    return <div className="App"></div>
}

export default App
