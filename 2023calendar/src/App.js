
import { BrowserRouter as Outlet, Routes, Route, Router } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';

import Layout from './components/Layout/Layout';

import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Mypage from './pages/Mypage';
import UserEdit from './pages/UserEdit';
import Order1 from './pages/order/Order1';
import Order2 from './pages/order/Order2';
import Order_complete from './pages/order/Order_complete';

import './App.css';
import { useEffect } from 'react';


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
          <Route path="mypage/UserEdit" element={<UserEdit />} />
          
          <Route path="order1" element={<Order1 />} />
          <Route path="order2" element={<Order2 />} />
          <Route path="order_complete" element={<Order_complete />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
