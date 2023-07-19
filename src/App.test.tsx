import { render } from "./lib/testing";
import { it } from "vitest";
import App from "./App";

// ----- Running the test suite -----
// Running `npm run dev` should have automatically opened the testing UI
// You can run the test suite using `npm run test` or `npm run test:ui` (https://vitest.dev/guide/ui.html#vitest-ui)
// to see a dedicated UI to view and interact with your tests and your test results.

describe("Feed Page", () => {
  it("should render successfully", () => {
    expect(() => render(<App />)).not.toThrowError();
  });

  // TODO: Ensure all required tests are passing
  describe("REQUIRED TESTS", () => {
    // 👇 remove `.fails` before starting this test case
    it.fails("should allow the user to create new posts", () => {
      // TODO: Complete this test case
    });

    describe("feed posts (route: '/')", () => {
      // 👇 remove `.fails` before starting this test case
      it.fails("should render a feed post for each item", () => {
        // TODO: Complete this test case
      });

      // 👇 remove `.fails` before starting this test case
      it.fails("should render a title for each post", () => {
        // TODO: Complete this test case
      });

      // 👇 remove `.fails` before starting this test case
      it.fails(
        "should render a human readable published date for each post",
        () => {
          const format = "MMMM D, YYYY";
          // TODO: Complete this test case
        }
      );

      // 👇 remove `.fails` before starting this test case
      it.fails(
        "should render a snippet of the post content with a max of 200 characters",
        () => {
          // TODO: Complete this test case
        }
      );

      // 👇 remove `.fails` before starting this test case
      it.fails(
        "should render a 'Read more' link for each post that navigates to the post page (/posts/:id)",
        () => {
          // TODO: Complete this test case
        }
      );
    });

    describe("post show page (/posts/:id)", () => {
      // 👇 remove `.fails` before starting this test case
      it.fails(
        "should render the posts title and published date (human readable) as a heading",
        () => {
          const format = "MMMM D, YYYY";
          // TODO: Complete this test case
        }
      );

      // 👇 remove `.fails` before starting this test case
      it.fails(
        "should display the full post content, while preserving new lines",
        () => {
          // TODO: Complete this test case
        }
      );

      // 👇 remove `.fails` before starting this test case
      it.fails("should display a 👍🏻 kudos button in the header", () => {
        // TODO: Complete this test case
      });

      // 👇 remove `.fails` before starting this test case
      it.fails("should display a kudos count next to the kudos button", () => {
        // TODO: Complete this test case
      });

      // 👇 remove `.fails` before starting this test case
      it.fails(
        "should add a kudos to the post when the kudos button is clicked",
        () => {
          // TODO: Complete this test case
        }
      );
    });
  });

  describe("stretch goal tests", () => {
    it.fails(
      "should render a 404 page when visiting a post route that doesn't exist",
      () => {
        // TODO: Complete this test case
      }
    );

    it.fails(
      "should allow users to add comments to a post on the post show page",
      () => {
        // TODO: Complete this test case
      }
    );

    it.fails(
      "should allow users see the number of comments for each post on the feed page",
      () => {
        // TODO: Complete this test case
      }
    );
  });
});
