import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Feed } from './pages/feed';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
