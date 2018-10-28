<Router>
  {/* MobX observable style needs spread wrapping */}
  <div className="App d-flex flex-column" style={{...this.style}}>
    {/* <header>
      <MainNav />
    </header> */}
    <Container tag="main" className="flex-grow-1">
      <Route exact path="/">
        <Row>
          <Home />
        </Row>
      </Route>
      <Route path="/clock" component={Clock} />
      <Route path="/todo-list" component={TodoList} />
      <Route path="/conditionals" component={Conditionals} />
      <Route path="/loops" component={Loops} />
    </Container>
  </div>
</Router>
