import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PostBody from "../components/PostBody"
import Layout from "../components/Layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPost {
        nodes {
          title
          slug {
            current
          }
          _rawBody
        }
      }
    }
  `)

  const post = data.allSanityPost.nodes[0]

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <PostBody value={post._rawBody} />
    </Layout>
  )
}

export default IndexPage
