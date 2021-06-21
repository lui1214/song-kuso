const express = require('express');
const app = express();
app.use(express.urlencoded({
   extended: false
}));
app.get('/', function (req, res) {
    res.status(200).send({msg:'ok.'});
});
let port = 3000;
app.listen(port);
console.log('Server running on port ' + port);