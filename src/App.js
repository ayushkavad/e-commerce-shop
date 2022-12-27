import { Routes, Route } from 'react-router-dom';
import Navigation from './component/routes/navigation/navigation.component';
import Home from './component/routes/home/home.component';
import Shop from './component/routes/shop/shop.component';
import Authentication from './component/routes/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
