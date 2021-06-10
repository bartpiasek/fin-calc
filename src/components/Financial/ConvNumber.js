import React from "react";

function conv_number(expr, decplaces) {
  var str = "" + Math.round(eval(expr) * Math.pow(10, decplaces));
  while (str.length <= decplaces) {
    str = "0" + str;
  }

  var decpoint = str.length - decplaces;
  return str.substring(0, decpoint) + "." + str.substring(decpoint, str.length);
}
export default conv_number;
