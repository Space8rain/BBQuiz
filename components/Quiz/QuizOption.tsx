import styled from "styled-components";

export default function QuizOption ({option, select, handleChange}) {

  const onCLickParentRadio = (e) => {
    handleChange(e)
  };

  return (
    <Option value={option.id} onClick={onCLickParentRadio}>
      <RadioButton
        type="radio"
        name="quiz"
        value={option.id}
        checked={select === option.id}
        onChange={handleChange}
      />
      <RadioButtonLabel />
      {option.value}
    </Option>
  );
};


const Option = styled.li`
  text-decoration: none;
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  min-height: 72px;
  position: relative;
  cursor: pointer;

  &:hover label {
    border: 2px solid var(--checkbox-color);
  }

  @media (max-width: 1023px) {
    font-size: 16px;
    min-height: 48px;
  }
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 0 16px 0 0;
  border-radius: 50%;
  background: transparent;
  border: 2px solid var(--option-color-text);
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  width: 25px;
  height: 25px;
  margin: 0 16px 0 0;
  flex-shrink: 0;
  cursor: pointer;

  &:hover ~ ${RadioButtonLabel} {
    border: 2px solid var(--checkbox-color);
  };

  &:checked ~ ${RadioButtonLabel} {
    background: var(--checkbox-color);
    border: 2px solid var(--checkbox-color);

    &::after {
      content: '\2713';
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    };
  };
`;
