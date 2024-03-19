function getBooks(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ books: [{ name: "Harry Potter" }] }));
  }
  
function getAuthors(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ authors: [{ name: "J.K. Rowling" }] }));
  }

function getBodyFromStream(req) {
    return new Promise((resolve, reject) => {
      const data = [];
      req.on("data", (chunk) => {
        data.push(chunk);
      });
      req.on("end", () => {
        const body = Buffer.concat(data).toString();
        if (body) {
          // assuming that the body is a json object
          resolve(JSON.parse(body));
          return;
        }
        resolve({});
      });
  
      req.on("error", (err) => {
        reject(err);
      });
    });
  }

module.exports = {
    getBooks,
    getAuthors,
    getBodyFromStream,
   }