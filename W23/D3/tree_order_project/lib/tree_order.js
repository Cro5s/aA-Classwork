function inOrderArray(root) {
	// console.log("root", root);
	let results = [];
	if (!root) return results;
	
	// console.log("Root Value:",root.val);
	if (root.left) {
		// console.log("Root in left:",root.val);
		// go into left node and check left node's left and right maybe recursivly?
		// results.concat(inOrderArray(root.left));
		// console.log("returnVal:", returnVal); // [D]
		results = results.concat(inOrderArray(root.left));
  }
	
	// console.log("Root before right:",root.val);
	if (!results.includes(root.val)) {
		results = results.concat(root.val); // results = [D, B]
	}

	if (root.right) {	
		// console.log("Root in right:",root.val);
		//go into rigth node and check right node's left and right maybe recursivly?
		results = results.concat(inOrderArray(root.right)); // [D, B. E]
	}

	// console.log("Results after left and right:", results);

	return results;
}

function postOrderArray(root) {

	let results = []; 
	if (!root) return results; 

	
	if (root.left) {
		results = results.concat(postOrderArray(root.left)); 
	}
	
	if (root.right) {
		results = results.concat(postOrderArray(root.right));
	}
	if (!results.includes(root.val)) {
		results = results.concat(root.val);
	}

	return results;
}


module.exports = {
	inOrderArray,
	postOrderArray
};

// Depth First Search
// A -> Left: B -> B's Left: D -> null
// A -> Left: B -> B's Right: E -> null
// A -> Right: C -> C's Left: null
// A -> Right: C -> C's Right: F -> null

/* root 
TreeNode {
  val: 'a',
  left: TreeNode {
		val: 'b',
		left: TreeNode { val: 'd', left: null, right: null },
		right: TreeNode { val: 'e', left: null, right: null } 
	},
	right: TreeNode {
		val: 'c',
		left: null,
		right: TreeNode { val: 'f', left: null, right: null } 
	} 
} */