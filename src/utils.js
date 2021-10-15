const getRankedScoreList = (list) => list.sort((a, b) => b.score - a.score)
  .map((userScore, i) => ({ rank: (i + 1), name: userScore.user, score: userScore.score }));

const generateScoreListHtml = (list, ulContainer) => {
  let ulInner = '';
  list.forEach((item) => {
    const { rank, name, score } = item;
    ulInner += `
    <li>${rank}. ${name} : ${score}</li>`;
  });
  ulContainer.innerHTML = ulInner;
};

export { generateScoreListHtml, getRankedScoreList };
