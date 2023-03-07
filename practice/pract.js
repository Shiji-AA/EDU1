var fs = require("fs");
var quote = "Make everyday a little less ordinarily";
fs.writeFile("test-1.txt", quote, () => {
    console.log("Completed Writing");
});

var fs = require("fs");
var quote = "live more worry less";
