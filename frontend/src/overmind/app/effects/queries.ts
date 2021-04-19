import { gql } from 'overmind-graphql'

export const posts = gql`
  query Posts {
    posts {
      id
      title
    }
  }
`
