function twoSum(nums,target){
    let numsWithIndices = nums.map((num, index)=>{return [num, index]})
    numsWithIndices.sort((a,b) => a[0] - b[0])
    console.log("===================",numsWithIndices)
    let left = 0, right= numsWithIndices.length-1
    while(left!=right){
        if(numsWithIndices[left][0] + numsWithIndices[right][0] == target){
            return [numsWithIndices[left][1], numsWithIndices[right][1]];
        }
        else if(numsWithIndices[left][0] + numsWithIndices[right][0]  > target){
            right--
        }
        else if(numsWithIndices[left][0] + numsWithIndices[right][0]  < target){
            left++
        }
    }
    return [];
}

console.log(twoSum([3,2,4],6))



//create a calculator in which there is add function and subtract function \

// Import the Express.js library
const express = require('express');

// Create a new Express.js app
const app = express();

// Set the port number for the app to listen on
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Import routes from separate files
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Use the routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Start the app and listen on the specified port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});