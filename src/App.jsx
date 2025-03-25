import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import "@fontsource/raleway";
import Landing from "./pages/user/Landing";
import RootLayout from "./Layout/RootLayout";
import VendorAds from "./pages/dashboard/VendorAds";
import CreateAd from "./pages/dashboard/CreateAd";
import Overview from "./pages/dashboard/Overview";
import DashboardLayout from "./layout/DashboardLayout";
import VendorOrUser from "./pages/auth/VendorOrUser";
import VendorLogin from "./pages/auth/VendorLogin";
import CustomerLogin from "./pages/auth/CustomerLogin";
import Adverts from "./pages/user/Adverts";
import SingleAd from "./pages/user/SingleAd";
import Favourites from "./pages/user/Favourites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="adverts" element={<Adverts />} />
          <Route path="adverts/:id" element={<SingleAd />} />
          <Route path="adverts/:id:favs" element={<Favourites />} />
        </Route>
        <Route path="/vendororuser" element={<VendorOrUser />} />
        <Route path="/vendorlogin" element={<VendorLogin />} />
        <Route path="/customerlogin" element={<CustomerLogin />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="ads" element={<VendorAds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
