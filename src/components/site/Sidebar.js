import{
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects';
import PropsDemo from '../concepts/PropsDemo';
import Hooks2 from '../concepts/Hooks';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp'
import NytApp from '../apps/nyt-app/NytApp'
import MovieApp from '../apps/the-movie-db/MovieApp'

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Resources'>Resources</Link></li>
                    <li><Link to='/FunctionalComponents'>Functional Component</Link></li>
                    <li><Link to='jsxrules'>JSX Rules</Link></li>
                    <li><Link to='/state'>State</Link></li>
                    <li><Link to='/effects'>Effects</Link></li>
                    <li><Link to='propsdemo'>Props Demo</Link></li>
                    <li><Link to='hooks2'>Hooks</Link></li>
                    <li><Link to="/timer">Timers</Link></li>
                    <li><Link to="/nytapp">NYT App</Link></li>
                    <li><Link to="/movieapp">Movie App</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/Resources'><Resources /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/FunctionalComponents'><FunctionalComponentDemo /></Route>
                    <Route exact path='/jsxrules'><JSXRules /></Route>
                    <Route exact path='/state'><State /></Route>
                    <Route exact path='/effects'><Effects /></Route>
                    <Route exact path='/propsdemo'><PropsDemo /></Route>
                    <Route exact path='/Hooks2'><Hooks2 /></Route>
                    <Route exact path='/timer'><TimePiecesApp/></Route>
                    <Route exact path='/nytapp'><NytApp /></Route>
                    <Route exact path='/movieapp'><MovieApp /></Route>
                </Switch>
            </div>
        </div>
    );
};



export default Sidebar;