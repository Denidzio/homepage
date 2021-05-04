import { githubFolder } from '../global.js';

export function fillContent(lang, content, nodes) {
  Array.from(nodes).forEach((value) => (value.textContent = content[value.dataset.lang][lang]));
}

export function redirect(lang) {
  window.localStorage.setItem('lang', lang);
  window.location.href = githubFolder;
}

export function changeLang(lang, content, nodes) {
  fillContent(lang, content, nodes);
  window.localStorage.setItem('lang', lang);
  window.history.pushState({}, null, `${githubFolder}/${lang}`);
}
