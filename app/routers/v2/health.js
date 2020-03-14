const Router = require("koa-router");

const router = new Router({
    prefix: "/api/v2/health"
});

router.all("/", ctx => {
    ctx.body = {
        code: 2000,
        msg: "项目正常",
        data: {
            status: "HEALTH"
        }
    };
});

module.exports = router;
