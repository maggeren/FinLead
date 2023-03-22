import { ModalPopup } from "../components/ModalPopup";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import { Outlet } from "react-router-dom";
export const Root = () => {
  return (
    <div>
      <Header />
      <div className="outlet">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};
