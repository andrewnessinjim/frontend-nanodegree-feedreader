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

[1]: https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001
[2]: http://jasmine.github.io/