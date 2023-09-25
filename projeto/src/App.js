import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/Newproject';

import Container from './components/pages/layout/Container';
import Navbar from './components/pages/layout/Navbar';
import Footer from './components/pages/layout/Footer';

function App() {
  return (
    <Container customClass="min-height">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/company" element={<Company/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/newproject" element={<Newproject/>}></Route>
      </Routes>
    <Footer/>
    </Router>
    </Container>
  );
}


export default App;

