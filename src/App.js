import * as React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Loader from './Components/Loader/loader'

const  PhotoListPage = React.lazy(()=> import('./pages/PhotoList'));
const PhotoDetailPage = React.lazy(()=> import('./pages/Photos/PhotoStory'));
const VideoList = React.lazy(()=> import('./pages/VideoList'));
const Card = React.lazy(()=> import("./Components/Card"));
const ScheduleList = React.lazy(()=> import('./pages/ScheduleListPage'));
const LiveTv = React.lazy(()=> import('./pages/LiveTv'));
const Articles = React.lazy(()=> import('./pages/ArticleList')); 
const ArticleShow = React.lazy(()=> import('./pages/ArticleShow')); 
const VideoShowPage = React.lazy(()=> import('./pages/VideoList/videoShow')); 
const Quiz = React.lazy(() => import('./pages/quiz'));
const Home = React.lazy(() => import('./pages/Home'))


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <Home />
            </React.Suspense>
          }
        />
         <Route path="photos-stories" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <PhotoListPage />
            </React.Suspense>
          }
        />
        <Route path="photoshow" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <PhotoDetailPage />
            </React.Suspense>
          }
        />
        <Route path="videos" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <VideoList />
            </React.Suspense>
          }
        />
        <Route path="fixtures" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <ScheduleList />
            </React.Suspense>
          }
        />
       <Route path="live-score" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <LiveTv />
            </React.Suspense>
          }
        />
      <Route path="articles" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <Articles />
            </React.Suspense>
          }
        />
      <Route path="articleshow" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <ArticleShow />
            </React.Suspense>
          }
        />
      <Route path="videoshow" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <VideoShowPage />
            </React.Suspense>
          }
        />
         <Route path="quiz" element={
            <React.Suspense fallback={<Loader isLoading={true}/>}>
              <Quiz />
            </React.Suspense>
          }
        />
      <Route path="cards" element={
        <Card />
      }
      />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
