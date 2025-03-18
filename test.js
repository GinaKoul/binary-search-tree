import { Tree } from "./bst.js";
const Test = function () {
  function getRandomIntMax(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomIntMin(min) {
    const minCeiled = Math.ceil(min);
    return Math.floor(Math.random() * minCeiled + minCeiled);
  }

  function createRandomArray(max) {
    let array = [];
    for (let i = 0; i < max; i++) array.push(getRandomIntMax(100));
    return array;
  }

  function printAllOrders(tree) {
    // Log all elements in level order
    console.log("Level order:");
    tree.levelOrder(function (value) {
      console.log(value.data);
    });

    // Log all elements in preOrder
    console.log("Pre order:");
    tree.preOrder(function (value) {
      console.log(value.data);
    });

    // Log all elements in order
    console.log("In order:");
    tree.inOrder(function (value) {
      console.log(value.data);
    });

    // Log all elements in postOrder
    console.log("Post order:");
    tree.postOrder(function (value) {
      console.log(value.data);
    });
  }

  function unbalanceTree(tree) {
    tree.insert(getRandomIntMin(101));
    tree.insert(getRandomIntMin(101));
    tree.insert(getRandomIntMin(101));
    tree.insert(getRandomIntMin(101));
    tree.insert(getRandomIntMin(101));
    tree.insert(getRandomIntMin(101));
  }

  // Create a tree using an array of random numbers less than 100
  const tree = Tree(createRandomArray(16));

  // Check if tree is balanced (should return true)
  console.log("Tree is balanced:");
  console.log(tree.isBalanced());

  printAllOrders(tree);

  // Unbalance the tree
  unbalanceTree(tree);

  // Rebalance tree
  tree.rebalance();

  // Check if tree is balanced (should return true)
  console.log("Tree is balanced:");
  console.log(tree.isBalanced());

  printAllOrders(tree);
};

Test();
