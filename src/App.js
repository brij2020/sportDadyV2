import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Header from "./pages/Header";
import Video from "./pages/Video";
import Player from "./pages/BrowserPlayer/Player";
import PlayerInfo from "./pages/BrowserPlayer/PlayerInfo";
import BrowserTeam from "./pages/BrowserTeam/Team";

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
        <Route path="player-info" element={<PlayerInfo />} />
        <Route path="team" element={<BrowserTeam />} />
      </Routes>

    </BrowserRouter>
  );
}
