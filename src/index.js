import './style.css';
import { readScores, postNewScore } from './leaderboard_api.js';
import { generateScoreListHtml, getRankedScoreList } from './utils.js';

const ulContainer = document.querySelector('[data-score-list]');
const refresh = document.querySelector('[data-refresh]');
const form = document.querySelector('[data-form-add]');
const nameInputField = document.getElementById('name');
const scoreInputField = document.getElementById('score');

const showUpdatedScores = async () => {
  const scoresFromApi = await readScores();
  const list = getRankedScoreList(scoresFromApi.result);
  generateScoreListHtml(list, ulContainer);
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = nameInputField.value;
  const score = scoreInputField.value;
  await postNewScore({ user, score });
  nameInputField.value = '';
  scoreInputField.value = '';
  await showUpdatedScores();
});

refresh.addEventListener('click', async () => {
  await showUpdatedScores();
});

window.onload = async () => {
  await showUpdatedScores();
};
