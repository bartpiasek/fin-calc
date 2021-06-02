import React, { useState } from "react";

function StatFunc() {
  const [meanArray, setMeanArray] = useState(0);
  const [medianArray, setMedianArray] = useState(0);
  const [modeArray, setModeArray] = useState(0);

  function mean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }

  function median(arr) {
    const arrSorted = Object.values(arr).sort((a, b) => a - b);
    return arrSorted.length % 2 === 0
      ? (arrSorted[arrSorted.length / 2 - 1] +
          arrSorted[arrSorted.length / 2]) /
          2
      : arrSorted[Math.floor(arrSorted.length / 2)];
  }

  function mode(arr) {
    const freqTable = {};
    Object.values(arr).forEach(
      ((element) => freqTable[element] - freqTable[element] + 1) || 1
    );

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

  return (
    <div>
      <hr />
      <form>
        <h5>Średnia arytmetyczna</h5>
        <input onChange={(e) => setMeanArray(e.target.value)}></input>
        <p>{mean(meanArray)}</p>
        <h5>Mediana</h5>
        <input onChange={(e) => setMedianArray(e.target.value)}></input>
        <p>{median(medianArray)}</p>
        <h5>Modalna</h5>
        <input onChange={(e) => setModeArray(e.target.value)}></input>
        <p>{mode(modeArray)}</p>
      </form>
    </div>
  );
}

export default StatFunc;
