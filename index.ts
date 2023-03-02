import express, { Router, json } from "express";
import cors from "cors";
import "express-async-errors";
import { ValidationError, handleErrors } from "./utils/errors";
import { rateLimit } from "express-rate-limit";
import { adRouter } from "./routers/ad.router";


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(json());
app.use(rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100, //Limit each IP to 100 requests per `window` 
}));

const router = Router();

router.use('/ad', adRouter);

app.use('/api', router);

app.use(handleErrors);

app.listen(3001, "0.0.0.0", () => {
    console.log('Listening on port http://localhost:3001');
});