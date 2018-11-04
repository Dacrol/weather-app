<div className="pt-5 w-100 d-flex justify-content-center align-items-center">
  <div className="text-center">
    <Form>
      <FormGroup>
        <Label for="city">Search weather in:</Label>
        <Input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={this.city}
          onChange={e => (this.city = e.currentTarget.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              this.search(e)
            }
          }}
        />
      </FormGroup>
      <Button onClick={this.search}>Search</Button>
    </Form>
    <Weather />
  </div>
</div>
