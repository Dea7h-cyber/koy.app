import { IAction, IConfig, IOnInitialize } from 'overmind'
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createHook,
} from 'overmind-react'

import { state } from './state'
import { actions } from './actions'
import { effects } from './effects'

export const config = {
  state,
  actions,
  effects,
}

export interface Config extends IConfig<typeof config> {}

export interface OnInitialize extends IOnInitialize<Config> {}

export interface Action<Input = void, Output = void> extends IAction<Config, Input, Output> {}

export interface AsyncAction<Input = void, Output = void>
  extends IAction<Config, Input, Promise<Output>> {}

export const useAppState = createStateHook<typeof config>()
export const useActions = createActionsHook<typeof config>()
export const useEffects = createEffectsHook<typeof config>()
export const useReaction = createReactionHook<typeof config>()
export const useOvermind = createHook<typeof config>()
