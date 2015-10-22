const {Router, Route, Link} = ReactRouter;

const Login = React.createClass ({
  render: function() {
    return (
      <div>
        <h1>Hello from React</h1>
        <h3>Log in please</h3>
        <form method="get" action="/home/:name">
          <input type="text" name="login-name"/>
          <input type="submit" id="submit-login"/>
        </form>
      </div>
    )
  }
})


const Home = React.createClass ({
  render: function() {
    return (
      <div class="container">
        <h1>Flipfolio</h1>
        <div id="left_page" class="left page"></div>
        <div id="right_page" class="right page"></div>
        <div id="home"></div>
      </div>
    )
  }
})


React.render((
  <Router>
    <Route path='/' component={Login} />
    <Route path='/home' component={Home} />
  </Router>
  ), document.body)