import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contado</li>
      </ul>
      <Routes>
        <Route path="/"></Route>
        <Route path="/company"></Route>
        <Route path="/contact"></Route>
        <Route path="/newproject"></Route>
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
