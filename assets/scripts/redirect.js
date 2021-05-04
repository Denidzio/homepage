'use strict';

import loadJSON from './services/jsonService.js';
import { redirect } from './services/langService.js';

const languageSetSrc = '/assets/lang/set.json';

(async () => {
  const langSet = await loadJSON(languageSetSrc);
  const chosenLang = window.location.pathname.slice(1);

  if (langSet.all.includes(chosenLang)) {
    redirect(chosenLang);
    return;
  }

  document.body.textContent = '404';
})();
