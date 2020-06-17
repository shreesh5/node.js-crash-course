const fs = require('fs')
const path = require('path')

// Create a folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if (err) throw err
    console.log('Folder created')
})
*/

// Create and write to file
// writeFile just writes to the file so it overwrites everything
/*
fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'), 
    'Hello World!', 
    (err) => {
        if (err) throw err
        console.log('File created and written to')

        // File append
        fs.appendFile(
            path.join(__dirname, '/test', 'hello.txt'), 
            '\nI love Node.js', 
            (err) => {
            if (err) throw err
            console.log('File appended to')}
        )
    }
)
*/

// Read file
/*
fs.readFile(
    path.join(__dirname, '/test', 'hello.txt'),
    'utf8',
    (err, data) => {
        if(err) throw err
        console.log(data)
    }
)
*/

// Rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    (err) => {
        if(err) throw err
        console.log('File renamed')
    }
)