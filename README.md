# Project Overview

This is a web-based application that reads RSS feeds. This project is part of the [Udacity front end web developer nanodegree course][1]. It demonstrates the context for the [jasmine testing framework][2] and also some use cases.

## Test Cases Covered
**RSS feeds are defined**

**Each RSS feed have a valid URL**

**Each RSS feed hava a valid name**

These three test cases shows the usage of toBeDefined, not and toBe jasmine matchers to ensure correct behavior when the page loads.

**The Menu is hidden by default**

**The Menu toggles visibility when clicked**

These two test cases uses the getBoundingClientRect method on the menu element and ensures that the rectangle is off screen and on screen when needed.

**Initial Entries contains at least one entry**

This test case uses the toBeGreaterThan jasmine matcher to ensure that there is at least one entry in the feed list when it's loaded.

**New Feed Selection changes the feed content**

This test case mimicks new feed selection and ensures feeds change.

## Running the application

1.  Ensure you have [node and npm][3] installed, and execute the below command to install [live-server][4]:

    `npm install -g live-server`

2. Clone this project and navigate to the root of the project directory and execute this command:

    `live-server`

3. You will get a message like this from the command:

```
>live-server
Serving "D:\web_development\frontend-nanodegree-feedreader" at http://127.0.0.1:8080
Ready for changes
```

4. The path and URL would be different based on how you chose to install and run live-server, and where you cloned your project to. Use the URL provided in the message to access the website from a web browser.

5. The website will load up along with the jasmine test cases in the bottom of the page.


[1]: https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001
[2]: http://jasmine.github.io/
[3]: https://nodejs.org/en/download/
[4]: https://www.npmjs.com/package/live-server