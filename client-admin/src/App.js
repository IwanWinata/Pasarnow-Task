import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomeSearch";
import ImagePage from './pages/ImageSearch';
import NewsSearch from './pages/NewsSearch';
import SearchResult from './pages/SearchResult';
import NavBarButton from "./components/NavBarButton";
import ImageResult from './pages/ImageResult';
import NewsResult from './pages/NewsResult';
import BookMarks from './pages/BookMarks';


function App() {
  return (
    <div className="App">
      <NavBarButton/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/image" element={<ImagePage/>} />
        <Route path="/news" element={<NewsSearch/>} />
        <Route path="/search-result" element={<SearchResult/>} />
        <Route path="/image-result" element={<ImageResult/>} />
        <Route path="/news-result" element={<NewsResult/>} />
        <Route path="/bookmark" element={<BookMarks/>} />
      </Routes>
    </div>
  );
}

export default App;
