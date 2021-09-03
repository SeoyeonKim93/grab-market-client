import "./App.css";
import MainPage from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      {/* 모든 Page Component에 header와 footer가 들어가게 App.js에 추가해준다 */}
      {/* App.js에 옮겼다면, 관련된 css 내용도 App.css에 옮겨주기 */}
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" alt="profile" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPage />
          </Route>
          {/* :id -> 자유롭게 id에 숫자를 입력해보면 아래 ProductPage 경로를 타게 됨 */}
          <Route exact={true} path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
