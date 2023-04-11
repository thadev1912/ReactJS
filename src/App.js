
import './App.css';
import React from "react";
import { publicRoutes } from './routes/index';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
//import Trangchu from '../src/components/Test/Trangchu';
import {DefaultLayout} from './components/layouts';
//import Header from './components/layouts/Header';

//import Footer from '../src/page/Footer';
//import Content from '../src/page/Content/content';
//import Sinhvien from './components/Sinhvien/sinhvien';
function App() {

    return (
   <Router> 
    <div className="App">    
    <Routes>
          {publicRoutes.map((route,index)=> {
          const Layout=route.Layout || DefaultLayout;
               const Page=route.component
               return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
          }
          )}
      </Routes>
      
    </div>
  </Router>

    )
  

}

export default App;