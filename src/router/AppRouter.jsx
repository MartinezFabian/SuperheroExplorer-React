import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../heroes/pages/NotFoundPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { DcPages } from '../heroes/pages/DcPage';
import { LoginPage } from '../auth/pages/LoginPage';
import { Navbar } from '../ui/components/Navbar';
import { SearchPage } from '../heroes/pages/SearchPage';

export const AppRouter = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/marvel" element={<MarvelPage></MarvelPage>} />
        <Route path="/dc" element={<DcPages></DcPages>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/search" element={<SearchPage></SearchPage>} />
        <Route path="/404" element={<NotFoundPage></NotFoundPage>} />
        <Route path="/" element={<Navigate to="/marvel" />} /> {/* Redirige desde la ruta raíz */}
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};
