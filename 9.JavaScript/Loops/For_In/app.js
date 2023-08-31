const seriesRates = {
  youngRoyals: 100,
  heartStopper: 90,
  You: 95,
  RedWhiteandRoyalBlue: 90,
};

for (series in seriesRates) {
  console.log(`${series} score is ... ${seriesRates[series]}!!`);
}

console.log(Object.keys(seriesRates));
console.log(Object.values(seriesRates));
console.log(Object.entries(seriesRates));

let totalRates = 0;

let rates = Object.values(seriesRates);

for (let rate of rates) {
  totalRates += rate;
}

console.log(totalRates / rates.length);
