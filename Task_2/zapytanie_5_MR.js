db.people.mapReduce(
  function () {
    this.credit.forEach(cc => {
      emit(cc.currency, parseFloat(cc.balance));
    });
  },
  function (key, values) {
    const sumBalance = Array.sum(values);
    const averageBalance = sumBalance / values.length;

    return { sumBalance, averageBalance };
  },
  {
    query: {
      nationality: 'Poland',
      sex: 'Female'
    },
    out: 'balances'
  }
);