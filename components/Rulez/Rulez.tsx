import Link from "next/link";
import styled from "styled-components";
import { Button } from "../BBButton/BBButton";

export default function Rulez () {
  return (
    <RulezContainer>
    <CardContainer>
      <Card>
        <CardIcon $iconUrl="/icon_questions.png"/>
        <CardTitle>
          Ответь на все вопросы квиза
        </CardTitle>
      </Card>

      <Card>
        <CardIcon $iconUrl="/icon_football.png"/>
        <CardTitle>
          Сделай ставку от 500 с коэффициентом от 1.3 на любое спортивное событие
        </CardTitle>
      </Card>

      <Card>
        <CardIcon $iconUrl="/icon_winners.png"/>
        <CardTitle>
          Дождись результатов розыгрыша XX октября
        </CardTitle>
      </Card>
    </CardContainer>

      <Link href={'quizPage'}>
        <Button>Пройти квиз</Button>
      </Link>
    </RulezContainer>
  )
};


const RulezContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    @media (max-width: 1023px) {
      gap: 20px;
      max-width: 60%;
      min-width: 335px;
      padding: 24px;
      background-image: url('/noise_texture.png');
      border-radius: 8px;
  }

  button {
    @media (max-width: 1023px) {
      min-width: 295px;
      font-size: 14px;
      padding: 15px;
      width: 100%;
    }
  }
`

const CardContainer = styled.div`
  width: 100%;
  max-width: 1520px;
  display: flex;
  gap: 40px;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  border-radius: 8px;
  padding: 24px;
  background-image: url('/noise_texture.png');

  @media (max-width: 1023px) {
    flex-direction: row;
    padding: 0;
    gap: 20px;
    background-image: none;

    &:nth-child(2) {
      border-radius: 0;
    }
  }
`;


const CardIcon = styled.div<{$iconUrl?: string}>`
  background-image: ${props => `url(${props.$iconUrl})` || ''};
  min-width: 40px;
  min-height: 40px;
  background-position: center;
  background-size: cover; 
  background-repeat: no-repeat;


  @media (max-width: 1023px) {
    min-width: 28px;
    min-height: 28px;
  }
`;

const CardTitle = styled.h2`
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  margin: 0;

  @media (max-width: 1023px) {
    font-size: 16px;
    text-align: start;
    line-height: 22px;
  }
`;
