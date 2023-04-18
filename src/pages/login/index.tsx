import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { requestLogin } from "./api";
import { message } from "antd";
import "./style.css";
const Login = () => {
  // let location = useLocation();
  // const { ifNoLogin } = location.state;

  //登录/注册
  const [isSingIn, setIsSingIn] = useState(true);
  //用户名
  const [userName, setUserName] = useState("");
  //密码
  const [userPassWord, setUserPassWord] = useState("");

  useEffect(() => {
    setUserName("");
    setUserPassWord("");
  }, [isSingIn]);

  const loginOrConfig = () => {
    if (isSingIn) {
      loging();
    } else {
      message.warning("暂时不开放注册入口,敬请等待!!");
    }
  };

  const loging = () => {
    if (userName && userPassWord) {
      const params = {
        name: userName,
        passWord: userPassWord,
        time: new Date(),
      };
      requestLogin(params)
        .then((res) => {
          console.log("login-res", res);
          message.success("登陆成功");
        })
        .catch((err) => {
          console.log("login-err", err);
          message.error("登陆失败");
        });
    } else {
      message.warning("请检查用户名和密码填写完整!!");
    }
  };

  return (
    <div className="container">
      <div className="drop">
        <div className="content">
          <h2>{isSingIn ? "登录" : "注册"}</h2>
          <form>
            <div className="inputBox">
              <input
                type="text"
                placeholder="用户名"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                placeholder="密码"
                value={userPassWord}
                onChange={(e) => setUserPassWord(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <input
                type="submit"
                value={isSingIn ? "登录" : "注册"}
                onClick={() => loginOrConfig()}
              />
            </div>
          </form>
        </div>
      </div>
      <a
        href="#"
        className="btns"
        onClick={() => message.error("忘记活该,重新注册吧")}
      >
        忘记 密码
      </a>
      <a
        href="#"
        className="btns signup"
        onClick={() => setIsSingIn(!isSingIn)}
      >
        {isSingIn ? "注册" : "登录"}
      </a>
    </div>
  );
};

export default Login;
