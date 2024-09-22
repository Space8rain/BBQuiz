import styled from "styled-components";

export default function Prizes () {
  return (
    <CardContainer>
      <Card>
        <CardTitle><span>30</span>Футболок</CardTitle>
        <CardImg src="/prize_tshirt.png"/>
      </Card>
      <Card>
        <CardTitle><span>200к</span>Фрибетов</CardTitle>
        <CardImg src="/prize_coin.png"/>
      </Card>
    </CardContainer>
  )
}


const CardContainer = styled.div`
  width: 100%;
  max-width: 1520px;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 1023px) {
    gap: 16px;
  }
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 740px;
  min-width: 160px;
  min-height: 210px;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
  }
`;

const CardTitle = styled.h2`
  font-size: 52px;
  font-weight: 700;
  line-height: 48px;
  margin: 0;
  padding: 32px;
  background-image: url('/noise_texture.png');
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-align: center;
  text-transform: uppercase;

  span {
    color: var(--accent-color);
    padding: 1rem;

    @media (max-width: 1023px) {
    padding: .2rem;
    }
  }

  @media (max-width: 1023px) {
    font-size: 28px;
    padding: 12px;
    transform: none;
    writing-mode: horizontal-tb;
  }
`;

const CardImg = styled.img`
  background-image: url('/bg_prize.png');
  max-height: 400px;
  height: 100%;
  width: 100%;
  max-width: 628px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1023px) {
    
  }
`;
