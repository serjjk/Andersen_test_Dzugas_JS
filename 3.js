let numbers = [3, 5 , 7, 6, 9]
		let res = []
		const num3 = (arr) => {
			for (let num of numbers) {
				if (num % 3 === 0) {
					res.push(num)
				};
			};
			alert(res)
		};

		num3(numbers);