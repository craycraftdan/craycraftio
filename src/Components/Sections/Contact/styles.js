import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundTwo};
`;
