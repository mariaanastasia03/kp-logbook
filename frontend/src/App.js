import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Asset from './pages/Asset';
import Input from './pages/Input';
import NotFound from './pages/NotFound';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const location = useLocation();

  const pathname = location.pathname;

  const isLogin = pathname.includes('login') || pathname.includes('register');
  return (
    <div className={`app`}>
      {!isLogin && <Navbar />}
      <main className="min-h-screen w-full font-display">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asset" element={<Asset />} />
          <Route path="/input" element={<Input />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
