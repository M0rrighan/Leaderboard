const polyBridgeID = 'KfHLA8dnMC4xAGZz0t9I';
const leaderBoardBaseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const polyBridgeScoresURL = `${leaderBoardBaseURL}games/${polyBridgeID}/scores/`;
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });

const readScores = async () => {
  const scores = await fetch(polyBridgeScoresURL, {
    method: 'GET',
    headers: header,
  });
  return scores.json();
};

const postNewScore = async (userScore) => {
  const postResult = await fetch(polyBridgeScoresURL, {
    method: 'POST',
    body: JSON.stringify(userScore),
    headers: header,
    mode: 'cors',
  });

  return postResult.json();
};

// const createNewGame = async () => {
//   const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//     method: 'POST',
//     body: JSON.stringify({ name: 'Poly Bridge' }),
//     headers: header,
//   });
//   const newGame = await response.json();
//   return newGame;
// };

// console.log(createNewGame().result);

export { readScores, postNewScore };
