exports.createPages = async ({ actions, graphql, reporter }) => {
  const res = await graphql(`
    query {
      allDatoCmsRoom {
        nodes {
          slug
        }
      }
    }
  `);
  //console.log(res.data.allDatoCmsRoom.nodes);
  if(res.errors) {
    reporter.panic('No results found', res.errors);
  }
  const rooms = res.data.allDatoCmsRoom.nodes;
  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve('./src/components/rooms.js'),
      context: {
        slug: room.slug
      }
    })
  });
};
