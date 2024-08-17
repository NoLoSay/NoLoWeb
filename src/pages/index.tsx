import Layout from "./components/Layout/Layout";
import Home from "./screen/home/Home";

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  return <Home />;
};

AppRouter.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default AppRouter;
