// Al inicio del archivo de entrada de Vue, antes de cargar Vue...
delete Object.prototype['staticClass']
delete Object.prototype['staticStyle']
delete Object.prototype['classBinding'] // si también quieres limpiar classBinding

import Vue from './runtime-with-compiler'

export default Vue

export * from 'v3'
