import { Routes, Route } from "react-router-dom";
import Navigation from "./component/routes/navigation/navigation.component";
import Home from "./component/routes/home/home.component";
import Shop from "./component/routes/shop/shop.component";
import SiginIn from "./component/routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SiginIn />} />
      </Route>
    </Routes>
  );
};

export default App;
