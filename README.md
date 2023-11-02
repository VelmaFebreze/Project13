# Project13

LeetCode:
The LeetCode problem was:
Write a function argumentsLength that returns the count of arguments passed to it. 

Example 1: 

Input: args = [5]
Output: 1
Explanation: 
argumentsLength(5);//1

One value was passed to the function so it should return 1.

Example 2: 

Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3");//3

Three values were passed to the function so it should return 3.

Constraints:

args is a valid JSON array 
0 <= args.length <= 100







CodeWars: 
The CodeWars problem was:
Task
Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.







Hackerrank:
The Hackerrank problem was: 
Objective

In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

Task

Given a date string, , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.

Input Format

Locked stub code in the editor reads the following input from stdin:
The first line contains an integer, , denoting the number of dates to check.
Each line  of the  subsequent lines contains a date in MM/DD/YYYY format; each date denotes some  that is passed to the function.

Constraints

It is guaranteed that the input only consists of valid dates.
Output Format

The function must return a string denoting the day of the week corresponding to the date denoted by .

Sample Input 0

2
10/11/2009
11/10/2010
Sample Output 0

Sunday
Wednesday
Explanation 0

The function is called for the following  dates:

The date 10/11/2009 was a Sunday, so we return Sunday.
The date 11/10/2010 was a Wednesday, so we return Wednesday.
