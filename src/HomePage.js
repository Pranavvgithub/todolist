import React from 'react'
import Login from './Login'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom'
function HomePage() {
    return (
        <div className="App">
            <br></br>
            <br></br>
            <img style={{height: '100px'}} src="https://verzeo.com/v3/images/nav/logoblack.png"/>
            <br></br>
            <h1>Be more Productive with Todo App  🚀 !</h1>
            <br></br>
            <Switch> */}
                <Route exact path='/' component={Login}/>
                {/* whenever / is there in url the login component will be displayed */}
                {/* exact means if only / then only the above action will be performed */}
                <Route exact path='/App/:username' component={App}/>
                {/* whenever there is /App/{enterd username} then the user is routed to App.js with :username as params which can be accessed by the App.js using the router hooks useParams . But since this is a demo project by verzeo so I have not included creating a separate collection for evry user into the database */}
            </Switch>
        </div>
    )
}

export default HomePage
