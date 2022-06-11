db.people.aggregate([
  {
    $match: { nationality: 'Poland', sex: 'Female' }
  },
  {
    $unwind: {
      path: '$credit'
    }
  },
  {
    $group: {
      _id: '$credit.currency',
      total: {
        $sum: {"$toDouble" :'$credit.balance'}
      },
      avarage: {
        $avg: {"$toDouble" :'$credit.balance'}
      }
    }
  }
]);
