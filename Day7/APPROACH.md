Day 7 Question:

https://leetcode.com/problems/decode-string/description/

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 10^5.

My Solution:

https://leetcode.com/submissions/detail/1451283852/

My Approach:

Initially I solved the question without the use of stacks but it was only working for a few cases. Nested encoding and more than single digit k - repeat count cases were not handled. To fix this and handle this case, I used stack implementation approach.

But before that, writing the possible edge cases in given string:

1. Single-Level Encoding: Input like "3[abc]" should return "abcabcabc".
2. Nested Encoding: Inputs like "3[a2[c]]" should correctly handle inner and outer encodings.
3. Multi-Digit Counts: Inputs like "10[a]" should correctly decode to "aaaaaaaaaa".
4. No Encoding: Input without brackets should return as-is, e.g., "abc".
5. Mixed Content: Cases like "2[abc]ef3[cd]" should handle both encoded and plain text parts correctly.

Now moving to my approach:

- Maintain two stacks, one for countStack, one for result stack. Now traverse the given string character by character.

While traversing, there will be a few cases:

1. When encountering a digit, build the full number for k (as k could be multiple digits, e.g., 10[abc]).
2. On [, push the current decodedString and k to the stacks, then reset decodedString for the new segment inside the brackets.
3. On ], pop the most recent count and previous decodedString, repeat the current decodedString by count times, and concatenate it with the string from resultStack.
4. Otherwise (a letter): Append to decodedString.

---

Example walkthrough - Dry run of "3[a2[c]]":

---

1. Traverse the string character by character:

s[0] = 3 → Encounter Digit:
k = 3
s[1] = [ → Encounter [:
Push the current decodedString which is initially empty and k - (3) to stacks.
Reset decodedString as we enter into.
Stacks:
countStack = [3]
resultStack = [""]

2. Process Inner Segment a2[c]:

s[2] = a → Regular Character:
Add a to decodedString, so decodedString = "a".
s[3] = 2 → Encounter Digit:
k = 2 (the repeat count for the nested string).
s[4] = [ → Encounter [:
Push the current decodedString ("a") and k (2) to stacks.
Reset decodedString for the substring inside the inner brackets.
Stacks:
countStack = [3, 2]
resultStack = ["", "a"]

3. Process Innermost Segment c:

s[5] = c → Regular Character:
Add c to decodedString, so decodedString = "c".
s[6] = ] → Encounter ]:
Pop k = 2 and previousString = "a" from stacks.
Repeat decodedString ("c") k (2) times, resulting in "cc".
Concatenate this with previousString ("a"), updating decodedString = "acc".
Stacks:
countStack = [3]
resultStack = [""]

4. End of Outer Segment:

s[7] = ] → Encounter ]:
Pop k = 3 and previousString = "" from stacks.
Repeat decodedString ("acc") k (3) times, resulting in "accaccacc".
Since there are no more characters, this becomes the final decoded string.
