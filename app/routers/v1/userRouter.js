const Router = require("koa-router");
const { get } = require("lodash");
const { ReturnResponse } = require("../../core/returnResponse");
const { UserService } = require("../../services/user");

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

// 创建一个新用户
router.post("/create", async ctx => {
    const user = ctx.request.body;
    const res = await UserService.createUser(user);
    if (res) {
        ctx.body = {
            code: ReturnResponse.CODE.SUCCESS,
            msg: "用户创建成功",
            data: { user: get(res, "dataValues") }
        };
    } else {
        ctx.body = {
            code: ReturnResponse.CODE.ERROR,
            msg: "用户创建失败",
            data: null
        };
    }
});

module.exports = router;
