import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PageDefault from 'components/PageDefault';
import About from 'pages/About';
import Carte from 'pages/Carte';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PageDefault />}>
            <Route index element={<Home />} />
            <Route path='carte' element={<Carte />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </ Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}