import './App.scss'
import {useEffect, useState} from 'react'

function App() {
    const [country, setCountry] = useState([])
    const [error, setError] = useState(false)
    console.log("error",error)
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
    }, [])

    return <div className="App">
        {error && <p>Error during data loading!</p>}
    </div>
}

export default App
