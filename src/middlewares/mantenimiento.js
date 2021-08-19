const path = require('path');

module.exports = (req,res,next) =>{
    return res.render(path.resolve(__dirname, '../views/web/mantenimiento'));    

    next();
}