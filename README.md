##### Empress Jets
Local dev app server
>npm run start

Format code before commit
> npx eslint -c .eslintrc.js --fix src

Build app
>npm run build

Deploy app
>firebase deploy --only hosting

Compile functions/guard.js typescript before deploying
>firebase deploy --only functions

Deploy single function
>firebase deploy --only functions:AddUser
