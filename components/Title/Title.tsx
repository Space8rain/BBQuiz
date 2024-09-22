import styled from "styled-components";

export default function Title({ children }) {
  return (
    <TitleComponent>
      {children}
    </TitleComponent>
  )
};

const TitleComponent = styled.h1`
  font-size: 80px;
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;

  @media (max-width: 1023px) {
    font-size: 52px;
  }
`;
24