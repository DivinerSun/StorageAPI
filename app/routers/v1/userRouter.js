const Router = require("koa-router");

const router = new Router({
    prefix: "/api/v1/user"
});

// 获取用户列表
router.get("/list", ctx => {
    ctx.body = {
        code: 2000,
        msg: "用户列表获取成功",
        data: {
            users: [
                { name: "Diviner", age: 18, hobby: "Code & Share" },
                { name: "哈士奇", age: 16, hobby: "玩" }
            ]
        }
    };
});

// 获取当前用户信息
router.get("/:id", ctx => {
    ctx.body = {
        code: 2000,
        msg: "用户信息获取成功",
        data: {
            user: {
                name: "Diviner",
                age: 18,
                hobby: "Code & Share"
            }
        }
    };
});

module.exports = router;
