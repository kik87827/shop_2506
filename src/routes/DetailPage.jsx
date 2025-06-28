import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

{/* <Detail2></Detail2>
class Detail2 extends React.Component {
    componentDidMount() {
        
    }
    componentDidUpdate() {
        
    }
    componentWillUnmount() {
        
    }
} */}

let Btn = styled.button`
    background : ${props => props.bg};
    color : ${ props => props.bg === 'blue' ? 'white' : 'black'};
    padding : 10px;
`

let NewBtn = styled(Btn)`
    border-radius : 5px;
`

let Box = styled.div`
    background : grey;
    padding : 20px;
`

function DetailPage({propsShoes}) {
    const {id} = useParams();
    const id_number = Number(id);
    /* const detailShoes = propsShoes.find(()=>{
        return pitem.id === id;
    });
    console.log(detailShoes) */
    const detailShoes = propsShoes.find((item)=>{
        return item.id === id_number;
    })
    
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [inputValue, setInputValue] = useState('');
    let [warn, setWarn] = useState(false);
    let [tab, setTab] = useState(1);

    let [detailFade, setDetailFade] = useState('');

    useEffect(() => {
        /* console.log('안녕');
        let timerID = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => {
            console.log(1);
            if (timerID) {
                clearTimeout(timerID);
            }
        } */
        
        setWarn(isNaN(inputValue));
    }, [inputValue])
    
    useState(() => {
        let detailSet = setTimeout(() => {
            setDetailFade('end')
        },50);
        return () => {
            clearTimeout(detailSet);
        }
    }, []);


    return (
        <div className={`container start ${detailFade}`}>
            {
                alert ? <div className="alert alert-warning">
                    2초이내 구매시 할인
                </div> : null
            }
            
            {count}
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
            <Box>
                <Btn bg="blue">버튼</Btn>
                <Btn bg="yellow">버튼</Btn>
                <Btn bg="orange">버튼</Btn>
                <NewBtn>버튼</NewBtn>
            </Box>
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${detailShoes.id+1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <div>
                        {/* <input type="text" onChange={(e) => {
                            setWarn(isNaN(e.target.value));
                        }} /> */}
                        <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                        {
                            warn ? <p style={{ color: 'red' }}>숫자만 입력하세요</p> : null
                        }
                    </div>
                    <h4 className="pt-5">{ detailShoes.title }</h4>
                    <p>{ detailShoes.content }</p>
                    <p>{ detailShoes.price }</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey={tab}>
                <Nav.Item>
                    <Nav.Link eventKey={0} onClick={()=>{setTab(0)}}>Tab1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={1} onClick={()=>{setTab(1)}}>Tab2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={2} onClick={()=>{setTab(2)}}>Tab3</Nav.Link>
                </Nav.Item>
            </Nav>     
            <TabContents tabIndex={tab} />
        </div> 
    )
}

function TabContents({ tabIndex }) {
    const [fade, setFade] = useState(''); 
    useEffect(() => {
        let fadeTime = setTimeout(() => {
            setFade('end');
        }, 30);
        return () => {
            clearTimeout(fadeTime);
            setFade('');
        }
    },[tabIndex])

    return (<div className={`start ${fade}`}>
        {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tabIndex]}
     </div>)
}

export default DetailPage;