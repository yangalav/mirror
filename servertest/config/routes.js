import { redirect, logout } from '../controllers/user';


export default (app, passport) => {
  app.post('/api/users/login', passport.authenticate('local-login'), redirect);
  app.post('/api/users/register', passport.authenticate('local-signup'), redirect);
  app.get('/api/users/logout', logout);
};
