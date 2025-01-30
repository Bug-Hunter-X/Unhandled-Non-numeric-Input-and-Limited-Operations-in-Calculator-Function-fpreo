# JavaScript Calculator Function Bug

This repository demonstrates a bug in a simple JavaScript calculator function and its solution.

## Bug Description

The `calculate` function handles basic arithmetic operations (+, -, *, /). However, it doesn't handle non-numeric input correctly and only supports a limited set of operations.  Dividing by zero is handled with an error, but other issues remain.

## Bug

The `bug.js` file contains the buggy `calculate` function.  Running this code will show the basic functionality but will also highlight the lack of robust error handling.

## Solution

The `bugSolution.js` file provides an improved version of the `calculate` function that addresses these issues.  The solution includes:

1.  **Input Validation:** Checks if inputs `a` and `b` are numbers.
2.  **Extended Operations:**  Supports additional operations as needed. 
3.  **Comprehensive Error Handling:** Handles various scenarios, such as invalid input types and operations. 

This example demonstrates the importance of robust error handling and input validation in JavaScript functions.