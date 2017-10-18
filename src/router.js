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
        path: '/video/:id',
        exact: true,
        component: VideoPage
    },
    {
        path: '/video/:player/:id',
        exact: true,
        component: MultiPlayerPage
    }
]

export default routes
