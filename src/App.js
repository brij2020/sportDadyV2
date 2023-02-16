import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/BrowserSeries/Series";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Video from "./pages/Video";
import Player from "./pages/BrowserPlayer/Player";
import PlayerInfo from "./pages/BrowserPlayer/PlayerInfo";
import BrowserTeam from "./pages/BrowserTeam/Team"
import Schedule from "./pages/Schedule";
import LiveScore from "./pages/Live/LiveScore";
import News from "./pages/News/News";
import Archives from "./pages/Archives/Archives";
import PhotoGallery from './Components/Home/PhotoGallery';
import LiveCommentry from './pages/Live/LiveCommentry';
import Quiz from './pages/Quiz'
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="video" element={<Video />} />
        <Route path="player" element={<Player />} />
        <Route path="player-info" element={<PlayerInfo />} />
        <Route path="team" element={<BrowserTeam />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="live-commentry" element={<LiveCommentry />} />
        <Route path="livescore" element={<LiveScore />} />
        <Route path="team" element={<BrowserTeam />} />
        <Route path="news" element={<News />} />
        <Route path="archives" element={<Archives />} />
        
        <Route path="gallery" element={<PhotoGallery />} />

        <Route path="quiz" element={<Quiz />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
