import { Action, AsyncAction } from '../'

export const register: Action = ({ actions }) => {
  actions.setTitle('woops')
}

export const getPosts: AsyncAction = async ({ state, effects }) => {
  const { posts } = await effects.user.gql.queries.posts({})
  console.log(posts)
}
