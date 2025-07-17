import { createBrowserRouter } from 'react-router';
import projectRoutes from '../modules/project/routes';
import timelineRoutes from '../modules/timeline/routes';

const router = createBrowserRouter([
    ...projectRoutes,
    ...timelineRoutes
]);

export default router;