import './style.css';
import { scoreListExample, generateScoreListHtml } from './utils.js';

const listUL = document.querySelector('[data-score-list]');

generateScoreListHtml(scoreListExample, listUL);
