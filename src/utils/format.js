import strings from '~/i18n'

export const formatMoney = (money, options = {}) => {
  const {
    precision = 0,
    withCurrencyUnit = false,
    unit = strings.currency.unit,
    space = false,
  } = options

  // Chuyển đổi số thành chuỗi với độ chính xác
  const formattedNumber = Number(money).toFixed(precision)

  // Thêm dấu phẩy ngăn cách hàng nghìn
  const numberWithCommas = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // Xác định đơn vị tiền tệ
  const currencyUnit = [
    withCurrencyUnit || unit !== strings.currency.unit ? unit : strings.currency.unit,
    (withCurrencyUnit && unit !== strings.currency.unit) ? strings.currency.unit : null,
  ].filter(Boolean).join(' ')

  // Định dạng cuối cùng
  return `${numberWithCommas}${space ? ' ' : ''}${currencyUnit}`
}

export const formatMoneyString = (money, options = {}) => {
  if (money < 1000000) { // < 1.000.000
    return formatMoney(money, {
      ...options,
      unit: strings.currency.unit,
    })
  } else if (money < 1000000000) { // < 1.000.000.000
    return formatMoney(money / 1000000, {
      unit: strings.currency.million.unit,
      precision: 1,
      space: true,
      withCurrencyUnit: false,
      ...options,
    })
  } else { // > 1.000.000.000
    return formatMoney(money / 1000000000, {
      unit: strings.currency.billion.unit,
      precision: 1,
      space: true,
      withCurrencyUnit: false,
      ...options,
    })
  }
}

export const formatMoneyString2 = (money, options = {}) => {
  if (money < 1000000) { // < 1.000.000
    return formatMoney(money / 1000, {
      ...options,
      unit: 'K',
    })
  } else if (money < 1000000000) { // < 1.000.000.000
    return formatMoney(money / 1000000, {
      unit: strings.currency.million.unit,
      precision: 0,
      space: true,
      withCurrencyUnit: false,
      ...options,
    })
  } else { // > 1.000.000.000
    return formatMoney(money / 1000000000, {
      unit: strings.currency.billion.unit,
      precision: 0,
      space: true,
      withCurrencyUnit: false,
      ...options,
    })
  }
}

export function formatNumber(num) {
  return (
    num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  ) // use . as a separator
}

export function clearNumberFormat(num) {
  if (!num) {
    return num
  }
  return (
    // num.replaceAll('.', '')
    num.trim().replace(/\.+/g, '').replace(/,+/g, '')
  )
}