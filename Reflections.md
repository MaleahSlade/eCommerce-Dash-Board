Why is it important to handle errors for each individual API call rather than just at the end of the promise chain? This will reduce the errors we throw and better maintain the page functionality.  
How does using custom error classes improve debugging and error identification? Custom error classes will show us exactly in the promise chain where errors are happening. 
When might a retry mechanism be more effective than an immediate failure response? Use the retry mechanism if the error is temporary and in the process of being resolved. 
