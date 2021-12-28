import express from 'express';

import indexRoutes from './routes/indexRoutes';
import productosRoutes from './routes/productosRoutes';


const app = express();

app.use(express.json());

// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Rutas
app.use('/', indexRoutes);
app.use('/api/productos', productosRoutes);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
   console.log('Corriendo en puerto', app.get('port'));
});
