import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Home = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  return (
    <div className="homeStyle">
      <h3>hello world</h3>
      <p>count : {count}</p>
      <p>
        <Link to="/my-table">我的表格</Link>
        <br />
        <a
          href=""
          onClick={() => {
            navigate("/login", { state: { ifNoLogin: false } });
          }}
        >
          登录
        </a>
      </p>
    </div>
  );
};

export default Home;
