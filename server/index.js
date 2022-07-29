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
        const amount = +req.query.amount
        if(amount > 0){
            rollbar.info("We got money", +req.params.amount);
            res.sendStatus(200).send(amount);
        } else {
            console.log("else condition")
            callsomefunction();
        }
    } catch (err) {
        rollbar.error(`We got error ${req.query.amount}`);
        res.sendStatus(500);
    }
});


    
 app.use(express.static(path.join(__dirname, '../public')))

const port = process.env.PORT || 4005

app.listen(port, () => console.log(`Server listening on ${port}`));