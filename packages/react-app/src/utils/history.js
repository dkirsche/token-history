//const moment = require("moment");

export const historicalPrices = function() {
  var weeksAgo=52
  let today=Date.now()/1000;
  let secondsPerWeek=604800 //number of seconds in a week
  let i=0
  for (let fetchWeek = today - (weeksAgo*secondsPerWeek); fetchWeek <= today; fetchWeek += secondsPerWeek) {
    i += 1;
    console.log(`week ${i}: ${fetchWeek}`) ;
  }
};
