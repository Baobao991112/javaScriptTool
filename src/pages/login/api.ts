import request from "@src/api/index";

//发起登录请求
export const requestLogin = (data: {}) => {
  return request({
    url: "/api/login",
    method: "post",
    data,
  });
};
