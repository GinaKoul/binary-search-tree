import { Node } from "./node.js";
import { MergeSort } from "./merge-sort.js";

export const Tree = function (arr) {
  let orderedArray = MergeSort(arr);
  const buildTree = function (arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    let mid = start + Math.floor((end - start) / 2);
    let root = Node(arr[mid]);
    root.left = buildTree(arr, start, mid - 1);
    root.right = buildTree(arr, mid + 1, end);
    return root;
  };

  let root = buildTree(orderedArray);

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  const insert = function (value, tree = root) {
    if (tree === null) return;
    if (tree.data > value) {
      tree.left === null ? (tree.left = Node(value)) : insert(value, tree.left);
    } else if (tree.data < value) {
      tree.right === null
        ? (tree.right = Node(value))
        : insert(value, tree.right);
    }
  };

  const deleteItem = function (value, tree = root) {
    if (tree === null) return;
    let node;
    let branch;
    if (root.data === value) {
      node = root;
    } else {
      if (tree.data === value) {
        return tree;
      }
      if (tree.data > value) {
        node = deleteItem(value, tree.left);
        branch = "left";
      } else if (tree.data < value) {
        node = deleteItem(value, tree.right);
        branch = "right";
      }
    }
    if (node) {
      if (node.left === null && branch) {
        tree[branch] = node.right;
      } else if (node.right === null && branch) {
        tree[branch] = node.left;
      } else if (node.right.left === null) {
        node.data = node.right.data;
        node.right = node.right.right;
      } else {
        let curNode = node.right;
        let prevNode = curNode;
        while (curNode.left !== null) {
          prevNode = curNode;
          curNode = curNode.left;
        }
        node.data = curNode.data;
        if (prevNode !== curNode) prevNode.left = null;
      }
    }
    return;
  };

  const find = function (value, tree = root) {
    if (tree === null) return;
    if (tree.data === value) {
      return tree;
    }
    if (tree.data > value) {
      return find(value, tree.left);
    } else if (tree.data < value) {
      return find(value, tree.right);
    }
  };

  const levelOrder = function (callback, tree = root) {
    if (!callback) throw new Error("Callback required");
    if (tree === null) return;
    let queue = [tree];
    while (queue.length > 0) {
      let front = queue[0];
      if (front !== null) {
        callback(front);
        queue.push(front.left);
        queue.push(front.right);
      }
      queue.shift();
    }
  };

  const levelOrderRec = function (callback, queue = [root]) {
    if (!callback) throw new Error("Callback required");
    if (queue.length <= 0) return;
    let front = queue[0];
    if (front !== null) {
      callback(front);
      queue.push(front.left);
      queue.push(front.right);
    }
    queue.shift();
    levelOrderRec(callback, queue);
  };

  const preOrder = function (callback, tree = root) {
    if (!callback) throw new Error("Callback required");
    if (tree === null) return;
    callback(tree);
    preOrder(callback, tree.left);
    preOrder(callback, tree.right);
  };

  const inOrder = function (callback, tree = root) {
    if (!callback) throw new Error("Callback required");
    if (tree === null) return;
    inOrder(callback, tree.left);
    callback(tree);
    inOrder(callback, tree.right);
  };

  const postOrder = function (callback, tree = root) {
    if (!callback) throw new Error("Callback required");
    if (tree === null) return;
    inOrder(callback, tree.left);
    inOrder(callback, tree.right);
    callback(tree);
  };

  const height = function (value, tree = root, count = 0) {
    count++;
    if (tree === null) return count - 2;
    if (tree === root) {
      tree = find(value);
    }
    let countLeft = height(value, tree.left, count);
    let countRight = height(value, tree.right, count);
    return countLeft > countRight ? countLeft : countRight;
  };

  const depth = function (value, tree = root) {
    if (tree === null) return;
    if (tree.data === value) return 0;
    if (tree.data > value) {
      return 1 + depth(value, tree.left);
    } else if (tree.data < value) {
      return 1 + depth(value, tree.right);
    }
  };

  const isBalanced = function (tree = root, count = 0) {
    count++;
    if (tree === null) return count - 2;
    let countLeft = isBalanced(tree.left, count);
    let countRight = isBalanced(tree.right, count);
    if (tree === root) {
      return Math.abs(countLeft - countRight) <= 1;
    } else {
      return countLeft > countRight ? countLeft : countRight;
    }
  };

  const rebalance = function () {
    orderedArray = [];
    inOrder(function (value) {
      orderedArray.push(value.data);
    });
    root = buildTree(orderedArray);
  };

  return {
    root,
    prettyPrint,
    insert,
    deleteItem,
    find,
    levelOrder,
    levelOrderRec,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
};

// let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const tree = Tree(array);
// const root = tree.root;
// console.log(tree.root);
// tree.insert(321);
// tree.insert(320);
// tree.insert(322);
// tree.insert(323);
// tree.insert(319);
// tree.insert(310);

// tree.insert(6400);
// tree.insert(6390);
// tree.insert(6420);
// tree.insert(6370);
// tree.insert(6300);
// tree.insert(6310);
// tree.insert(6299);
// tree.insert(10);

// tree.prettyPrint();
// tree.deleteItem(6345);

// tree.prettyPrint();
// console.log(tree.find(324));
// tree.levelOrder(function (value) {
//   console.log(value.data);
// });
// tree.levelOrderRec(function (value) {
//   console.log(value.data);
// });
// tree.preOrder(function (value) {
//   console.log(value.data);
// });
// tree.inOrder(function (value) {
//   console.log(value.data);
// });
// tree.postOrder(function (value) {
//   console.log(value.data);
// });
// tree.rebalance();
// console.log(tree.depth(7));
// console.log(tree.height(1));
// console.log(tree.isBalanced());
// tree.prettyPrint();
