const path = require("path");
const requireDirectory = require("require-directory");
const Router = require("koa-router");

class Init {
    static initCore(app) {
        Init.app = app;

        Init.initLoadRouters();
    }

    static initLoadRouters() {
        const loadRouters = router => {
            if (router instanceof Router) {
                Init.app.use(router.routes());
            }
        };

        requireDirectory(module, path.join(__dirname, "../routers"), {
            visit: loadRouters
        });
    }
}

module.exports = Init;
