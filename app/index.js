const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const Init = require("./middlewares/init");

// require("./models/user");

const app = new Koa();

app.use(cors());
app.use(bodyParser());

Init.initCore(app);

app.listen(8088, () => {
    console.log("The Server Running At: http://localhost:8088/ ");
});
