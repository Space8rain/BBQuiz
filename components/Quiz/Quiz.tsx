import Link from "next/link";
import styled from "styled-components"
import { Button } from "../BBButton/BBButton";
import QuizOption from "./QuizOption";
import { useState } from "react";

export default function Quiz({ data, step, length, onSubmit }) {

  const [answer, setAnswer] = useState(null);

  const handleChangeOption = (e) => {
    setAnswer(Number(e.target.value))
  };

  const handleSubmit = () => {
    if ( answer ) {
      onSubmit(answer);
      setAnswer(null);
    };
  };

  return (
    <QuizContainer>
      <VideoContainer>
        <video />
      </VideoContainer>

      <Question>
        <p>{step + 1} \ {length}</p>
        <h5>{data?.questionTitle}</h5>
        <OptionsContainer>
          {data?.options.map(option => (
            <QuizOption
              key={option.id}
              option={option}
              select={answer}
              handleChange={handleChangeOption}
            />
          ))}
        </OptionsContainer>
        <Button onClick={handleSubmit} disabled={!answer}>Ответить</Button>
      </Question>
    </QuizContainer>
  )
};


const QuizContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr .8fr;
  width: 100%;
  max-width: 1520px;
  height: 100%;
  background-color: var(--second-color-background);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1023px) {
    border-radius: 0;
    grid-template-columns: 1fr;
  }`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--video-background);
  background-image: url('/icon_play_circle.png');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  @media (max-width: 1023px) {
    height: 30vh;
  }

  video {

  };
`;


  const Question = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  gap: 16px;

  @media (max-width: 1023px) {
    padding: 20px;
  };

  p {
    font-family: Lato, sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--option-color-text);
    margin: 0;
    text-align: start;

    @media (max-width: 1023px) {
      font-size: 14px;
    }
  };

  h5 {
    height: auto;
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    margin: 0;

    @media (max-width: 1023px) {
      height: auto;
    }
  };

  button {
    max-width: 200px;
    min-width: auto;

    @media (max-width: 1023px) {
      max-width: 100%;
    }
  }
`;


const OptionsContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
