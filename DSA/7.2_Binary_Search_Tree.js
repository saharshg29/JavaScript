// Setting up binary search tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  cosntructor() {
    this.root = null;
  }

  insert(value) {
    // BST INSERT
    // We can use both iterative as well as recursive approach
    // Create a new node that need to be inserted
    // start at the root
    // check if there is a root, if not then root becomes the node
    // If there is a root then,
    // Check if value of this node is greater then root?
    // If it is greater
    // Check to see if there is node at the right side
    // If there is then repeat the same process
    // if not then this node becomes the new right node
    // If not greater than root
    // Check to see if there is a node at left side
    // If there is then repeat the same process
    // If not then tihs node becomes the new left node

    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      // if (currentNode === null) {
      //   break;
      // }

      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = node;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value) {
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    let doesExist = false;
    while (currentNode && !doesExist) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
  }

  bfs() {
    let queue = [];
    let visited = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  preorder() {
    //root -> left -> right
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }

  inorder() {
    // left -> root -> right
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
      
     
    }
    traverse(current);
    return data;
  }

  postorder() {
    // left -> right -> root
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
     
    }
    traverse(current);
    return data;
  }
}

let bst = new BST();
// bst.root = new Node(20);
// bst.root.left = new Node(10);
// bst.root.left.left = new Node(9)
// bst.root.left.left.left = new Node(8)
// bst.root.right = new Node(25);
bst.root = new Node(50)
bst.insert(45);
bst.insert(55);
bst.insert(35);
bst.insert(48);
bst.insert(65);
// console.log(bst.insert(10));
// console.log(bst.search(45));
console.log(bst);
console.log(bst.bfs());

console.log(bst.preorder());
console.log(bst.postorder());
console.log(bst.inorder());


// DFS vs BFS

// If width is much larger than BFS will take more space
// If height is much large than DFS will take more space

// If moer height then use BFS
// If more width then use DFS