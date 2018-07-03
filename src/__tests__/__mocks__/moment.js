// import the actual moment.js
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};
