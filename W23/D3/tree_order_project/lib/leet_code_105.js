// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
preorder = [-1]
inorder = [-1]
// preorder = [3, 9, 20, null, null, 15, null]
// preorder = [3, 9, 20, null, null, 15]

function buildTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null; 
  if (preorder.length === 1 || inorder.length === 1) return new TreeNode(preorder[0]); 
  let newTree = new TreeNode(preorder[0]);
  left = new TreeNode(preorder[1]);
  newTree.left = left;
  if (preorder.length === 2) return newTree;
  right = new TreeNode(preorder[2]);
  newTree.right = right;

  if (preorder.length === 3) return newTree;

  function helper(val, child) {
    let addNull = false;
    if (child.length < 2) {
      addNull = true;
    }

    let root = new TreeNode(val);
    if (!addNull) {
      root.left = new TreeNode(child[0]);
      root.right = new TreeNode(child[1]);
    }

    return root;
    
  }

  let newpreorder = preorder.slice();
  let newInorder = inorder.slice();
  let rootindex = inorder.indexOf(newTree.val);
  
  if (rootindex === 1) {
    let nodeIdx = preorder.indexOf(right.val) + 1;
    let children = newpreorder.slice(nodeIdx, nodeIdx + 2);
    newTree.right = helper(right.val, children);
  } else {
    let leftNodeIdx = inorder.indexOf(newTree.val);
    let leftChildren = newInorder.slice(0, leftNodeIdx - 1);
    newTree.left = helper(left.val, children);
    
    let rightNodeIdx = preorder.indexOf(right.val) + 1;
    let rightIndex = rightNodeIdx + leftChildren.length + 1;
    let rightChildren = newpreorder.slice(rightIndex, rightIndex + 2);
    newTree.right = helper(right.val, rightChildren);
  }
  
  return newTree;
}

console.log(buildTree(preorder, inorder));

// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// result: [3, 9, 20, null, null, 15, 7]

// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]
console.log("----------------");
function buildTree1(preorder, inorder) {
  function helper(pOrder1, pOrder2, inOrder1, inOrder2) {
    //pOrder1 = 1 pOrder2 = 1 inOrder1 = 0 inOrder2 = 0
    if (pOrder1 > pOrder2 || inOrder1 > inOrder2) return null; // sanity check

    let value = preorder[pOrder1], // get the root value -> 9
      index = inorder.indexOf(value), // get inorder position -> 0
      nLeft = index - inOrder1, // count nodes in left subtree 0 - 0 = 0
      root = new TreeNode(value); // build the root node -> null

    // build the left and right subtrees recursively
    root.left = helper(pOrder1 + 1, pOrder1 + nLeft, inOrder1, index - 1);
    //9.left | 1 + 1 = 2, 1 + 0 = 1, 0, 0 helper(1, 1, 0, 0)
    root.right = helper(pOrder1 + nLeft + 1, pOrder2, index + 1, inOrder2);
    //9.right | O + 1 + 1 = 2, 4, 1 + 1 = 2, 4 helper(2, 4, 2, 4)

    return root; // 
  }
  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
console.log(buildTree1(preorder, inorder));
// result: [3, 9, 20, null, null, 15, 7]