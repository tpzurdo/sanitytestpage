// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//  */

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  result.data.allSanityPost.nodes.forEach(post => {
    createPage({
      path: `/post/${post.slug.current}`,
      component: require.resolve("./src/templates/post.tsx"),
      context: {
        slug: post.slug.current,
      },
    })
  })
}
