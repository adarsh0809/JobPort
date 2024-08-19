export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken(); // through this we can access the methods of user in userSchema not functions but methods which is defined is userSchema
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
