/*
   Goal of this exercise is to learn nested callbacks.
*/

//require fs

//read file1
    //read file2
        //read file3
          //join file1, fil2 and file3 contents
          //write to file4
              // console.log('Concatenated file1.txt, file2.txt, file3.txt into file4.txt.');
              //read file4
                //write file5
                  // console.log('File4 content was copied over to file5')

var fs = require('fs');
fs.readFile('./file1.txt', 'utf-8', function(err, data1) {
    if(err) throw err;
    fs.readFile('./file2.txt', 'utf-8', function(err, data2){
      if (err) throw err;
      fs.readFile('./file3.txt', 'utf-8', function(err, data3){
        if(err) throw err;
        var allData = data1 + '\n' + data2 + '\n' + data3;
        // console.log(allData);
        fs.writeFile('file4.txt', allData, function(err){
          if (err) throw err;
          // console.log('file4 written');
          fs.readFile('./file4.txt', 'utf-8', function(err, data4){
            if(err) throw err;
            fs.writeFile('file5.txt', data4, function(err){
            if (err) throw err;
            // console.log("file 4 copied");
            })
          })
        })
      })
    })
})

