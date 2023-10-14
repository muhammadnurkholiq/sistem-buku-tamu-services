import BaseRouter from './BaseRouter';

// test
import PingRoutes from './PingRoutes';

class Routers extends BaseRouter {
  public routes(): void {
    this.router.use('/', PingRoutes);
    this.router.use('/ping', PingRoutes);
  }
}

export default new Routers().router;
