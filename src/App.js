import './App.css';
import { Route,Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from "./page/Login";
import Navbar from './component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

//1. 전체 상품페이지, 로그인, 상품 상세 페이지
//2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품 디테일을 눌렀으나 로그인이 안되있을 경우 로그인 페이지가 먼저 나온다.
//5. 로그인이 되어있을 경우 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 누르면 로그 아웃이 된다.
//7. 로그아웃되면 상품 디테일 페이지를 볼 수 없다.
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//9. 상품 검색
function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인 상태, false면 로그인이 안된 상태

  return (
    <div>
      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
