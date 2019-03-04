const express = require('express');
const app = express();
const port = 3000;

/** Here one can do  */
const customMiddleware = (req,res,next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
    next();
};

app.use(customMiddleware);

app.get('/', (req, res) => res.send('Api Home'));

app.get('/example', (req, res) => res.send('example api'));

app.listen(port, () => console.log(`app listening on port ${port}!`))