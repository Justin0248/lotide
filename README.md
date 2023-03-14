# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yonin/lotide`

**Require it:**

`const _ = require('@yonin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
*   `head,`: returns the first value of an array.
*   `tail,`: returns the last value of an array.
*   `middle,`: returns the middle value of an array (2 values if the array length is even).
*   `assertArraysEqual,`: checks if 2 arrays are equal and logs report
*   `assertEqual,`: checks if 2 values are equal
*   `assertObjectsEqual,`: checks if two objects are equal
*   `countLetters,`: returns the amount of letters in a string
*   `countOnly,`: returns the count of each element in an array
*   `eqArrays,`: checks if 2 arrays are equal and returns true or false
*   `eqObjects,`: checks if 2 objects are equal
*   `findKey,`: looks for a specified key in a object
*   `findKeyByValue,`: returns the key of a specified value
*   `letterPositions,`: returns the index of a letter in a array
*   `map,`: creates a new array adding in logs for each element
*   `takeUntil,`: takes each element in a array until a specified element and adds the taken elements into a new array
*   `without,`: takes each element array in a array except for a specified element and pushes the taken elements

