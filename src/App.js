import './App.css';
import Index from './Pages/Index.jsx';
import Article from './Pages/Article.jsx';
import Terms from './Pages/Terms.jsx';
import Privacy from './Pages/Privacy.jsx';

import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (  
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' exact element={<Index/>}/>
     <Route path='/article' exact element={<Article/>}/>
     <Route path='/terms' exact element={<Terms/>}/>
     <Route path='/privacy' exact element={<Privacy/>}/>
      </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
