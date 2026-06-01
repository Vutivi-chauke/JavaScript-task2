
const btnE1 = document.querySelector('button');
		const inputE1 = document.getElementById("naming");
		const inputE2 = document.getElementById("results");

		const listE1 = document.querySelector('ul');

		btnE1.addEventListener('click', () => {
			const inputValue = inputE1.value;
			const inputValue2 = inputE2.value;
			let outputValue = "    ";
			//listE1.innerHTML = `<li>${inputValue}</li>`

			if(inputValue2 >=0 && inputValue2 < 50){
				outputValue = "FAIL";
				outputValue += " Fail";
			}
			else if(inputValue2 > 50 && inputValue2 <= 79)
			{
				outputValue = "Pass";
				outputValue += " pass"
			}
			else if(inputValue2 >= 80 && inputValue2 <=100)
			{
				outputValue = "Pass";
				outputValue += " Distiction";
			}
			listE1.insertAdjacentHTML('beforeend',`<li>${inputValue} ${inputValue2} ${outputValue}</li>`);
		})
