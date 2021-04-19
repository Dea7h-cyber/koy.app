import { OnInitialize } from '../'

export const onInitialize: OnInitialize = async ({ actions, effects }) => {
  effects.user.gql.initialize({
    endpoint: 'http://localhost:5000/graphql',
    // This runs on every request
    headers: () => ({
      Authorization: `Bearer test`,
    }),
    // The options are the options passed to GRAPHQL-REQUEST
    options: {
      credentials: 'include',
      mode: 'cors',
    },
  })
}
