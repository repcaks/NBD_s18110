db.people.aggregate([
  {
    $addFields: {
      bmi: {
        $divide: [
          {"$toDouble" :'$weight'},
          {
            $multiply: [
              { $divide: [ {"$toDouble" :'$height'}, 100] },
              { $divide: [ {"$toDouble" :'$height'}, 100] }
            ]
          }
        ]
      }
    }
  },
  {
    $group: {
      _id: '$nationality',
      avarageBmi: { $avg: '$bmi' },
      highestBmi: { $max: '$bmi' },
      lowestBmi: { $min: '$bmi' }
    }
  }
]);