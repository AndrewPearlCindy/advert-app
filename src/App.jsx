import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import "@fontsource/raleway";
import Landing from "./pages/user/Landing";
import RootLayout from "./Layout/RootLayout";
import VendorAds from "./pages/dashboard/VendorAds";
import CreateAd from "./pages/dashboard/CreateAd";
import Overview from "./pages/dashboard/Overview";
import DashboardLayout from "./layout/DashboardLayout";
import Adverts from "./pages/user/Adverts";
import SingleAd from "./pages/user/SingleAd";
import Favourites from "./pages/user/Favourites";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Verification from "./pages/auth/Verification";
import VendorAdCard from "./pages/dashboard/VendorAdCard";
import VendorReviews from "./pages/dashboard/VendorReviews";
import VendorProfile from "./pages/dashboard/VendorProfile";
import DashHome from "./pages/dashboard/DashHome";

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
        <Route path="/verification" element={<Verification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashHome />} />
          <Route path="analytics" element={<Overview />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="ads" element={<VendorAds />} />
          <Route path="single-ad" element={<VendorAdCard />} />
          <Route path="reviews" element={<VendorReviews />} />
          <Route path="myprofile" element={<VendorProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
