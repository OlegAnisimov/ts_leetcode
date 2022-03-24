/*
Write a function to find the longest
common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lower-case English letters.
*/
/*
  create array with chars of first item of input array
  create variable, that will be pushed by chars of common prefix
  and check for every item
* 1 get first char of first item in input array
* 2 start cycle
*   compare first char of first item with every item`s first char
*   if false => '' it means that there is no common prefix
*   if true
* */
export module FindLongestPrefix {
    export function findLongestPrefix(array: string[]): string {
        const createArrayOfFirstItemChars = (array: string[]): string[] => array[0].split('')
        const arrayOfFirstItemChars = createArrayOfFirstItemChars(array)
        const iteration = (
            array: string[],
            iterationIndex: number = 0,
        ): boolean => {
            return array.every((item) => item.charAt(iterationIndex) === arrayOfFirstItemChars[iterationIndex])
        }

        if (iteration(array, 0) === false) {
            console.log("i am array where are no string with common prefix")
            return 'i am array where are no string with common prefix'
        } else if (iteration(array, 0)) {
            let resultArray: string[]  = [arrayOfFirstItemChars[0]]
            for (let i: number = 1; i < array.length; i++) {
                if (array.every((item) => item.charAt(i) === arrayOfFirstItemChars[i])) {
                    resultArray.push(arrayOfFirstItemChars[i])
                }
            }
            console.log('i am common longest prefix -', resultArray.join(''))
            return 'i am common longest prefix'
        }
    }
}



