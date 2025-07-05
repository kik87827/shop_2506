import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function CartPage() {

    let state = useSelector((state) => state);
    let cartData = state.cartData;
    let dispatch = useDispatch();
    console.log(cartData);

    return (
      <div>

        {state.user}의 장바구니

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
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td><button onClick={() => {
                  dispatch(changeName());
                }}>+</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
}

export default CartPage;