module.exports = {
  devServer: {
    port: 8082,
    proxy: "http://localhost:8081"
  }
};
