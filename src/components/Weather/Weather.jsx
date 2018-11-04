this.props.weatherData && this.data && <CardTransparent>
  {this.data.weather && this.data.weather[0] && <CardImg
    top
    src={`http://openweathermap.org/img/w/${this.data.weather[0].icon}.png`}
    alt="Card image cap"
    style={{maxWidth: '72px', alignSelf: 'center'}}
  />}
  <CardBody className="pt-0">
    <CardTitle>{this.data.name}, {this.data.sys.country}</CardTitle>
    <CardSubtitle>{this.data.main.temp} &deg;C</CardSubtitle>
    <CardText>
      {this.data.wind.speed} m/s
    </CardText>
  </CardBody>
</CardTransparent>
