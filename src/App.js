import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home, About, Contact, Users, NestedUser, Header, SignIn, SignUp, Todo, TodoMongoose, TodoMysql} from "./components"

function App() {
  return (
    <Router>
    <Header/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/todo/mongo/:email">
            <Todo/>
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/users" exact={true}>
            <Users />
          </Route>
          <Route path="/users/:id">
            <NestedUser />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/todo/mongoose">
            <TodoMongoose />
          </Route>
          <Route path="/todo/mysql/">
            <TodoMysql />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
