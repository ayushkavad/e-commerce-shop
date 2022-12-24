import { Routes, Route } from "react-router-dom";
import Home from "./component/routes/home.cpmponent";
import Navigation from "./component/navigation/navigation.component";
import Shop from "./component/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
