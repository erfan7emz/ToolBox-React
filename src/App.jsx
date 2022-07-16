import React, { Component } from 'react'
import Tool from './components/tool';
import { Route, Routes} from 'react-router-dom';
import List from './components/list';
import NotFound from './components/not-found';
import Navbar from './components/navbar'
import Company from './components/company';
import Login from './components/login';
import SignUp from './components/signup';

class App extends Component {
    render() { 
        return (
            <>
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path='/' element={<Tool />}></Route>
                    <Route path='/tool/:id' element={<Company />}></Route>
                    <Route path='/tool' element={<Tool />}></Route>
                    <Route path='/list' element={<List />}></Route>
                    <Route path='/sign-up' element={<SignUp />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/not-found' element={<NotFound />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </main>
            </>
        );
    }
}
 
export default App;