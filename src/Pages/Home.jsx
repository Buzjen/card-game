import { Menu } from "../components/Menu";
import { Content } from "../components/Content";

export const Home = () => {
  return (
    <div className="container flex justify-between pt-10 mx-auto h-screen w-screen box-border p-0">
      <Menu />
      <Content />
    </div>
  );
};
