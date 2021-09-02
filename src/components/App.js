import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import Loading from "./Instalogo";
import ContextApi from "./ContextApi";


const Dashboard = lazy(()=> import('./Dashboard'))
const Feed = lazy(() => import('./Feed'))
const Login = lazy(() => import('./LoginPage'))
const Signup = lazy(() => import('./signUp'))

const App = () => {
    
    return (
                
        <Router>
            
            <Suspense fallback={<Loading/>}>
                
                <Switch>
                   
                    <Route exact path="/Dashboard">
                        <ContextApi>
                             <Dashboard/>
                        </ContextApi>
                    </Route>
                    
                    <Route exact path='/Feed'>
                        <ContextApi>
                                <Feed/>
                        </ContextApi>
                    </Route>

                    <Route exact path='/'  >
                        <ContextApi>
                                <Login/>
                        </ContextApi>
                    </Route>
                    <Route exact path="/signup" >
                        <ContextApi>
                                <Signup/>
                        </ContextApi>
                    </Route>
                    
                </Switch>
                </Suspense>
                
            </Router>
       
         
    )
}
export default App;