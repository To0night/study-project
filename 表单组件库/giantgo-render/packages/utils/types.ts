export function isPrimitive(val: any) {
  return !['object', 'function'].includes(typeof val) || val === null
}

export function isObject(value: any) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function isArray(value: any) {
  return Object.prototype.toString.call(value) === '[object Array]'
}

export { hasOwn, NOOP } from '@vue/shared'
