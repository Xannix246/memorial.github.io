import Background from "../src/entities/Background";
import "../styles/fonts.css";
import "../styles/tailwind.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Background />
        <Content>{children}</Content>
    </div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="page-container">
      <div id="page-content" className="justify-between w-full h-full min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
