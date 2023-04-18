import Mock from "mockjs";
Mock.setup({
  // 延迟时间200毫秒
  timeout: 200,
});

//使用随机数据需要 Mock.mock来创建
const { loginData } = Mock.mock({
  loginData: {
    //登录token
    logToken: "@guid",
    //用户权限
    userLimit: ["login", "home", "garph"],
    //用户名
    userName: "@cname",
  },
  tableData: [],
});

//登录信息
Mock.mock("http://locahost:5173/api/login", "post", (options: {}) => {
  console.log("测试登录options", options);
  // return loginData;
  return {
    success: true,
    errMissage: null,
    data: loginData,
    code: 200,
  };
});
