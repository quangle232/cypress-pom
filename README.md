# Cypress with POM [![Circle CI](https://circleci.com/gh/cypress-io/cypress-example-todomvc.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-todomvc) [![Build status](https://ci.appveyor.com/api/projects/status/6wjyoye82orkkyny/branch/master?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-example-todomvc/branch/master)


This repo contains an example automation tessting written in Cypress v10 for newbiew from selenium.

The tests are written to be directly compared to the official https://computer-database.herokuapp.com/ website.

Each test covers the basic function in herokuapp with Page Object Model Pattern and simple specs

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### 2. Execute testing for this repo

#### a. install the node_modules
```npm install```

#### b. run test with cypress headless
```cypress run```

#### c. run tt with cypress UI
```npx cypress open```

####     Cypress UI will display and select end to end test
<img width="1199" alt="Screen Shot 2022-07-18 at 10 04 29 AM" src="https://user-images.githubusercontent.com/47560307/179440179-7c303c1a-3da3-488d-942a-e170d2a09fe9.png">

#####     Select any browser - Recomendation: Electron
<img width="1192" alt="Screen Shot 2022-07-18 at 10 04 45 AM" src="https://user-images.githubusercontent.com/47560307/179439757-6c09bf1f-6529-4fc6-b5fe-c8eba5927729.png">

#####     Select spec to run
<img width="1279" alt="Screen Shot 2022-07-18 at 10 04 56 AM" src="https://user-images.githubusercontent.com/47560307/179439819-80da5f53-6149-44fa-b1f1-93e942b48b86.png">

#####    Run and observe the result
<img width="1281" alt="Screen Shot 2022-07-18 at 10 05 34 AM" src="https://user-images.githubusercontent.com/47560307/179439863-05d4d3ba-9eb9-4f2c-b4af-e4c7c0c9d325.png">

# Have fun!!!

