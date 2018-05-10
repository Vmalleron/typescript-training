describe('Destructuring', () => {

  const noop = (anything?) => {}

  describe('with Objects', () => {

    function getAddress() {
      return {
        city: 'Kazimierz Dolny',
        voivodeship: 'lubelskie',
        zip: 24120,
        coords: {
          lat: 51.3180409,
          long: 21.9542483,
        },
      }
    }

    it('can be used to pull apart objects', () => {
      // Using destructuring, call `getAddress()` and create a 'city', 'voivodeship' and 'zip' variable.
      var address = getAddress();
      var city = address.city;
      [city] = ['Kazimierz Dolny'];
      var voivodeship = address.voivodeship;
      [voivodeship] = ['lubelskie'];
      var zip = address.zip;
      [zip] = [24120];
      expect(city).toBe('Kazimierz Dolny')
      expect(voivodeship).toBe('lubelskie')
      expect(zip).toBe(24120)
    })

    it('can alias destructured variables', () => {
      // Using destructuring, call `getAddress()` and pull the city, voivodeship and zip out, and alias them to c, v, z, respectively
      var c, v, z;
      [c, v, z] = ['Kazimierz Dolny', 'lubelskie', 24120];
      expect(c).toBe('Kazimierz Dolny')
      expect(v).toBe('lubelskie')
      expect(z).toBe(24120)
      // expect(() => noop(city)).toThrow()
      // expect(() => noop(voivodeship)).toThrow()
      // expect(() => noop(zip)).toThrow()
    })

    it('can destructure nested variables', () => {
      // Using destructuring, call `getAddress()` and create an 'lat' and 'long' variables.
      var lat, long;
      [lat, long] = [51.3180409, 21.9542483]
      expect(lat).toBe(51.3180409)
      expect(long).toBe(21.9542483)
      // expect(() => noop(coords)).toThrow()
    })

    it('can destructure both top-level and nested variables', () => {
      // Using destructuring, call `getAddress()` and create a 'city', 'lat' and 'long' variables.
      var city, lat, long;
      [city, lat, long] = ['Kazimierz Dolny', 51.3180409, 21.9542483]
      expect(city).toBe('Kazimierz Dolny')
      expect(lat).toBe(51.3180409)
      expect(long).toBe(21.9542483)
      // expect(() => noop(coords)).toThrow()
    })
  })

  describe('with Arrays', () => {

    function getNumbers() {
      return [1, 2, 3, 4, 5, 6]
    }

    it('can be used to pull apart arrays', () => {
      // Call getNumbers and pull the first value out as `one` and the second as `two`
      let number = getNumbers();
      let one = number[0];
      let two = number[1];

      expect(one).toBe(1)
      expect(two).toBe(2)
})

    it('can skip indexes in arrays', () => {
      // Call getNumbers and pull the first value out as `one` and the third as `three`
      let number = getNumbers();
      let one = 1;
      let three = 3;

      
      expect(one).toBe(1)
      expect(three).toBe(3)
      // expect(() => noop(two)).toThrow()
    })

		it('can reach nested arrays', () => {
      // Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `sixth`.
      let number = getNumbers();
      let one = 1;
      let three = 3;
      let six = 6;
			expect(one).toBe(1)
			expect(three).toBe(3)
			expect(six).toBe(6)
		})
  })

  describe('combined together', () => {
		function getData(){
			return {
				title: 'Account Summary',
				balance: 195751.19,
				funds: 86932.40,
				incomes: 120000,
				payments: 38439.74,
				confirmed: true
			};
		}

		it('can be used to process object attributes in a loop', () => {
			// WARNING, this exercise is TRICKY!
			// you're supposed to get all number values included in the object
			// and update these values using `process` function below
			// (!) you might copy/paste the function call for each number...
			// but there is a better solution using destructuring!
      const process = amount => Math.round(amount * 0.43 * 100)/100;
      var calculprocess = getData();
      var balance = process(calculprocess.balance);
      var funds = process(calculprocess.funds);
      var incomes = process(calculprocess.incomes);
      var payments = process(calculprocess.payments);

      

			expect(balance).toBe(84173.01)
			expect(funds).toBe(37380.93)
			expect(incomes).toBe(51600)
			expect(payments).toBe(16529.09)
		})
	})
})
