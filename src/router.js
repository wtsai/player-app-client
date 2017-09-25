import LandingPage from './components/LandingPage';
import VideoPage from './components/video/VideoPage';

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
    }
]

export default routes
