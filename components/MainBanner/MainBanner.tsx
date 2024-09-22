import styled from "styled-components";
import Ticker from "../Ticker/Ticker";
import Title from "../Title/Title";
import { Button } from "../BBButton/BBButton";
import Link from "next/link";


export default function MainBanner({
  title,
  description,
  imgUrl,
  bgImgUrl,
  bgImgMobUrl,
  ticker=false,
}) {
  
  return (
    <>
    <BannerContainer $bgImgUrl={bgImgUrl} $bgImgMobUrl={bgImgMobUrl}>
      <BannerText>
        <Title>{title}</Title>
        <BannerDesription>{description}</BannerDesription>
          <Link href={'quizPage'}>
            <Button>Пройти квиз</Button>
          </Link>
        <BannerRulesLink href="#">Правила акции</BannerRulesLink>
      </BannerText>
      <BannerImage src={imgUrl}/>
    </BannerContainer>

    {ticker && <Ticker dellay={40} />}
    </>
  )
}


const BannerContainer = styled.div<{ $bgImgUrl: string; $bgImgMobUrl?: string}>`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  min-height: 600px;
  background-image: ${props => `url(${props.$bgImgUrl})` || ''};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 60px;

  @media (max-width: 1023px) {
    gap: 20px;
    padding: 60px 20px;
    align-items: start;
    background-image: ${props => `url(${props.$bgImgMobUrl || props.$bgImgUrl})` || ``};
  }
`;

const BannerImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 1225px;

  @media (max-width: 1023px) {
    mask-image: linear-gradient(rgba(0,0,0,0) 0, rgba(0,0,0,1) 15%);
  }
`;

const BannerText = styled.div`
    width: 100%;
    max-width: 1520px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    margin: 0 auto;
    z-index: 10;
    padding-right: 52%;

  @media (max-width: 1023px) {
    align-items: center;
    text-align: center;
    padding-right: 0;
  }
`;

const BannerDesription = styled.h2`
  max-width: 95%;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  font-family: Gilroy;

  @media (max-width: 1023px) {
    font-size: 20px;
    margin: 0 0 4px;
  }
`;

const BannerRulesLink = styled.a`
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--option-color-text);
  text-decoration: underline;
  width: max-content;

  @media (max-width: 1023px) {
    color: var(--main-color-text);
    font-size: 12px;
    margin-top: -12px;
  }
`;