
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './App.css';
import bgimg from './assets/bg-1.png';
import { createContext, useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import DetailPage from './routes/DetailPage.jsx';
import AboutPage from './routes/AboutPage.jsx';
import EventPage from './routes/EventPage.jsx';
import axios from 'axios';
import CartPage from './routes/CartPage.jsx';

export let Context1 = createContext();

function App() {
  const [shopData, setShopData] = useState(data);
  const [storeData,setStoreData] = useState([10,11,12]);
  const [moreBtn, setMoreBtn] = useState(true);
  const [moreClickCount,setMoreClickCount] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
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
              <div style={{textAlign : "center"}}>
                <button onClick={()=>{
                  let copyData = [...shopData];
                  let sortData = copyData.sort((a, b) => a.title.localeCompare(b.title));
                  setShopData(sortData);
                }}>가다나순 정렬</button>
              </div>
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
              {
                loadingMore ? <div>Loading...</div> : ''
              }
              
              <div>
                {
                  moreBtn ? <button onClick={() => {
                    Promise.all([
                      axios.get('https://codingapple1.github.io/shop/data2.json'),
                      axios.get('https://codingapple1.github.io/shop/data3.json')
                    ])
                    .then(([res1,res2]) => {
                      let copyData = [...shopData];
                      setMoreClickCount(moreClickCount + 1);
                      if(moreClickCount === 0){
                        // console.log('data2',res1.data);
                        setLoadingMore(true);
                        copyData.push(...res1.data);
                      }else if(moreClickCount === 1){
                        // console.log('data3',res2.data);
                        setLoadingMore(true);
                        copyData.push(...res2.data);
                        setMoreBtn(false)
                      }else{
                        setLoadingMore(false);
                      }
                      setTimeout(()=>{
                        setLoadingMore(false);
                      },50);
                      setShopData(copyData);
                      
                    }).catch(() => {
                      console.log('실패');
                      setLoadingMore(false);
                    })
                    /* axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
                      console.log(result.data);
                      let copyData = [...shopData];
                      copyData.push(...result.data);
                      setShopData(copyData);
                      setLoadingMore(true);
                      setMoreBtn(false);
                      setLoadingMore(false);
                    }).catch(() => {
                      console.log('실패');
                      setLoadingMore(false);
                    }) */
                  }}>더보기</button> : null
                }
                
                
              </div>
            </>
          } />
          <Route path="/detail/:id" element={
            <Context1.Provider value={{ storeData, shopData }}>
              <DetailPage propsShoes={shopData} />
            </Context1.Provider>
          } />
          <Route path="/about" element={<AboutPage />}>
            <Route path="member" element={<div>member</div>} />
          </Route>
          <Route path="/event" element={<EventPage />}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
            <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
          </Route>
          <Route path="*" element={<div>없는페이지요</div>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  )
}

function CardItem({ propsShoes }) {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={()=>{navigate(`/detail/${propsShoes.id}`)}}>
        <img src={`https://codingapple1.github.io/shop/shoes${propsShoes.id + 1}.jpg`} width="80%" />
        <h4>{propsShoes.title}</h4>
        <p>{propsShoes.content}</p>
      </div>
    </>
  )
}

export default App
