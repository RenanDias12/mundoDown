import {Router} from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).send('Home page mundo Down API!');
});

export {routes};
