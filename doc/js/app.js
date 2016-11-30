"use strict";

var vm = new Vue({
  "el": "#app",
  "data": {
    "sequence": "",
    "chests": chests
  },
  "methods": {
    "reload": function() {
      location.reload();
    }
  },
  "computed": {
    "sequenceCollection": function () {

      var resultsA = [];

      if (this.sequence.length < 3) {
        return resultsA;
      }

      var chest = new Chest(this.chests);
      chest.initialise();

      var chestCycle = chest.chestCycle;

      var inputSeqs = this.sequence.replace(/[XUEL]/g, ".");
      var re = new RegExp(inputSeqs, "g");

      var match;
      var possibleSeqs = [];
      while (match = re.exec(chestCycle)) {

        var seq = { "index": match.index, "value": match[0] };
        possibleSeqs.push(seq);
      }

      //var possibleSeqs = chestCycle.match(re);

      var results = chest.getPossibleChestSequences(possibleSeqs);

      return results;
    }
  }
});
