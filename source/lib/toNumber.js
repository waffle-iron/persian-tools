// <Refrence path='https://fa.wikipedia.org/wiki/الگو:عدد_به_حروف/توضیحات' />
// https://fa.wikipedia.org/wiki/۱۰۰۰۰۰۰۰۰۰_(عدد)
import {fa2en, en2fa} from './'
import ReplaceArray from '../util/replaceArray'

const toNumber = {
	units: {
		'صفر': 0,
		'یک': 1,
		'دو': 2,
		'سه': 3,
		'چهار': 4,
		'پنج': 5,
		'شش': 6,
		'هفت': 7,
		'هشت': 8,
		'نه': 9,
		'ده': 10,
		'یازده': 11,
		'دوازده': 12,
		'سیزده': 13,
		'چهارده': 14,
		'پانزده': 15,
		'شانزده': 16,
		'هفده': 17,
		'هجده': 18,
		'نوزده': 19,
		'بیست': 20,
		'سی': 30,
		'چهل': 40,
		'پنجاه': 50,
		'شصت': 60,
		'هفتاد': 70,
		'هشتاد': 80,
		'نود': 90
	},
	adjective: {
		'صد': 100,
		'دویست': 200,
		'سیصد': 300,
		'چهارصد': 400,
		'پانصد': 500,
		'ششصد': 600,
		'هفتصد': 700,
		'هشتصد': 800,
		'نهصد': 900
	},
	magnitudes: {
		'هزار': 1000,
		'میلیون': 1000000,
		'بیلیون': 1000000000,
		'میلیارد': 1000000000,
		'تریلیون': 1000000000000
	},
	otherAdjective: {
		'شیش صد': 'ششصد',
		'هفت صد': 'هفتصد',
		'هشت صد': 'هشتصد',
		'نه صد': 'نهصد'
	},
	convert: function (words, digits = 'en') {
		const compute = this.compute(this.tokenize(words))

		return digits === 'fa' ? en2fa(compute) : compute
	},
	tokenize: function (words) {
		let array = ReplaceArray(words, this.otherAdjective)
		array = array.split(' ')

		let result = []

		array.forEach((string) => {
			if (!isNaN(+string)) {
				result.push(+string)
			} else if (string === 'و') {

			} else {
				result.push(string)
			}
		})
		return result
	},
	compute: function (tokens) {
		let ins = this
		let sum = 0

		tokens.forEach((token) => {
			token = fa2en(token)
			if (ins.units[token] != null) {
				sum += ins.units[token]
			} else if (ins.adjective[token] != null) {
				sum += ins.adjective[token]
			} else if (!isNaN(token)) {
				sum += parseInt(token)
			} else {
				sum *= ins.magnitudes[token]
			}
		})
		return sum
	}
}

export default toNumber
