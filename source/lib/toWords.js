import {comp, chunk, arr, isEmpty, not, reverse, num} from '../util/utils'

// <Refrence path="https://fa.wikipedia.org/wiki/۱۰۰۰۰۰۰۰۰۰_(عدد)" />
let numToWords = (number) => {
	const units = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه', 'ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده']
	const adjective = ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود']
	const magnitudes = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوآدریلیون', '	کوینتیلیون', 'سکستیلیون', 'سپتیلیون', 'اکتیلیون', 'نانیلیون']

	const makeGroup = ([ones, tens, huns]) => {
		return [
			num(huns) === 0 ? '' : units[huns] + ' صد ',
			num(ones) === 0 ? adjective[tens] : adjective[tens], (units[tens + ones] || units[ones])
		].join('')
	}
	const thousand = (group, i) => group === '' ? group : `${group} ${magnitudes[i]}`

	if (typeof number === 'number') {
		return numToWords(String(number))
	} else if (number === '0') {
		return 'صفر'
	} else {
		return comp(chunk(3))(reverse)(arr(number))
			.map(makeGroup)
			.map(thousand)
			.filter(comp(not)(isEmpty))
			.reverse()
			.join(' و ')
	}
}

export default numToWords
