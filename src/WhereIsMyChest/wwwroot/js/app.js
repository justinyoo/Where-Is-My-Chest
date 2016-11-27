"use strict";

var vm = new Vue({
  "el": "#app",
  "data": {
    "sequence": "",
    "chests": chests
  },
  "computed": {
    "sequences": function () {
      var resultsA = [];

      if (this.sequence.length < 3) {
        return resultsA;
      }

      var chestSeqs = "";
      var chestSeqValues = new jinqJs().from(this.chests).select("value");
      for (var i = 0; i < chestSeqValues.length; i++) {
        chestSeqs += chestSeqValues[i].value;
      }

      var inputSeqs = this.sequence.replace(/[XUEL]/g, ".");

      var re = new RegExp(inputSeqs, "g");
      var possibleSeqs = chestSeqs.match(re);

      for (var i = 0; i < possibleSeqs.length; i++) {
        var resultsB = [];
        var seqs = possibleSeqs[i];
        for (var j = 0; j < seqs.length; j++) {
          var seq = seqs[j];
          var result = new jinqJs().from(this.chests).where(function (chest) { return chest.value === seq; }).top(1).select();
          resultsB.push(result[0]);
        }

        resultsA.push(resultsB);
      }

      return resultsA;
    }
  }
});

//var sequenceVm = new Vue({
//  "el": "#chest-sequence",
//  "data": {
//    "sequence": ""
//  }
//});

//var chestsVm = new Vue({
//  "el": "#chests",
//  "data": {
//    "chests": chests
//  }
//});