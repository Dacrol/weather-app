<div className="pt-5 w-100 d-flex justify-content-center align-items-center">
  <WeatherContainer className="text-center">
    <Form>
      <FormGroup>
        <Label for="city">Search weather in:</Label>
        <Input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={this.city}
          onChange={(e) => {
            this.updateCity(e)
          }}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              this.search(e)
            }
          }}
        />
      </FormGroup>
      <Button onClick={(e) => this.search(e)}>Search</Button>
    </Form>
    <Weather weatherData={this.weatherData}/>
  </WeatherContainer>
</div>
