const scoreListExample = [
  { name: 'Martina', score: 100 },
  { name: 'Alex', score: 80 },
  { name: 'George', score: 90 },
  { name: 'Lucas', score: 70 },
  { name: 'Julia', score: 60 },
];

const generateScoreListHtml = (list, ulContainer) => {
  let ulInner = '';
  list.forEach((item) => {
    const { name, score } = item;
    ulInner += `
    <li>
    <p>${name} : ${score} </p>
    </li>`;
  });
  ulContainer.innerHTML = ulInner;
};

export { scoreListExample, generateScoreListHtml };
