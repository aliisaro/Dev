//Part 1: FILE SYSTEM OPERATIONS

const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading file:', err);
    } else {
    console.log('File contents:', data);
    }
});


fs.writeFile('output.txt', '', (err) => {
    if (err) {
    console.error('Error writing file:', err);
    } else {
    console.log('Data written to output.txt');
    }
    });

    //Potential security risks: 
    //Failing to handle errors appropriately may expose sensitive
    //information or allow attackers to exploit vulnerabilities.
    //It's crucial to follow best security practices, validate inputs, 
    //set appropriate permissions, and implement robust error handling. 



    //Part 3: OPERATING SYSTEM INFO

    const os = require('os');

    console.log('Hostname:', os.hostname());
    console.log('Platform:', os.platform());
    console.log('CPUs:', os.cpus());

    //Potential security risks:
    //It's good to avoid unnecessary exposure of system details, 
    //and implement appropriate access controls to limit potential risks.
    //For example revealing the OS type and version may aid attackers 
    //in tailoring their attacks to specific vulnerabilities associated 
    //with that OS.


    //Part 4

    fs.writeFile('output.txt', 'Host name: -' + os.hostname() +
                '\nPlatform: ' + os.platform() +
                '\nCPUs: ' + os.cpus(), (err) => {
        if (err) {
        console.error('Error writing file:', err);
        } else {
        console.log('Data written to output.txt');
        }
        });



    //Part 5 ASYNCHRONOUS OPERATIONS

    //Explain why the observed output may look as follows:

    //Hostname: DESKTOP-DAB97SL
    //OS Platform: win32
    //Data written to output.txt
    //File contents: This is some text

    //EXPLANATION:
    //fs.readFile() and fs.writeFile() are asynchronous functions; 
    //they don't block the execution of the rest of the code. 

    //os.platform() is a synchronous operation; 
    //it typically executes immediately.