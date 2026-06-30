import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/layout/Body";
import Login from "./components/Auth/Login";
import appStore from "./utils/appStore";
import Feed from "./components/feed/Feed";
import Profile from "./components/profile/Profile";
import Requests from "./components/connection/Requests";
import Connections from "./components/connection/Connections";
import Premium from "./components/Premium/Premium";
import ContactUs from "./components/common/ContactUs";
import Chat from "./components/profile/Chat";
import Verify from "./components/auth/Verify";
import ForgotPass from "./components/auth/ForgotPass";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot_password" element={<ForgotPass />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/contact_us" element={<ContactUs />} />
              <Route path="/chat/:targetUserId" element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
