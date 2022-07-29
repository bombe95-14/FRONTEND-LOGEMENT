
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar';
import Enroll from './Pages/Enroll/Enroll'
import DiversServices from './Pages/Services/DiversServices'
import SearchProperty from './Pages/SearchProperty/SearchProperty'
import Connected from './Pages/Connected/Connected'
import DetailsLocals from './Pages/DetailsLocals/DetailsLocals';

//gitimport About from './components/About';
//import Home from './components/Home';

function App() {
  /*return (
<div>
    
  <h1>home home</h1>
  <ul>
  <li>lundi</li>
  <li>mardi</li>
  <li>mercredi</li>
  </ul>

<ul>
<Item source='image/mysql.png' className="first" />
<Item source='image/Node.png' className="first" />
<Item source='image/php.png' className="first" />
<Item source='image/htmll.png' className="first" />
<Item source='image/mysql.png' className="first" />
</ul>

</div>
   
  );*/

return (
  <BrowserRouter>  
  <Navbar /> 
  <Routes> 
            <Route path='/' element={ <Home /> }>  </Route>
            <Route path='/enroll' element={ <Enroll /> }>  </Route>
            <Route path='/services/:type_services' element={ <DiversServices /> }>  </Route>
            <Route path='/search/:lieu/:typelocal/:prix' element={ <SearchProperty /> }>  </Route>
            <Route path='/connected/:name' element={ <Connected /> }>  </Route>
            <Route path='/see/:ville/:typeLocal/:datePublicat/:nomAgent' element={ <DetailsLocals /> }>  </Route>
  </Routes>
  <Footer />
</BrowserRouter>
)

}

export default App;
