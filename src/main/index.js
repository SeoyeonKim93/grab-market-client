import './index.css';
import axios from "axios";
import React from 'react'
function MainPage(){
// 통신 결과를 아래 card에 넣어 주기위해 state 사용
    const [products, setProducts] = React.useState([]);
// 네트워크 통신
//  state가 변화됨에 따라 무한 반복되는 것을 방지하는 함수 : useEffect
React.useEffect(
    function(){
        axios.get("https://0a6a94d4-5496-4870-a65b-ba04a9d2458f.mock.pstmn.io/products")
        .then(function(result){
            const products = result.data.product;
            setProducts(products);
        }).catch(function(error){
         console.log('에러 발생 :',error);
        })
    },[]
    )



    return (
    <div>
            <div id='header'>
                <div id='header-area'>
                <img src="images/icons/logo.png" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                <img src="images/banners/banner1.png"/>
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {/* jsx 문법을 사용해서 구축 */}
                    {products.map(function(product,index){
                            return(
                    <div className="product-card">
                        <div>
                            <img className="product-img" src={product.imageurl} alt="profile"/>
                        </div>
                        <div className="product-contents">
                            <span className="product-name">{product.name}</span>
                            <span className="product-price">{product.price}원</span>
                            <div className="product-seller">
                                <img className="product-avatar" src="images/icons/avatar.png" alt="profile"/>
                                <span>{product.seller}</span>
                            </div>
                        </div>
                    </div>
                            );
                        })}
                         
                </div>
            </div>
        <div id='footer'></div>
    </div>
    )
}

export default MainPage;