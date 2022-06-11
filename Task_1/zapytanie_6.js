db.people.insert({
    sex: 'Male',
    first_name: 'Kacper',
    last_name: 'Mucha',
    job: 'Student',
    email: 's18110@pjwstk.edu.pl',
    location: {
      city: 'Warsaw',
      address: { streetname: 'Polna', streetnumber: '8' }
    },
    description: "I'm big data developer",
    height: 175,
    weight: 80,
    birth_date: '1997-08-24T00:44:17Z',
    nationality: 'Poland',
    credit: [
      {
        type: 'mastercard',
        number: '538509238493',
        currency: 'PLN',
        balance: '400'
      }
    ]
  });
  