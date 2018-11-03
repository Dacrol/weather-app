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
      />
    </FormGroup>
    <Button>Search</Button>
  </Form>
  <Weather />
</div>
</div>