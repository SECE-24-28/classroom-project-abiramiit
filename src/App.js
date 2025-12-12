import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Users from './Users';
import Books from './Books';

function App() {
  return (
    <BrowserRouter>
      <h1>I'm from App</h1>
      
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact-us"><li>Contact</li></Link>
        <Link to="/users/1"><li>Users1</li></Link>
        <Link to="/users/2"><li>Users2</li></Link>
        <Link to="/book/newbook"><li>new book</li></Link>
        <Link to="/book/oldbook"><li>old book</li></Link>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/users/:id" element={<Users />} />

        <Route path="/book">
          <Route path="newbook" element={<Books />} />
          <Route path="oldbook" element={<Books />} />
        </Route>

        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
