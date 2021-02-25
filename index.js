export function utcTimezones() {
  return [
    'UTC+14',
    'UTC+13:45',
    'UTC+13',
    'UTC+12',
    'UTC+11',
    'UTC+10:30',
    'UTC+10',
    'UTC+9:30',
    'UTC+9',
    'UTC+8:45',
    'UTC+8',
    'UTC+7',
    'UTC+6:30',
    'UTC+6',
    'UTC+5:45',
    'UTC+5:30',
    'UTC+5',
    'UTC+4:30',
    'UTC+4',
    'UTC+3:30',
    'UTC+3',
    'UTC+2',
    'UTC+1',
    'UTC+0',
    'UTC-1',
    'UTC-2',
    'UTC-3',
    'UTC-3:30',
    'UTC-4',
    'UTC-5',
    'UTC-6',
    'UTC-7',
    'UTC-8',
    'UTC-9',
    'UTC-9:30',
    'UTC-10',
    'UTC-11',
    'UTC-12',
  ]
}

export function utcOf(timezoneOffset) {
  const h = - (timezoneOffset / 60 | 0)
  const minutes = timezoneOffset % 60
  const mm = minutes !== 0 ? ':' + Math.abs(minutes).toString() : ''
  const plus = h >= 0 ? '+' : ''
  return `UTC${plus}${h}${mm}`
}

export function currentUtc() {
  return utcOf(new Date().getTimezoneOffset())
}
