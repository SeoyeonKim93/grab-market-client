import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  //   useState : 통신 결과 사용하기
  const [product, setProduct] = useState(null);
  //  useEffect :  한번만 정보를 받아오기 위해 사용
  useEffect(function () {
    axios
      .get(
        `https://0a6a94d4-5496-4870-a65b-ba04a9d2458f.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(product);

  //   axios가 비동기 함수이므로 null 값이 먼저 아래로 내려가는 것을 막아주는 코드
  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageurl} />
      </div>
      <div id="profile-box">
        {/* public 파일 경로는 생략 가능 */}
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2021년 9월 3일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
