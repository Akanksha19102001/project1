import {Route,Switch} from 'react-router-dom'

import Categories from './pages/Categories'
import Dashboard from './pages/Dashboard'
import Nav from './pages/Nav'
import Products from './pages/Products'
import Notifications from './pages/Notifications'
import Users from './pages/Users'
import Addproduct from './pages/Addproduct'

function App() {
  return (
    <>
    <div style={{display:'flex'}}>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/categories' component={Categories}/>
          <Route path='/products' component={Products}/>
          <Route path='/notifications' component={Notifications}/>
          <Route path='/users' component={Users}/>
          <Route path='/addproduct' component={Addproduct}/>
        </Switch>
    </div>
    </>
  );
}

export default App;
