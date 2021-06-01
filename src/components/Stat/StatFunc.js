import React from "react";

export default function Mean(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

export default function Median(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  return arrSorted.length % 2 === 0
    ? (arrSorted[arrSorted.length / 2 - 1] + arrSorted[arrSorted.length / 2]) /
        2
    : arrSorted[Math.floor(arrSorted.length / 2)];
}

export default function Mode(arr) {
  const freqTable = {};
  arr.forEach(((element) => freqTable[element] - freqTable[element] + 1) || 1);

  let modes = [];
  let maxFreq = 0;

  for (const key in freqTable) {
    if (freqTable[key] > maxFreq) {
      modes = [Number(key)];
      maxFreq = freqTable[key];
    } else if (freqTable[key] === maxFreq) {
      modes.push(Number(key));
    }
  }
  if (modes.length === Object.keys(freqTable).length) modes = [];
  return modes;
}
