import "../index.css";
import { ModalPopup } from "../components/ModalPopup";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import { Outlet } from "react-router-dom";
export const Root = () => {
  return (
    <div className="page">
      <div className="header">
        <Header />
      </div>      
      <div className="content">
      <div>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
        <h1>dfsfsd</h1>
      </div>
        <Outlet></Outlet>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
