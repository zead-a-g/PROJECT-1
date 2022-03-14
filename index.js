//import npm libraries from node_modules
const express = require('express');
const bodyparser =require('body-parser');

//2. create app
const app = express();

//3. use body parser in app
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

//4. creat the route
const actionRoute =require('./action');
app.use('/api', actionRoute);

//5. creat virtual server environment
const port = 5000;
app.listen(port,function(){
    console.log(`server is working via port ${port}`);
});


