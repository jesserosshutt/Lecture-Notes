const { exportAllDeclaration } = require("@babel/types");
const { doesNotMatch } = require("assert");
const { request } = require("http");
// add cheerio and super test up here?

test("jest is running", () => {
  expect(7).toBeLessThan(10);
});

// test name, can be anyting
test("/ welcome us", (done) => {
  // arrange
  const expected = "welcome to my site";

  // act

  request(server)
    // place to check
    .get("/")
    .end((err, response) => {
      // handles error

      // console.log(response.text)
      const $ = cheerio.load(response.text);
      // after $ can add any html tag or class, has to be in " "
      const actual = $("h1").text(); // can have .attr(src)

      // assert
      expect(err).toBeNull();
      // expect(response.text).toContain(expected)
      expect(actual).toContain(expected);
      done();
    });
});
