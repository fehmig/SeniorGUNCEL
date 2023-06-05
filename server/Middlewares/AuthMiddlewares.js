const User = require("../Models/UserModel")
const jwt = require("jsonwebtoken")

module.exports.checkUser = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, "fehmig", async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) {
            res.json({
              status: true,
              user: {
                id: user._id,
                name: user.name,
                surname: user.surname,
                email: user.email,
              },
            });
          } else {
            res.json({ status: false });
          }
          next();
        }
      });
    } else {
      res.json({ status: false });
      next();
    }
  };
  