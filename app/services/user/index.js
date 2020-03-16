const { User } = require("../../models/user");

class UserService {
    static createUser = user => {
        return User.create(user);
    };
}

module.exports = { UserService };
