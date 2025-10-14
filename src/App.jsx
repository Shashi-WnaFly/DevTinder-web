import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Requests from "./components/Requests";
import Connections from "./components/Connections";
import Premium from "./components/Premium";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Refund from "./components/Refund";
import Shipping from "./components/Shipping";
import Rules from "./components/Rules";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/rules" element={<Rules />}>
              <Route path="/rules/privacy" element={<Privacy />} />
              <Route path="/rules/terms" element={<Terms />} />
              <Route path="/rules/refund_policy" element={<Refund />} />
              <Route
                path="/rules/shipping"
                element={<Shipping />}
              />
              <Route path="/rules/contactus" element={<ContactUs />} />
            </Route>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund_policy" element={<Refund />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
