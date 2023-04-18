import { useRoutes } from "react-router-dom";
import { routers } from "./routers";

{
  /* {console.log("测试环境变量", import.meta.env.VITE_APP_TITLE)} */
}

function App() {
  //返回与当前位置匹配的路由元素，参数是创建的路由对象
  return useRoutes(routers);
}

export default App;
