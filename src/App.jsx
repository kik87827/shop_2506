
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './App.css';
import bgimg from './assets/bg-1.png';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'
import DetailPage from './pages/DetailPage.jsx';

function App() {
  const [shopData, setShopData] = useState(data);
  return (
    <>
      <div className="App">
        
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* <Link to="/">홈</Link>
        <Link to="detail">상세페이지</Link> */}

        <Routes>
          <Route path="/" element={
            <>
              <div className="main-bg" style={{backgroundImage : `url(${bgimg})` }}></div>
              <div className="container">
                <div className="row">
                  {
                    shopData.map((item, index) => 
                      <div className="col-md-4" key={item.id}>
                        <CardItem propsShoes={item}  />
                      </div>
                    )
                  }
                </div>
              </div>
            </>
          } />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </div>
    </>
  )
}

function CardItem({propsShoes}) {
  return (
    <>
      <img src={`https://codingapple1.github.io/shop/shoes${propsShoes.id+1}.jpg`} width="80%" />
      <h4>{propsShoes.title}</h4>
      <p>{propsShoes.content}</p>
    </>
  )
}

export default App
