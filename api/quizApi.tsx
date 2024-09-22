const questions = [
  { 
    id: 1,
    videoUrl: '',
    questionTitle: 'Если бы игроки Броуков были представлены в карточках FIFA, у кого бы была самая большая характеристика по скорости?',
    options: [
      {
        id: 1,
        value: 'Зириков'
      },
      {
        id: 2,
        value: 'Мазур'

      },
      {
        id: 3,
        value: 'Гиля'

      },
      {
        id: 4,
        value: 'Макеев'

      },
    ]
  },
  {
    id: 2,
    videoUrl: '',
    questionTitle: 'Какой последний трек у тебя в плейлисте?',
    options: [
      {
        id: 1,
        value: 'МакSим – Знаешь ли ты',
      },
      {
        id: 2,
        value: 'Ice Spice & Rema – Pretty Girl',
      },
      {
        id: 3,
        value: 'Metallica – Nothing Else Matters',
      },
      {
        id: 4,
        value: 'Robb Bank$ - Outside',
      },
    ]
  },
  {
    id: 3,
    videoUrl: '',
    questionTitle: 'Какой лучший гол в истории футбола?',
    options: [
      {
        id: 1,
        value: 'Златан Ибрагимович за сборную Швеции – через себя в ворота Англии',
      },
      {
        id: 2,
        value: 'Робин ван Перси за сборную Нидерландов – головой в ворота Испании',
      },
      {
        id: 3,
        value: 'Хаби Алонсо за «Ливерпуль» – с центра поля в ворота «Ньюкасла»',
      },
      {
        id: 4,
        value: 'Роберто Карлос за сборную Бразилии – со штрафного в ворота Франции',
      },
    ]
  },
];

export const fetchResultQuiz = (answers) => {
  let count = 0;
  const correctOption = [1, 4, 4];

  answers.forEach((el, i) => {
    el === correctOption[i] && ( count += 1 );
  });


  return count;
};

export const fetchQuestions = () => questions;