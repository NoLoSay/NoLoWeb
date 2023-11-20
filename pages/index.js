// pages/index.js
import Layout from './components/Layout';
import Home from "./screen/home/Home";

export default function AppRouter() {
  return <Home></Home>;
}

AppRouter.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
