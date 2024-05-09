const express = require("express");
const ExpressError = require("./expressError");
const app = express();
const itemsRoutes = require('./items')
const expressError = require('./expressError')
const items = require('./fakeDb')

app.use(express.json());
app.use("/items",itemsRoutes)

// 404 handler
app.use(function (req,res,next) {
    return new ExpressError("Page Not Found", 404)
})

//generic error handler
app.use(function (err,req,res,next) {
    // res.status = err.status || 500;
    return res.json({
        status:err.status || 500,
        error: err.message
    })
})

app.listen( 3000, () => {
    console.log('Server running on port 3000')
})