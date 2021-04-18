import { OnInitialize } from '../'

export const onInitialize: OnInitialize = async ({ actions }) => {
  // effects.api.init()
  // effects.api.setBearer()
  // await actions.user.verify()
  actions.setLoading(false)
}
