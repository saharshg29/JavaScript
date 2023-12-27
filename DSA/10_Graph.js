class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(name) {
    if (!this.list[name]) {
      this.list[name] = [];
    }
  }

  addEdge(vA, vB) {
    this.list[vA].push(vB);
    this.list[vB].push(vA);
  }

  removeEdge(vA, vB) {
    this.list[vA] = this.list[vA].filter((data) => data !== vB);
    this.list[vB] = this.list[vB].filter((data) => data !== vA);
  }

  removeVertex(vertex) {
    while (this.list[vertex].length) {
      const adjacencyVertexIndex = this.list[vertex].pop();
      this.removeEdge(vertex, adjacencyVertexIndex);
    }

    delete this.list[vertex];
  }

  dfs(vertex) {
    const result = [];
    const visitedNode = {};
    const adjacencyList = this.list

    function traverseVertex(vertex) {
      if (!vertex) return null;
      visitedNode[vertex] = true;
      result.push(vertex);
      // console.log(adjacencyList)
      adjacencyList[vertex].forEach(data => {
        if (!visitedNode[data]) {
            return traverseVertex(data)
        }
      })
    }
    traverseVertex(vertex)

    return result
  }

  dfsIteratively(vertex) {
    const result = []
    const visitedNode = {}
    const stack = [vertex]
    let currentVertex
    visitedNode[vertex] = true
    while(stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)
      this.list[currentVertex].forEach(data => {
        if (!visitedNode[data]) {
          visitedNode[data] = true
          stack.push(data)
        }
      })
    }
    return result
  }

  bfs(vertex) {
    const queue = [vertex]
    let result = []
    const visitedNode = {}
    let currentVertex;
    visitedNode[vertex] = true
    while(queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)
      this.list[currentVertex].forEach(data => {
        if (!visitedNode[data]) {
          visitedNode[data] = true
          queue.push(data)
        }
      })
    }
    return result
  }
}

const g = new Graph();

g.addVertex("delhi");
g.addVertex("bombay");
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("vadodra");
g.addEdge("delhi", "bombay");
g.addEdge("delhi", "A");
g.addEdge("delhi", "B");
g.addEdge("vadodra", "C");
g.addEdge("vadodra", "bombay");
g.addEdge("vadodra", "delhi")
// g.removeEdge("bombay", "delhi");

// console.log(g.list);

// g.removeVertex("bombay");

console.log(g.list);

console.log(g.dfs("vadodra"));
console.log(g.bfs("vadodra"));
console.log(g.dfsIteratively("vadodra"));
