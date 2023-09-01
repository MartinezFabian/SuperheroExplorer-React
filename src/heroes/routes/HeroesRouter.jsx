import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components/Navbar';
import { MarvelPage } from '../pages/MarvelPage';
import { DcPage } from '../pages/DcPage';
import { SearchPage } from '../pages/SearchPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { HeroPage } from '../pages/HeroPage';

export const HeroesRouter = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/marvel" element={<MarvelPage></MarvelPage>} />
        <Route path="/dc" element={<DcPage></DcPage>} />
        <Route path="/search" element={<SearchPage></SearchPage>} />
        <Route path="/hero" element={<HeroPage></HeroPage>} />
        <Route path="/404" element={<NotFoundPage></NotFoundPage>} />
        <Route path="/" element={<Navigate to="/marvel" />} /> {/* Redirige desde la ruta raíz */}
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};
