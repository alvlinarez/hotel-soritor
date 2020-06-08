import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const HomeContent = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "home" } }){
        nodes {
          title
          content
          image {
            fluid {
#              srcSet
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `);
  console.log(info);
  return (
    <>
     <h2>Page Title</h2>
    </>
  );
};

export default HomeContent;
