import './App.scss';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="user/:username" element={<DetailsPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

