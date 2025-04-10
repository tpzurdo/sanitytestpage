import React from "react"
import { graphql } from "gatsby"
import PostBody from "../components/PostBody"

export const query = graphql`
  query PostBySlug($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      _rawBody
    }
  }
`

export default function Post({ data }) {
  const post = data.sanityPost

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <PostBody value={post._rawBody} />
    </main>
  )
}
