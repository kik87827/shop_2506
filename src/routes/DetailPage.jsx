import { useParams } from "react-router-dom";

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

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${detailShoes.id+1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
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