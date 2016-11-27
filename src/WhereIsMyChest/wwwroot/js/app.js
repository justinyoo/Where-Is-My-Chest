"use strict";

var vm = new Vue({
  "el": "#app",
  "data": {
    "sequence": "",
    "chests": chests
  },
  "computed": {
    "sequences": function() {
      var seqs = this.sequence.split("");

      var results = [];
      for (var i = 0; i < seqs.length; i++) {
        var seq = seqs[i];
        var result = new jinqJs().from(chests).where(function (chest) { return chest.value === seq; }).top(1).select();
        results.push(result);
      }

      return results;
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