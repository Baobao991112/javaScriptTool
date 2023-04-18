import { lazy, ReactNode, Suspense } from "react";
import { RouteObject } from "react-router-dom";
//公共页面不用懒加载 否则会导致白屏
import Layout from "../layout";

//懒加载引入路由
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const NoMath = lazy(() => import("../pages/no-math"));
const MyTable = lazy(() => import("../pages/my-table"));
const Demo = lazy(() => import("../pages/xflow-garph"));

// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
  //fallback 等待中...
  return <Suspense fallback={<h1>loading...</h1>}>{children}</Suspense>;
};

export const routers: RouteObject[] = [
  //最外层放layout
  {
    path: "/",
    element: <Layout />,
    //路由嵌套，子路由的元素需使用<Outlet />
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: "/my-table",
        element: lazyLoad(<MyTable />),
      },
      {
        path: "/xflow-garph",
        element: lazyLoad(<Demo />),
      },
    ],
  },
  //login没有layout 放外面
  {
    path: "/login",
    element: lazyLoad(<Login />),
  },
  {
    path: "*",
    element: lazyLoad(<NoMath />),
  },
];
