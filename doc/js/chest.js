"use strict";

class Chest {

  constructor(collection) {

    this._jinq = new jinqJs();
    this._collection = collection;
    this.initialise();
  }

  initialise() {
    this._placeholders = this.getPlaceholders();
  }

  getPlaceholders() {

    var phs = [];
    for (var i = 0; i < this._collection.length; i++) {
      phs.push(" ");
    }

    return phs;
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
      var index = sequences[i].index;
      var value = sequences[i].value;

      this._placeholders.splice(index, value.length, value);
      this._placeholders = this._placeholders.join("").split("");

      for (var j = 0; j < value.length; j++) {

        var selected = this._jinq.from(this._collection).where(function (p) { return p.index === (index + j); }).top(1).select();

        var result = selected[0];
        result.placeholder = this._placeholders[result.index];
        result.cssClassPlaceholder = result.cssClass;

        results.push(result);
      }

      chestSequenceCollection.push({ "index": index, "sequence": results });
    }

    return chestSequenceCollection;
  }
}
