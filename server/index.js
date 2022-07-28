const express =require('express');
const cors=require('cors');
const path =require('path');

const app = express()
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
    accessToken: "050284305e014c3aa2aa994cd28cb7b8", 
    captureUncaught: true,
    captureUnhandledRejections: true
});

rollbar.log("Hello world!");


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
app.get("/api/money", (req, res) => {
    try {
        rollbar.info("We got money", money);
        res.status(200).send(money);
    } catch (err) {
        console.log(err);
    }
});


    
 app.use(express.static(path.join(__dirname, '../public')))

const port = process.env.PORT || 4005

app.listen(port, () => console.log(`Server listening on ${port}`));