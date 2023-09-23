import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contado</li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/company" element={<Company/>}></Route>
        <Route path="/contact"></Route>
        <Route path="/newproject"></Route>
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
