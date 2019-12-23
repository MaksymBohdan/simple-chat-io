import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoImg = styled.img`
  border-radius: 50%;
  margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const LogoSpace = styled.div`
  height: 150px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export { LogoImg, StyledLink, LogoSpace };
