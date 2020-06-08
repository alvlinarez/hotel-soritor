import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`;

const ImageText = styled.div`
  background-image: linear-gradient(to top, rgba(34, 49, 63, .8), rgba(34, 49, 63, .8));
  color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    margin: 0;
    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }
  p {
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`;

const HotelImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "3.jpg" }) {
        sharp: childImageSharp {
          fluid {
            #srcSetWebp
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground
      tag="section" fluid={image.sharp.fluid} fadeIn="soft"
    >
      <ImageText>
        <h1>Welcome to Hotel Soritor!</h1>
        <p>The best hotel for your holidays</p>
      </ImageText>
    </ImageBackground>
  );
};

export default HotelImage;
