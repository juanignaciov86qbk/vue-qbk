// Al inicio del archivo de entrada de Vue, antes de cargar Vue...
delete Object.prototype['staticClass']
delete Object.prototype['staticStyle']
delete Object.prototype['classBinding'] // si también quieres limpiar classBinding

import Vue from './runtime-with-compiler'
import * as vca from 'v3'
import { extend } from 'shared/util'

extend(Vue, vca)

import { effect } from 'v3/reactivity/effect'
Vue.effect = effect

export default Vue
