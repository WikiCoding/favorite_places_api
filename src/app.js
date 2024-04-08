const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/userRoute');
const placeRouter = require('./routers/placeRouter');
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(placeRouter);

app.listen(process.env.PORT, () => { console.log(`Server is up on ${process.env.PORT}`); })