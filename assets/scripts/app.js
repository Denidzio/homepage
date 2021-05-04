'use strict';

import loadJSON from './services/jsonService.js';
import { changeLang } from './services/langService.js';

const langContentSrc = '/assets/lang/content.json';
const langSetSrc = '/assets/lang/set.json';

(async () => {
  const [langContent, langSet] = await Promise.all([
    loadJSON(langContentSrc),
    loadJSON(langSetSrc),
  ]);

  const langNodes = document.querySelectorAll('[data-lang]');
  const toggleLang = document.querySelector('.toggle-lang');

  const storageLang = window.localStorage.getItem('lang');

  toggleLang.addEventListener('click', (e) => {
    const chosenLang = e.target.dataset.link.slice(1);

    if (chosenLang === window.localStorage.getItem('lang')) {
      return;
    }

    changeLang(chosenLang, langContent, langNodes);
  });

  if (storageLang && langSet.all.includes(storageLang)) {
    changeLang(storageLang, langContent, langNodes);
    return;
  }

  changeLang(langSet.default, langContent, langNodes);
})();
