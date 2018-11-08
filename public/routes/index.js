import app from '../app';
import Html from '../client/views/Html';
import App from '../client/src/modules/containers/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
const path = require('path');
app.get('/', function(req, res){
    const body = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    );
    const title = 'Server side Rendering with Styled Components';
    res.send(
      Html({
        body,
        title,
        scriptSrc: '/public/client/dist/bundle.js'
      })
    );
});
