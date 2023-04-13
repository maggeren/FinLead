import "../index.css";
import { ModalPopup } from "../components/ModalPopup";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import { Outlet } from "react-router-dom";
import { CommentField } from "../components/CommentField";
export const Root = () => {
  return (
    <div className="page">
      <div className="header">
        <Header />
      </div>      
      <div className="content">
        <CommentField/>
        <Outlet></Outlet>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
