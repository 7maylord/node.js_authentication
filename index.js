const http = require("http");
const fs = require("fs");
const path = require("path");
const { getAuthors, getBooks, getBodyFromStream } = require("./getfunction.js");
const { authenticate } = require("./authentication");

const PORT = 4000 

const server = http.createServer (async (req,res) => {
    try {
        const body = await getBodyFromStream(req);
        req.body = body;

        //for books route
        if(req.url === "/books"){
            if (req.method === "GET"){
                authenticate(req, res, getBooks)
            } else if (req.method === "POST"){
                authenticate(req, res, () => res.end(`Hello from ${req.method}`));               
            } else if (req.method === "PUT"){
                authenticate(req, res, () => res.end(`Hello from ${req.method}`));
            } else if (req.method === "PATCH"){
                authenticate(req, res, () => res.end(`Hello from ${req.method}`));
            } else if (req.method === "DELETE"){
                authenticate(req, res, () => res.end(`Hello from ${req.method}`));
            }
        }
        //For authors route
        if (req.url === "/authors") {
            if (req.method === "GET"){
                authenticate(req, res, getAuthors)
            } else if (req.method === "POST"){
                authenticate(req, res, () => res.end(`Hello from ${req.method}`));
            } else if (req.method === "PUT"){
                authenticate(req, res, () => res.end(`Hello from ${req.method}`));
            } else if (req.method === "PATCH"){
                authenticate(req, res, () => res.end(`Hello from ${req.method}`));
            } else if (req.method === "DELETE"){
                authenticate(req, res, () => res.end(`Hello from ${req.method}`));
            }
        } 
    } catch (error) {
              res.statusCode = 500;
              res.end(error.message);
            }
        });
          
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});