import './App.scss'
import {useEffect, useState} from 'react'
import Header from "../Header";

function App() {
    const [country, setCountry] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then(response => response.json())
            .then(json => {
                const selectedCountry = Math.floor(Math.random() * json.length)
                const dataCountry = json[selectedCountry]
                setCountry(dataCountry)
                setError(false)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setLoading(true)
            })
    }, [])

    if (loading && country.length === 0) return <span>Loading...</span>
    if (error) return <span>Error while loading data...</span>
    return <div className="App">
        <Header flag={country.flag}/>
    </div>
}

export default App
