import MainContainer from "../components/MainContainer/MainContainer";
import MainBanner from '../components/MainBanner/MainBanner';
import Prizes from '../components/Prizes/Prizes';
import styled from "styled-components";
import Title from "../components/Title/Title";
import Rulez from "../components/Rulez/Rulez";

export default function Home() {

  const Content = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    background-image: url('/bg_gradient.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: 1023px) {
    padding: 32px 20px;
    text-align: center;
  }
`;

  return (
    <MainContainer title_page={'Главная страница'}>
      <MainBanner
        bgImgUrl={'/bg_banner_desk.png'}
        bgImgUrlMob={'/bg_banner_mob.png'}
        imgUrl={'/banner_image.png'}
        title={'Насколько хорошо Ты знаешь «Броуков»?'}
        description={'Получи шанс забрать часть от 200 000 фрибетов или одну из 30 футболок «Броуков»!'}
        ticker
      />

      <Content>
        <Section>
          <Title>Призовой фонд</Title>
          <Prizes />
        </Section>
        
        <Section>
          <Title>Как принять участие</Title>
          <Rulez />
        </Section>
      </Content>
    </MainContainer>
  )
}
