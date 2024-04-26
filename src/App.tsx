import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import SiteInicio from './components/SiteInicio';
import Login from './components/login';
import RecipePage from './components/Receita';

function App(){
  return(
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/SiteInicio" element={<SiteInicio/>}/>
              <Route path='/RecipePage' element={<RecipePage/>}/>
            </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;