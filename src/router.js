import LandingPage from './components/LandingPage';
import VideoPage from './components/video/VideoPage';
import MultiPlayerPage from './components/multiplayer/MultiPlayerPage';

const routes = [
  {
    path: '/',
    exact: true,
    component: LandingPage
  },
  {
    path: '/channel/:id',
    exact: true,
    component: VideoPage
  },
  {
    path: '/channel/:player/:id',
    exact: true,
    component: MultiPlayerPage
  }
]

export default routes
