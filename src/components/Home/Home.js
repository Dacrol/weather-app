import './Home.scss'

@observer
export default class Home extends Component {
  @observable
  city = ''
  @observable
  weatherData = {}

  async start() {}

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
