import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://b13064db-c9e1-4b08-a68f-4cf4979e74b1.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        // console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  // console.log(product);

  if (product === null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2022년 9월 1일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
