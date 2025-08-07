import { findPosition } from './index';


describe('find the index of the first occurrence in a string', () => {

    const testCases = [
        { 
            haystack: "sadbutsad", 
            needle: "sad", 
            expected: 0,
            description: 'should return 0 when needle: "sad" appears at the start of haystack: "sadbutsad"'
        },
        { 
            haystack: "leetcode", 
            needle: "leeto", 
            expected: -1,
            description: 'should return -1 when needle does not appear in haystack'
        },
        { 
            haystack: "hello", 
            needle: "ll", 
            expected: 2,
            description: 'should return the correct index when needle is in the middle'
        },
        { 
            haystack: "aaaaa", 
            needle: "bba", 
            expected: -1,
            description: 'should return -1 when needle is not found'
        },
        { 
            haystack: "mississippi", 
            needle: "issip", 
            expected: 4,
            description: 'should handle partial matches before complete match'
        }
    ]

    testCases.forEach(({ description, haystack, needle, expected}) => {
        test(description, () => { 
            expect(findPosition(haystack, needle)).toBe(expected)
         })
    })

})