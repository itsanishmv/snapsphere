import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import Loading from "./Instalogo";
import CounterContext from "./counterContext";


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
                        <CounterContext>
                             <Dashboard/>
                        </CounterContext>
                    </Route>
                    
                    <Route exact path='/Feed'>
                        <CounterContext>
                                <Feed/>
                        </CounterContext>
                    </Route>

                    <Route exact path='/'  >
                        <CounterContext>
                                <Login/>
                        </CounterContext>
                    </Route>
                    <Route exact path="/signup" >
                        <CounterContext>
                                <Signup/>
                        </CounterContext>
                    </Route>
                    
                </Switch>
                </Suspense>
                
            </Router>
       
         
    )
}
export default App;