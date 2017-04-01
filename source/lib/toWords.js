const config = {
  currency: ['تومان', 'ریال'],
  scale: ['', 'هزار', 'میلیون', 'میلیارد']
}

const numberToWord = {}

numberToWord[0] = ''
numberToWord[1] = 'یک'
numberToWord[2] = 'دو'
numberToWord[3] = 'سه'
numberToWord[4] = 'چهار'
numberToWord[5] = 'پنج'
numberToWord[6] = 'شش'
numberToWord[7] = 'هفت'
numberToWord[8] = 'هشت'
numberToWord[9] = 'نه'
numberToWord[10] = 'ده'
numberToWord[11] = 'یازده'
numberToWord[12] = 'دوازده'
numberToWord[13] = 'سیزده'
numberToWord[14] = 'چهارده'
numberToWord[15] = 'پانزده'
numberToWord[16] = 'شانزده'
numberToWord[17] = 'هفده'
numberToWord[18] = 'هجده'
numberToWord[19] = 'نوزده'
numberToWord[20] = 'بیست'
numberToWord[30] = 'سی'
numberToWord[40] = 'چهل'
numberToWord[50] = 'پنجاه'
numberToWord[60] = 'شصت'
numberToWord[70] = 'هفتاد'
numberToWord[80] = 'هشتاد'
numberToWord[90] = 'نود'
numberToWord[100] = 'صد'
numberToWord[200] = 'دویست'
numberToWord[300] = 'سیصد'
numberToWord[400] = 'چهارصد'
numberToWord[500] = 'پانصد'
numberToWord[600] = 'ششصد'
numberToWord[700] = 'هفتصد'
numberToWord[800] = 'هشتصد'
numberToWord[900] = 'نهصد'

/**
* [baseWord, Convert Numbers to Persian Text]
* @param  {[type]} number
* @return {[type]}
*/
const baseWord = (number) => {
  let unit = 100
  let result = ''
  while (unit > 0) {
    if (Math.floor(number / unit) * unit !== 0) {
      if (number in numberToWord) {
        result += numberToWord[number]
        break
      } else {
        result += numberToWord[Math.floor(number / unit) * unit] + ' و '
        number %= unit
      }
    }
    unit = Math.floor(unit / 10)
  }
  return result
}

const convertToWords = (number, prefix = '') => {
  if (number === '') { return '' }
  if (number === 0) { return '۰' }

  const base = 1000
  var result = []
  while (number > 0) {
    result.push(baseWord(number % base))
    number = Math.floor(number / base)
  }
  if (result.length > 4) { return '' }

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== '') {
      result[i] += ' ' + config.scale[i] + ' و '
    }
  }
  result.reverse()

  let word = result.join('')
  while (word.endsWith(' و ')) {
    word = word.slice(0, -3)
  }
  return word + ' ' + prefix
}

export default convertToWords
