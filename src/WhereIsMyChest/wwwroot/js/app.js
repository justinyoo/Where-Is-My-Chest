"use strict";

class Chest {

  constructor(collection) {

    this._jinq = new jinqJs();
    this._collection = collection;
  }

  get chestCollection() {

    return this._jinq.from(this._collection).select();
  }

  get chestCycle() {

    return this.getChestCycle();
  }

  getChestCycle() {

    var seqs = "";
    var values = this._jinq.from(this._collection).select("value");

    for (var i = 0; i < values.length; i++) {
      seqs += values[i].value;
    }

    return seqs;
  }

  getPossibleChestSequences(sequences) {

    var chestSequenceCollection = [];

    for (var i = 0; i < sequences.length; i++) {

      var results = [];
      var seqs = sequences[i];

      for (var j = 0; j < seqs.length; j++) {

        var seq = seqs[j];
        var result = this._jinq.from(this._collection).where(function (p) { return p.value === seq; }).top(1).select();

        results.push(result[0]);
      }

      chestSequenceCollection.push(results);
    }

    return chestSequenceCollection;
  }
}

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

      var chest = new Chest(this.chests);
      var chestCycle = chest.chestCycle;

      var inputSeqs = this.sequence.replace(/[XUEL]/g, ".");

      var re = new RegExp(inputSeqs, "g");
      var possibleSeqs = chestCycle.match(re);

      var results = chest.getPossibleChestSequences(possibleSeqs);

      return results;
    }
  }
});
