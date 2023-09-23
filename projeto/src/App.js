import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/Newproject';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
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
