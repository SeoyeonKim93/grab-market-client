import "antd/dist/antd.css";
import "./App.css";
import MainPage from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      {/* 모든 Page Component에 header와 footer가 들어가게 App.js에 추가해준다 */}
      {/* App.js에 옮겼다면, 관련된 css 내용도 App.css에 옮겨주기 */}
      <div id="header">
        <div id="header-area">
          {/* 기본 경로로 돌아가는 Link 생성 */}
          <Link to="/">
            <img src="/images/icons/logo.png" alt="profile" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              // Link 코드와 비슷 => 다른 경로로 이동하는 코드
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
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
