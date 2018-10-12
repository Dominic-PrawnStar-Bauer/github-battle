var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');


class App extends React.Component {
    render() {
        return(
            <Router>
                <div className = 'container'>
                    <Nav />
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/popular' component={Popular} exact />
                        <Route path='/battle' component={Battle} />
                        <Route render={function () {
                            return <p>Not Found</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        
    )}
}

module.exports = App;