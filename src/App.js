import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <div style={{backgroundColor:"#744b4b"}}>
   <Header />
   <div style={{backgroundColor:"#744b4b"}}>
   <Routes >
     <Route path='/' element={<Cards/>}  />
     
     <Route path='/cart/:id' element={<CardDetails/>} />

   </Routes>
   </div>
  </div>
  );
}

export default App;
