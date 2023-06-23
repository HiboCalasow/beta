const express =require("express");
const connectdb = require("./config/connectdb");
const dotenv =require('dotenv').config();

//connection
connectdb();
const app =express();
const port =process.env.PORT || 5000;

app.use(express.json());
app.use('/api/houses',require("./routes/houseRoutes"));
app.use('/api/users',require("./routes/userRouter"));
app.use('/api/images',require('./routes/imagesRouter'));
app.use('/api/home',require('./routes/homestitingRoutes'));
app.use('/api/service',require('./routes/serviceRoutes'));
app.use('/api/client',require('./routes/ourClaintRoutes'));
app.use('/api/gallary',require('./routes/gallaryRoutes'));

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});

module.exports= app;
