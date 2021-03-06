const express = require('express'),
consign = require('consign'),
cors = require('cors'),
app = express(),
port = process.env.PORT || 3000;

app.use(cors({origin: '*'}));

consign({cwd: 'src'})
  .include('controllers')
  .then('routers')
  .into(app);

app.listen(port, () => console.log(`app running at port ${port}`));
