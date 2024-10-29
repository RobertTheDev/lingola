1. yarn create next-app <project-name>

2. VITEST => https://nextjs.org/docs/app/building-your-application/testing/vitest

3. PLAYWRIGHT => https://nextjs.org/docs/app/building-your-application/testing/playwright

4. Build, run start and test npx playwright test

5. ESLINT AND PRETTIER

yarn add --dev eslint-config-prettier prettier prettier-plugin-css-order prettier-plugin-organize-imports prettier-plugin-tailwindcss

prettierrc and prettierignore

6. ESLINT AND ESLINT EXTENSIONS

"eslint-plugin-jest-dom": "^5.4.0",
"eslint-plugin-jsonc": "^2.16.0",
"eslint-plugin-jsx-a11y": "^6.10.2",
"eslint-plugin-playwright": "^2.0.0",
"eslint-plugin-promise": "^7.1.0",
"eslint-plugin-react-perf": "^3.3.3",
"eslint-plugin-react-refresh": "^0.4.14",
"eslint-plugin-simple-import-sort": "^12.1.1",
"eslint-plugin-tailwindcss": "^3.17.5",
"eslint-plugin-testing-library": "^6.4.0",
"eslint-plugin-vitest": "^0.5.4",

7. Styles and stylelint

yarn add -D sass stylelint stylelint-config-standard stylelint-config-tailwindcss stylelint-scss

.stylelintrc.json
{
"extends": [
"stylelint-config-standard",
"stylelint-config-tailwindcss",
"stylelint-scss"
]
}

package json
"lint:css": "stylelint '**/\*.{scss,css}'",
"lint:css-fix": "stylelint '**/\*.{scss,css}' --fix",

7. HUSKY
   yarn add --dev husky

npx husky init

8. LINT STAGED
   yarn add -D lint-staged

pre-commit
npx lint-staged

.linstagedrc
{
"_.{js,jsx,ts,json,tsx}": [
"eslint --fix",
"prettier --write"
],
"_.{css,scss}": "stylelint '\*_/_.{scss,css}' --fix"
},

9. COMMITIZEN
   npm i -g commitizen
   commitizen init cz-conventional-changelog --yarn --dev --exact

10. COMMITLINT
    yarn add --dev @commitlint/{cli,config-conventional}

commitlint.config.ts

import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
extends: ['@commitlint/config-conventional'],
};

export default Configuration;

11. DOTENV
    .env .env.production .env.development

VSCODE SETTINGS / GITACTIOSN

github actions /jsdoc/ vscode settings
