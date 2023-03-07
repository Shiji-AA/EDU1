const fs =require("fs");
//const quote =" Make  everyday a little less ordinarily";
//fs.writeFile("text.txt",quote,()=>{
    //console.log("Completed writing");
// })
//console.log(document);

//example--2

//const quote2 = "Live more worry Less";

/*    for (let i = 1; i <= 10; i++) {
 fs.writeFile(`./backup/text-${i}.html`, quote2, () => {
 console.log(`Completed Writing text-${i}.html`);
     });
     }     */
      
     //example--3
    
    const [, , noofFiles] = process.argv;
    console.log(noofFiles);
    
   const quote3 = "Happy day🥳🥳";
    
    for (let i = 1; i <= noofFiles; i++) {
    fs.writeFile(`./backup/note-${i}.txt`, quote3, () => {
    console.log(`Completed Writing note-${i}.txt`);
      });
    }
