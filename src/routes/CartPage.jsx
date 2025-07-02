import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function CartPage() {

    let state = useSelector((state) => state);
    let cartData = state.cartData;
    console.log(cartData);

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>변경버튼</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
}

export default CartPage;