
import './App.scss';
import React from "react";
import { publicRoutes } from './routes/index';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {DefaultLayout} from './components/layouts';
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