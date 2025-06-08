import { useEffect, useState } from "react";
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
    },[inputValue])


    return (
        <div className="container">
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
        </div> 
    )
}

export default DetailPage;