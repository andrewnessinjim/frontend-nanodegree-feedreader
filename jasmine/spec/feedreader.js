/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have valid URLs', function () {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined(
                    `${JSON.stringify(feed)} should have url defined`
                );
                expect(feed.url.length).not.toBe(
                    0,
                    `${JSON.stringify(feed)} should not have url of length 0`
                );
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have valid names', function () {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined(
                    `${JSON.stringify(feed)} should have name defined`
                );
                expect(feed.name.length).not.toBe(
                    0,
                    `${JSON.stringify(feed)} should not have name of length 0`
                );
            }
        })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function () {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        const menu = document.querySelector('.slide-menu');
        it('is hidden by default', function () {
            expect(isOffScreen(menu)).toBe(true);
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('toggles visibility when clicked', function (done) {
            const menuButton = document.querySelector('.menu-icon-link');

            // Expect only after the transition ends when menu is opened
            menu.addEventListener('transitionend', function menuOpenHandler() {
                expect(isOffScreen(menu)).toBe(false);

                // Prevent repeated handler invocation
                menu.removeEventListener('transitionend',menuOpenHandler);

                // Expect only after the transition ends when menu is closed
                menu.addEventListener('transitionend', function menuCloseHandler() {
                    expect(isOffScreen(menu)).toBe(true);
                    menu.removeEventListener('transitionend', menuCloseHandler);
                    done();
                })

                //Click button to close menu. This also resets the status back to how it was when the test started
                menuButton.click();
            });

            //Click button to open menu
            menuButton.click();
        });
    })


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('contains at least one entry', function () {
            const entries = document.querySelectorAll('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        })

    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('changes the feed content', function (done) {
            let initiallyLoadedFeeds;
            loadFeed(0, savedAndReload);

            function savedAndReload() {
                initiallyLoadedFeeds = document.querySelectorAll('.feed .entry h2');
                loadFeed(1, checkIfContentChanged);

                function checkIfContentChanged () {
                    document.querySelectorAll('.feed .entry h2').forEach(function(header, index) {
                        if(initiallyLoadedFeeds[index]) {
                            //The headers from first loadFeed function should not be the same as the newly loaded headers
                            expect(header.textContent).not.toBe(initiallyLoadedFeeds[index].textContent);
                        }
                    });
                    done();
                }
            }
        });
    })
}());

function isOffScreen(el) {
    var rect = el.getBoundingClientRect();
    return (
        (rect.x + rect.width) <= 0
        || (rect.y + rect.height) <= 0
        || (rect.x >= window.innerWidth || rect.y >= window.innerHeight)
    );
}