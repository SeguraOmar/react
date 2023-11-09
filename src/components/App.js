import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './Home/Home';
import About from './About/About';
// import Search from './Search/Search';
// import List from './List/List';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about/:data" element={<About />} />
          {/* <Route path="/search" element={<Search />} /> */}
          {/* <Route path="/list/:data" element={<List />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;