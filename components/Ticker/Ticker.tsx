import styled from "styled-components";


export default function Ticker({ dellay }: {dellay?: Number}) {
  return (
    <TickerContainer>
      <Row $dellay={dellay}>
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
      </Row>

      <Row  $dellay={dellay}>
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
      </Row>
    </TickerContainer>
  )
};

const TickerContainer = styled.div`
  position: relative;
  height: 80px;
  overflow: hidden;
  gap: 80px;
  display: flex;
  background-color: var(--second-color-background);
`;

const Row = styled.div<{ $dellay?: Number }>`
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  white-space: nowrap;
  flex-wrap: nowrap;
  flex-shrink: 0;
  overflow: hidden;
  gap: 80px;
  animation: ${props => `scroll ${props.$dellay || 30}s linear infinite`};
  @keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 80px));
  }
}`;

const TickerItem = styled.div`
  width: 150px;
  background-image: url('/logos.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
