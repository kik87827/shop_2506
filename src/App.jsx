
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './App.css';
import bgimg from './assets/bg-1.png';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './routes/DetailPage.jsx';
import AboutPage from './routes/AboutPage.jsx';
import EventPage from './routes/EventPage.jsx';

function App() {
  const [shopData, setShopData] = useState(data);
  const navigate = useNavigate();
  return (
    <>
      <div className="App">

        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
              <Nav.Link onClick={() => { navigate(-1) }}>Back</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* <Link to="/">홈</Link>
        <Link to="detail">상세페이지</Link> */}

        <Routes>
          <Route path="/" element={
            <>
              <div className="main-bg" style={{ backgroundImage: `url(${bgimg})` }}></div>
              <div className="container">
                <div className="row">
                  {
                    shopData.map((item, index) =>
                      <div className="col-md-4" key={item.id}>
                        <CardItem propsShoes={item} />
                      </div>
                    )
                  }
                </div>
              </div>
            </>
          } />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />}>
            <Route path="member" element={<div>member</div>} />
          </Route>
          <Route path="/event" element={<EventPage />}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
            <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
          </Route>
          <Route path="*" element={<div>없는페이지요</div>} />
        </Routes>
      </div>
    </>
  )
}

function CardItem({ propsShoes }) {
  return (
    <>
      <img src={`https://codingapple1.github.io/shop/shoes${propsShoes.id + 1}.jpg`} width="80%" />
      <h4>{propsShoes.title}</h4>
      <p>{propsShoes.content}</p>
    </>
  )
}

export default App
