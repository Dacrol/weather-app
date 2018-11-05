import './Home.scss'
import styled from 'styled-components'

const WeatherContainer = styled.div`
  min-width: 512px;
`

@observer
export default class Home extends Component {
  @observable
  city = ''
  @observable
  weatherData = null

  async start() {}

  updateCity(e) {
    this.city = e.currentTarget.value
  }

  search(e) {
    e.preventDefault()
    fetch('/api/search-weather-city?city=' + this.city, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.weatherData = data
        console.log(toJS(this.weatherData))
      })
  }
}
