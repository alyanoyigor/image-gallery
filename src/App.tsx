import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { ImageDetails } from './pages/ImageDetails';
import { Favorites } from './pages/Favorites';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/image/:id" element={<ImageDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
