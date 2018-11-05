import styled from 'styled-components'

const CardTransparent = styled(Card)`
  background-color: transparent;
  margin-top: 40px;
  max-width: 512px;
`

@observer
export default class Weather extends Component {
  @observable
  data = null

  componentWillReact() {
    if (this.props.weatherData && this.props.weatherData.data) {
      this.data = this.props.weatherData.data
    }
  }
  async start() {}
}
