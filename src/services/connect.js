
const axios = require('axios').default;

const connect = axios.create({ baseURL: `http://18.231.163.127:3090/` });

module.exports = connect;