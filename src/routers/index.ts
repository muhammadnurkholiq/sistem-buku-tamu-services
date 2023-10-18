import BaseRouter from './BaseRouter';

// test
import PingRoutes from './PingRoutes';

// main routes
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';

class Routers extends BaseRouter {
  public routes(): void {
    // test
    this.router.use('/', PingRoutes);
    this.router.use('/ping', PingRoutes);

    // main routes
    this.router.use('/auth', AuthRoutes);
    this.router.use('/user', UserRoutes);
  }
}

export default new Routers().router;
