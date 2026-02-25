import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/layouts/Body";
import Login from "./components/auth/pages/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/feed/Feed";
import Profile from "./components/profile/pages/Profile";
import Requests from "./components/connections/pages/Requests";
import Connections from "./components/connections/pages/Connections";
import Premium from "./components/premium/Premium";
import ContactUs from "./components/common/ContactUs";
import Chat from "./components/chat/Chat";
import Verify from "./components/auth/pages/Verify";
import ForgotPass from "./components/auth/pages/ForgotPass";

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
