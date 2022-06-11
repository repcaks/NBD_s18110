db.people.mapReduce(
  function () {
    this.credit.forEach(cc => {
      emit(cc.currency, parseFloat(cc.balance));
    });
  },
  function (key, values) {
    return Array.sum(values);
  },
  { out: 'balance_sums' }
);