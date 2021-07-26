exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query projectPage {
      allSanityProject(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  data.allSanityProject.edges.forEach((edge) => {
    const slug = edge.node.slug.current
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/project-info.js`),
      context: {
        slug: slug,
      },
    })
  })
}
