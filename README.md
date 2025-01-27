# MongoDB $inc Operator Error

This repository demonstrates an uncommon error related to the `$inc` operator in MongoDB update queries.  Specifically, it showcases the issue of passing a string value to `$inc` instead of a number.

The `bug.js` file contains the erroneous code, and `bugSolution.js` provides the corrected version.

## Problem

The `$inc` operator is designed to increment a numeric field by a specified value.  If a string is supplied, MongoDB will not perform the expected numerical addition. The behavior might appear unpredictable based on the specific MongoDB version and the field data type.

## Solution

Ensure that the value provided to `$inc` is always a number.  Type checking before executing the update is a good practice.
