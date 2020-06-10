import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navigation from './nav';

const HomeLink = styled(Link)`
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  
`;

const Header = () => {
  return (
    <header
      css={css`
        background-color: rgba(44, 62, 80);
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <HomeLink to={'/'}>
          <h1>Hotel Soritor</h1>
        </HomeLink>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
