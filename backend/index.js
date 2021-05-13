// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import session from "express-session";
import Router from "./routes/routes.js";

// init express
const app = express();
 
var sessionMiddleware = session({
    secret: 'secret key',
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false, httpOnly: false }
  });
  
// use express json
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// use cors
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

/* Configure headers and cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
}); */
app.use(sessionMiddleware);
// use router
app.use('/', sessionMiddleware, Router);

app.listen(5000, () => console.log('Server running at http://localhost:5000'));
