import fa2en from './'
/**
* [removeCommas, Remove all commos in number]
* @param  {[number]} number
* @return {[string]}
*/
const removeCommas = (number) => {
	number = '' + number
	number = fa2en(number)
	if (number) {
		while (number.indexOf(',') !== -1) { number = number.replace(',', '') }
	}
	return number
}

export default removeCommas
