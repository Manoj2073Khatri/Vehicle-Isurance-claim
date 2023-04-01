import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { PageNotFound } from "./pages/404Page";
import Welcome from "./pages/welcome";
import ClaimDetails from "./pages/claimDetails";
import UploadImage from "./pages/uploadImage";
import Success from "./pages/success";

//toastify  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="claimDetails" element={<ClaimDetails />} />
          <Route path="uploadImage" element={<UploadImage />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
