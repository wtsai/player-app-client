import ChannelList from './components/channel/ChannelList';
import VideoPage from './components/video/VideoPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: ChannelList
    },
    {
        path: '/video/:id',
        exact: true,
        component: VideoPage
    }
]

export default routes
