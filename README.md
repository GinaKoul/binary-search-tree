# Binary Search Tree

## merge-sort.js

Exports factory function MergeSort that is sorting the given array and removes duplicates.

## node.js

Exports factory function Node that contains data, left and right attributes.

## bst.js

Exports factory function Tree. When given an array it creates a balanced binary search tree out of it.\
It contains the following attributes and methods:

- **root:** Returns the root of the binary search tree.

- **insert(value):** Adds the given value to the tree.

- **deleteItem(value):** Removes the given value from the tree.

- **find(value):** Returns the node with the given value.

- **levelOrder(callback):** Accepts a callback function as its parameter. It traverses the tree in breadth-first level order and calls the callback on each node as it traverses, passing the whole node as an argument. If no callback function is provided, it throws an Error reporting that a callback is required.

- **preOrder(callback):** Accepts a callback function as its parameter. It traverses the tree in depth-first (DLR) order and calls the callback on each node as it traverses, passing the whole node as an argument. If no callback function is provided, it throws an Error reporting that a callback is required.

- **inOrder(callback):** Accepts a callback function as its parameter. It traverses the tree in depth-first (LDR) order and calls the callback on each node as it traverses, passing the whole node as an argument. If no callback function is provided, it throws an Error reporting that a callback is required.

- **postOrder(callback):** Accepts a callback function as its parameter. It traverses the tree in depth-first (LRD) order and calls the callback on each node as it traverses, passing the whole node as an argument. If no callback function is provided, it throws an Error reporting that a callback is required.

- **height(node):** Returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.

- **depth(node):** Returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.

- **isBalanced():** Checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.

- **rebalance()** Rebalances an unbalanced tree.

## test.js

Use the following command to run the test.js file:

```bash
npm run test
```
