module.exports = plop => {
  const getGenerator = require("./_plop/android");
  plop.setGenerator("android", getGenerator);
};
