import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
// import { CartData } from "./components/Cart";
import "./index.css";
import { Layout } from "./Layout";
import { Login } from "./Login";
import { SingUp } from "./SingUp";
import { SignIn } from "./SignIn";
import { CartData } from "./components/Cart";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { User } from "./components/User";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact path="" element={<Home />} />
          <Route exact path="/cart" element={<CartData />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/user" element={<User />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SingUp />} />
        <Route exact path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
