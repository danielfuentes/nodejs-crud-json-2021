const path = require('path');
const fs = require('fs');

let motos =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','motos.json')));


module.exports = {
    index: function(req,res){
        //res.sendFile(path.resolve(__dirname, '..', 'views','web','index.html'));
        res.render(path.resolve(__dirname, '..', 'views','web','index'),{motos});
    }

}