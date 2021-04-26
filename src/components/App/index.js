import './App.scss'
import {useEffect, useState} from 'react'

function App() {
    const [country, setCountry] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    console.log("loading",loading)
    console.log(country.length)

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then((response) => response.json())
            .then((json) => {
                const selectedCountry = Math.floor(Math.random() * json.length)
                const dataCountry = json[selectedCountry]
                setCountry(dataCountry)
                setError(false)
            })
            .catch(()=> {
                setError(true)
            })
            .finally(() => {
                setLoading(true)
            })
    }, [])

    return <div className="App">
        {error && <p>Error</p>}
        {loading && country.length === 0 && <p>Loading...</p>}
    </div>
}

export default App
