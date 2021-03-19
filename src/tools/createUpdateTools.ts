export const nameRegex = new RegExp(/^(?:[a-zа-я]{1,})[\s]{1}(?:[a-zа-я]{1,})$/im)
export const phoneRegex = new RegExp(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/)
export const requiredName = (value: string) => ( nameRegex.test(value) ? undefined : 'Укажите имя и фамилию через пробел')
export const requiredPhone = (value: string) => ( phoneRegex.test(value) ? undefined : 'Введите правильный номер телефона')

export function formatDate(date: string): string {
  const dateArr = date.split('-')
  return `${dateArr[2]}.${dateArr[1]}.${dateArr[0]}`
}

export function formatDateForInput(date: string | undefined): string {
  const dateArr = date?.split('.')
  return `${dateArr?.[2]}-${dateArr?.[1]}-${dateArr?.[0]}`
}

export function generateId(): number {
  return Math.floor(Math.random() * 100000)
}
