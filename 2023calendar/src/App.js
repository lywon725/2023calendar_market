
import { BrowserRouter as Outlet, Routes, Route, Router } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';

import Layout from './components/Layout/Layout';

import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Mypage from './pages/Mypage';

import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<Layout />}>  {/*상위라우터*/}
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="mypage" element={<Mypage />} />

        </Route>
      </Routes>
      
    </>
  );
}

export default App;
