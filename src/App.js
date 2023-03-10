import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import NoPage from './pages/NoPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Youtube from './pages/Youtube';
import YoutubeRoutes from './routes/YoutubeRoutes';
import AdminRoutes from './routes/AdminRoutes';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const location = useLocation();
  return (
    <GoogleOAuthProvider clientId="">
      <Routes>
        {/*<Route path="/" element={<Layout />} />*/}
        <Route path="/" element={<Youtube />} location={location} key={location.pathname}>
          {YoutubeRoutes}
        </Route>
        {/*<Route path="/instagram" element={<Instagram />} />*/}
        {/*<Route path="/model" element={<Model />} />*/}
        <Route path="/admin" element={<PrivateRoute />} location={location} key={location.pathname}>
          {AdminRoutes}
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}


export default App;
