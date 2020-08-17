import React, { Component } from 'react'

import { Cards, Charts, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './images/image.png'
export class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data : {},
             country: ''
        }
    }
    

    async componentDidMount()  {

        const data = await fetchData();
       this.setState({
           data: data
       })

    }
    handleCountryChange =  async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country: country
        })


    }
    render() {


        const { data, country} = this.state;

        return (
            <div className={styles.container}>
                <img src= {coronaImage}></img>
                <Cards className={styles.image} data= {data} alt="COVID 19"></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                <Charts data={data} country={country}></Charts>
            </div>
        )
    }
}

export default App
