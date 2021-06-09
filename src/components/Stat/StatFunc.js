import React, { useState } from "react";

function StatFunc() {
  const [meanArray, setMeanArray] = useState("");
  const [medianArray, setMedianArray] = useState("");
  const [modeArray, setModeArray] = useState("");

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
    var modes = [],
      count = [],
      i,
      number,
      maxIndex = 0;

    for (i = 0; i < arr.length; i++) {
      number = arr[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
        maxIndex = count[number];
      }
    }
    for (i in count)
      if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
          modes.push(Number(i));
        }
      }
    return modes;
  }

  const meanArraySplit = meanArray.toString().split(",").map(Number);
  const medianArraySplit = medianArray.toString().split(",").map(Number);
  const modeArraySplit = modeArray.toString().split(",").map(Number);

  return (
    <div>
      <hr />
      <form>
        <h5>Średnia arytmetyczna [Mean]</h5>
        <input
          role="mean-input"
          name="mean"
          onChange={(e) => setMeanArray(e.target.value)}
        ></input>
        <p placeholder="mean-output">{mean(meanArraySplit)}</p>
        <h5>Mediana [Median]</h5>
        <input
          role="median-input"
          name="median"
          onChange={(e) => setMedianArray(e.target.value)}
        ></input>
        <p placeholder="median-output">{median(medianArraySplit)}</p>
        <h5>Modalna [Mode]</h5>
        <input
          role="mode-input"
          name="mode"
          onChange={(e) => setModeArray(e.target.value)}
        ></input>
        <p placeholder="mode-output">{mode(modeArraySplit)}</p>
      </form>
    </div>
  );
}

export default StatFunc;
