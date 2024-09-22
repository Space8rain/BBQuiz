import styled from "styled-components";
import MainContainer from "../components/MainContainer/MainContainer";
import Title from "../components/Title/Title";
import Quiz from "../components/Quiz/Quiz";
import { useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { increment_step, add_answer, getResult, resetQuiz, getQuestions } from "../redux/reducers/quizSlice";
import { AppDispatch } from "../redux/store";

export default function QuizPage () {

  const [ showModal, setShowModal ] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { step, answers, questions, result } = useAppSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  useEffect(() => {
  if (answers.length === questions.length) {
    dispatch(getResult(answers))
  }
  }, [answers]);


  const handleSubmit = ( answer ) => {
    if (step === questions.length - 1) {
      dispatch(add_answer(answer));
      setShowModal(true);
    } else {
      dispatch(add_answer(answer));
      dispatch(increment_step());
    }
  };

  const handleReset = () => {
    setShowModal(false);
    dispatch(resetQuiz());
    dispatch(getQuestions());
  };

  return (
    <MainContainer title_page={'Квиз'}>
      {showModal && <Modal correctAnswers={result.correctAnswers} length={questions.length} onReset={handleReset}/>}
      <Content>
        <Section>
          <BackButtonLink href="/#">Об акции</BackButtonLink>
          <Title>Смотри видео и отвечай на вопросы</Title>
        </Section>
        <Section>
          <Quiz data={questions[step]} onSubmit={handleSubmit} step={step} length={questions.length}/>
        </Section>
      </Content>
    </MainContainer>
  )
};

const Content = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 40px 60px 60px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  background-image: url('/bg_gradient.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1023px) {
    gap: 24px;
    padding: 24px 0 0;
    background-size: contain;
    background-position: 100% -35%;
  }

  @media (max-width: 767px) {
    background-position: 100% 5%;
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1023px) {
    text-align: start;
    gap: 20px;

    &:first-of-type {
      padding: 0 30% 0 20px;
    }
  }
`;

const BackButtonLink = styled.a`
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  color: var(--option-color-text);
  text-decoration: none;
  width: max-content;

  &::before {
    content: url('/icon_arrow_left.png');
    margin-right: .5rem;
  }

  @media (max-width: 1023px) {
    color: var(--main-color-text);
    font-size: 12px;
  }
`;