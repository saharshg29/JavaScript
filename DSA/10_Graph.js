class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(name) {
        if (!this.list[name]) {
            this.list[name] = []
        }
    }

    addEdge(vA, vB) {
        this.list[vA].push(vB)
        this.list[vB].push(vA)
    }

    removeEdge(vA, vB) {
        this.list[vA] = this.list[vA].filter(data => data !== vB)
        this.list[vB] = this.list[vB].filter(data => data !== vA)
    }

    removeVertex(vertex) {
        while(this.list[vertex].length) {
            const adjacencyVertexIndex = this.list[vertex].pop()
            this.removeEdge(vertex, adjacencyVertexIndex)
        }

        delete this.list[vertex]
    }
}

const g = new Graph()

g.addVertex("delhi")
g.addVertex("bombay")
g.addEdge("delhi", "bombay")
g.removeEdge("bombay", "delhi")

console.log(g.list);

g.removeVertex("bombay")

console.log(g.list);