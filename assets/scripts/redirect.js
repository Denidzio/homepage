'use strict';

import { loadJSON } from './services/jsonService.js';
import { redirect } from './services/langService.js';
import { githubFolder } from './global.js';

const languageSetSrc = `${githubFolder}/assets/lang/set.json`;

(async () => {
  const langSet = await loadJSON(languageSetSrc);
  const currentPath = window.location.pathname;
  const chosenLang = currentPath.slice(githubFolder.length + 1);

  console.log(chosenLang);

  if (langSet.all.includes(chosenLang)) {
    redirect(chosenLang);
    return;
  }

  document.body.textContent = '404';
})();
