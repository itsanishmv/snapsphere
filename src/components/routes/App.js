import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import Loading from "../loading logo/Instalogo";
import ContextApi from "../ContextApi";


const Dashboard = lazy(()=> import('../dashboard/Dashboard'))
const Feed = lazy(() => import('../feed/Feed'))
const Login = lazy(() => import('../login/LoginPage'))
const Signup = lazy(() => import('../signup/signUp'))

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