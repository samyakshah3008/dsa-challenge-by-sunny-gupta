## Question and the approach to solve:

Link - https://leetcode.com/problems/maximum-units-on-a-truck/description/

### Question

You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.

Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:

- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
  You can take all the boxes of the first and second types, and one box of the third type.
  The total number of units will be = (1 _ 3) + (2 _ 2) + (1 \* 1) = 8.

## My approaches:

-> First approach:

1. Sort boxTypes in descending order based on unitsPerBox, so that the box types with the highest units per box come first.
2. Iterate over each type of box, adding as many boxes as possible to the truck until either we run out of truck space (availableSize) or boxes of that type.
3. For each box added, update the resultantUnits to keep track of the total units on the truck.

-> I got Time Limit Exceeded error here

While this approach works well for smaller input sizes, it has limitations in handling large values for truckSize and boxTypes. The nested loop results in a high number of iterations, causing a Time Limit Exceeded (TLE) error for large inputs. For each type of box, the inner loop runs up to numberOfBoxes times, which becomes inefficient when truckSize or numberOfBoxes are large.

-> Optimized approach:

Hence, I used - Math.min(truckSize, numberOfBoxes). This function allows us to determine the optimal number of boxes to take without exceeding the truck’s remaining capacity and also removed the need of nested for loop.

Sol link: https://leetcode.com/submissions/detail/1450292440/
