import Link from "next/link";
import styled from "styled-components";
import { Button } from "../BBButton/BBButton";

export default function Modal ({ correctAnswers, length, onReset }) {

  return (
    <ModalContainer>
      <Content>
        <h1>Твой результат</h1>
        <span>{correctAnswers}/{length}</span>
        <p>Сделай ставку от 500 ₽ с коэффициентом от 1.3 на любое спортивное событие для участия в розыгрыше 200 000 фрибетов и 30 футболок «Броуков»! </p>
        <ButtonContainer>
          <Button onClick={onReset} $bgColor="--video-background" $color="--main-color-text">Пройти ещё раз</Button>
          <Button>Сделать ставку</Button>
        </ButtonContainer>
        <p>Результаты розыгрыша и видео с правильными ответами будет опубликовано на этой странице ХХ октября</p>
      </Content>
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.8);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1023px) {
    align-items: end;
  }
`;

const Content = styled.div`
  font-family: Giorgio;
  max-width: 600px;
  width: 100%;
  padding: 40px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--second-color-background);
  border-radius: 20px;
  gap: 32px;

  h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 56px;
    text-align: center;
    margin: 0;

    @media (max-width: 1023px) {
      font-size: 52px;
    }
  }

  span {
    font-size: 100px;
    font-weight: 700;
    line-height: 96px;
    text-align: center;
    color: var(--accent-color);

    @media (max-width: 1023px) {
      font-size: 80px;
    }
  }

  p {
    font-family: Lato, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    margin: 0;

    @media (max-width: 1023px) {
      font-size: 16px;
    }

    &:last-of-type {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      color: var(--option-color-text);

      @media (max-width: 1023px) {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 1023px) {
    border-radius: 20px 20px 0 0;
    padding: 40px 20px;
    gap: 24px;
    max-width: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    @media (max-width: 1023px) {
      min-width: 0;
      font-size: 14px;
      padding: 15px;
      width: 100%;
    }
  }

  @media (max-width: 1023px) {
    gap: 12px;
  }
`;