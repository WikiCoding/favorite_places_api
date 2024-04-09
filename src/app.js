const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const userRouter = require('./routers/userRoute');
const placeRouter = require('./routers/placeRouter');
const app = express();

app.use(express.json());
app.use(cors({ credentials: false, origin: '*' }));
app.use(userRouter);
app.use(placeRouter);

app.listen(process.env.PORT, () => { console.log(`Server is up on ${process.env.PORT}`); })