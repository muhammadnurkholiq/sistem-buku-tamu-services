import BaseRouter from './BaseRouter';
import Controller from '../controllers/GuestBook';
import AuthGuard from '../middleware/authentication';

// export
class GuestBookRoutes extends BaseRouter {
  public routes(): void {
    // get
    // this.router.get('/', AuthGuard.checkAccessToken, Controller.getAllGuestBook);
    this.router.get('/', Controller.getAllGuestBook);
  }
}

export default new GuestBookRoutes().router;
