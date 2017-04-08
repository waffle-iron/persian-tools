import fa2en from './'

/**
 * [addCommas, Add commos to number]
 * @param  {[string]} number
 * @return {[string]}
 */
const addCommas = (number) => {
	number = '' + number
	number = fa2en(number)
	return number && number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}

export default addCommas
