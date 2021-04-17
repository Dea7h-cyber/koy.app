import { IAction, IConfig } from 'overmind'
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from 'overmind-react'

import { state } from './state'
import * as actions from './actions'

export const config = {
  state,
  actions,
}

export interface Config extends IConfig<typeof config> {}

export interface Action<Input = void, Output = void>
  extends IAction<Config, Input, Output> {}

export interface AsyncAction<Input = void, Output = void>
  extends IAction<Config, Input, Promise<Output>> {}

export const useAppState = createStateHook<typeof config>()
export const useActions = createActionsHook<typeof config>()
export const useEffects = createEffectsHook<typeof config>()
export const useReaction = createReactionHook<typeof config>()
