const Koa = require("koa");
const Init = require("./middlewares/init");

const app = new Koa();

Init.initCore(app);

app.listen(8088, () => {
    console.log("The Server Running At: http://localhost:8088/ ");
});
