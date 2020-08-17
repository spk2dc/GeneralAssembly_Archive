class Graph {
    constructor() {
        // "nodes" is an adjacency list, mapping nodes to their neighbors.
        this.nodes = {};
    }

    // Add a node to the graph.
    addNode(nodeName) {
        this.nodes[nodeName] = [];
    }

    // Add an edge from one node to another.
    addEdge(nodeName, neighborName) {
        this.nodes[nodeName].push(neighborName);
    }

    // Returns whether "endNode" can be reached from "startNode".
    search(startNode, endNode) {
        // Keep track of the nodes we've visited on our search.
        const visited = {};
        // Make a list of nodes to visit next.
        // We'll use an array for simplicity here, but if you're using this
        // like a queue, you probably want to use a linked list here.
        const toVisit = [startNode];
        // While there are nodes to search, keep searching.
        while (toVisit.length > 0) {
            // Take node out of toVisit.
            // Treat toVisit like a queue, so that we'll do a breadth-first search.
            const node = toVisit.shift();
            // To do a depth-first search, treat to toVisit like a stack:
            // const node = toVisit.pop();
            // If node is already visited, skip it
            if (visited[node]) {
                continue;
            }
            // If node is the one we're looking for, return true
            if (node === endNode) {
                return true;
            }
            // Mark node as visited
            visited[node] = true;
            // Add all the node's neighbors to toVisit
            const neighbors = this.nodes[node];
            for (let i = 0; i < neighbors.length; i++) {
                toVisit.push(neighbors[i]);
            }
        }
        // If we never found the node we're looking for, return false
        return false;
    }
}

let network = new Graph();
network.addNode('A');
network.addNode('B');
network.addNode('C');
network.addNode('D');
network.addEdge('A', 'B');
network.addEdge('A', 'C');
network.addEdge('B', 'A');
network.addEdge('B', 'C');
network.addEdge('B', 'D');
network.addEdge('C', 'A');
// console.log(network.nodes);
console.log(network.search('A', 'D'));
console.log(network.search('D', 'B'));
