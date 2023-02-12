import './App.css';

import Layout from './pages/Layout';
import { Route, Routes, useLocation } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Instagram from './pages/Instagram';
import Model from './pages/Model';
import { AnimatePresence } from 'framer-motion';
import Youtube from './pages/Youtube';
import YoutubeRoutes from './routes/YoutubeRoutes';
import AdminRoutes from './routes/AdminRoutes';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/youtube" element={<Youtube />} location={location} key={location.pathname}>
          {YoutubeRoutes}
        </Route>
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/model" element={<Model />} />
        <Route path="/admin" element={<PrivateRoute />} location={location} key={location.pathname}>
          {AdminRoutes}
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
