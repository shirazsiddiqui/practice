
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Api from './components/Api';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <>
      <h1>hello project</h1>
      <BrowserRouter>
        <Link to='/'>Home &nbsp;</Link>
        <Link to='/about'>About &nbsp;</Link>
        <Link to='/contact'>Contact &nbsp;</Link>
        <Link to='/api'>Api &nbsp;</Link>
        <Link to='/form'>Form</Link>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/api' element={<Api />} />
          <Route path='/form' element={<Form />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
