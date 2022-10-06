import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
