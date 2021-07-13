const axios = require('axios').default;

const connect = axios.create({ baseURL: `http://localhost:3080/` });

module.exports = connect;