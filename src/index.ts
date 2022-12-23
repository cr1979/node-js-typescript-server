import http from "http";

//create a server object:
http
  .createServer((req, res) => {
    res.write("Hello Typscript World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

console.log("Server TS");
