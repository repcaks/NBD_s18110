db.people.mapReduce(
  function () {
    emit(this.sex, { weight: parseFloat(this.weight), height: parseFloat(this.height) });
  },

  function (key, values) {
    let sumWeight = 0;
    let sumHeight = 0;

    values.forEach(element => {
      sumWeight += element.weight;
      sumHeight += element.height;
    });

    return {
      averageWeight: sumWeight / values.length,
      averageHeight: sumHeight / values.length
    };
  },
  { out: 'people_avg_weight_and_height' }
);
