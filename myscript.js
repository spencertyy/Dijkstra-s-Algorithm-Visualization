let nodes = [
    { id: 'A', x: 50, y: 50 },
    { id: 'B', x: 150, y: 50 },
    { id: 'C', x: 250, y: 50 },
    { id: 'D', x: 350, y: 50 },
    { id: 'E', x: 50, y: 150 },
    { id: 'F', x: 150, y: 150 },
    { id: 'G', x: 250, y: 150 },
    { id: 'H', x: 350, y: 150 },
    { id: 'I', x: 50, y: 250 },
    { id: 'J', x: 150, y: 250 },
    { id: 'K', x: 250, y: 250 },
    { id: 'L', x: 350, y: 250 },
    { id: 'M', x: 50, y: 350 },
    { id: 'N', x: 150, y: 350 },
    { id: 'O', x: 250, y: 350 },
    { id: 'P', x: 350, y: 350 }
];

let edges = [
    { source: 'A', target: 'B', weight: 1 },
    { source: 'B', target: 'C', weight: 1 },
    { source: 'C', target: 'D', weight: 1 },
    { source: 'A', target: 'E', weight: 2 },
    { source: 'B', target: 'F', weight: 2 },
    { source: 'C', target: 'G', weight: 2 },
    { source: 'D', target: 'H', weight: 2 },
    { source: 'E', target: 'F', weight: 1 },
    { source: 'F', target: 'G', weight: 1 },
    { source: 'G', target: 'H', weight: 1 },
    { source: 'E', target: 'I', weight: 2 },
    { source: 'F', target: 'J', weight: 2 },
    { source: 'G', target: 'K', weight: 2 },
    { source: 'H', target: 'L', weight: 2 },
    { source: 'I', target: 'J', weight: 1 },
    { source: 'J', target: 'K', weight: 1 },
    { source: 'K', target: 'L', weight: 1 },
    { source: 'I', target: 'M', weight: 2 },
    { source: 'J', target: 'N', weight: 2 },
    { source: 'K', target: 'O', weight: 2 },
    { source: 'L', target: 'P', weight: 2 },
    { source: 'M', target: 'N', weight: 1 },
    { source: 'N', target: 'O', weight: 1 },
    { source: 'O', target: 'P', weight: 1 }
];

const createGraph = () => {
    const svg = d3.select('#graph').html('')
        .append('svg')
        .attr('width', 400)
        .attr('height', 400);

    svg.selectAll('.link')
        .data(edges)
        .enter().append('line')
        .attr('class', 'link')
        .style('stroke', '#000')
        .style('stroke-width', 4)
        .attr('x1', d => nodes.find(node => node.id === d.source).x)
        .attr('y1', d => nodes.find(node => node.id === d.source).y)
        .attr('x2', d => nodes.find(node => node.id === d.target).x)
        .attr('y2', d => nodes.find(node => node.id === d.target).y);

    svg.selectAll('.node')
        .data(nodes)
        .enter().append('circle')
        .attr('class', 'node')
        .attr('r', 10)
        .style('fill', '#fff')
        .style('stroke', '#000')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

    svg.selectAll('.node-label')
        .data(nodes)
        .enter().append('text')
        .attr('class', 'node-label')
        .attr('x', d => d.x)
        .attr('y', d => d.y + 4)
        .attr('text-anchor', 'middle')
        .style('fill', '#000')
        .style('font-size', '12px')
        .text(d => d.id);

    svg.selectAll('.link-label')
        .data(edges)
        .enter().append('text')
        .attr('class', 'link-label')
        .attr('x', d => {
            const sourceNode = nodes.find(node => node.id === d.source);
            const targetNode = nodes.find(node => node.id === d.target);
            const midpointX = (sourceNode.x + targetNode.x) / 2;
            if (sourceNode.y === targetNode.y) { // Horizontal edges
                // if (sourceNode.x < 150) return midpointX - 20; // Move left-side labels to the left
                // if (sourceNode.x > 250) return midpointX + 20; // Move right-side labels to the right
                return midpointX + 10; // Default left adjustment for horizontal edges
            }
            return midpointX;
        })
        .attr('y', d => {
            const sourceNode = nodes.find(node => node.id === d.source);
            const targetNode = nodes.find(node => node.id === d.target);
            const midpointY = (sourceNode.y + targetNode.y) / 2;
            if (sourceNode.y !== targetNode.y) { // Vertical edges
                // if (sourceNode.x < 150) return midpointY; // Move left-side labels vertically aligned
                // if (sourceNode.x > 250) return midpointY; // Move right-side labels vertically aligned
                return midpointY ; // Default vertical adjustment for vertical edges
            }
            return midpointY;
        })
        .attr('dx', d => {
            const sourceNode = nodes.find(node => node.id === d.source);
            const targetNode = nodes.find(node => node.id === d.target);
            if (sourceNode.y === targetNode.y) { // Horizontal edges
                if (sourceNode.x < 150) return -10; // No horizontal adjustment for left-side edges
                if (sourceNode.x > 250) return 10; // No horizontal adjustment for right-side edges
                return -10; // Move label to the left of the horizontal edge
            }
            return -10; // Default left adjustment for vertical edges
        })
        .attr('dy', d => {
            const sourceNode = nodes.find(node => node.id === d.source);
            const targetNode = nodes.find(node => node.id === d.target);
            if (sourceNode.y !== targetNode.y) return 0; // No vertical adjustment for vertical edges
            return -10; // Align vertically with the edge
        })
        .attr('text-anchor', 'middle')
        .style('fill', '#000')
        .style('font-size', '12px')
        .text(d => d.weight);

    updateControls();
};

const updateControls = () => {
    const startPoint = document.getElementById('startPoint');
    const endPoint = document.getElementById('endPoint');
    const edgeSelect = document.getElementById('edgeSelect');
    startPoint.innerHTML = '';
    endPoint.innerHTML = '';
    edgeSelect.innerHTML = '';

    nodes.forEach(node => {
        const option = document.createElement('option');
        option.value = node.id;
        option.text = node.id;
        startPoint.appendChild(option);
        endPoint.appendChild(option.cloneNode(true));
    });

    edges.forEach((edge, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = `${edge.source}-${edge.target}`;
        edgeSelect.appendChild(option);
    });

    endPoint.value = 'P'; // Set default value to 'P'
};

const dijkstra = (startId, endId) => {
    let distances = {};
    let prev = {};
    let pq = new PriorityQueue();

    nodes.forEach(node => {
        distances[node.id] = Infinity;
        prev[node.id] = null;
    });

    distances[startId] = 0;
    pq.enqueue(startId, 0);

    let animationQueue = [];

    while (!pq.isEmpty()) {
        let minNode = pq.dequeue();
        let currentNode = minNode.element;

        animationQueue.push(currentNode);

        if (currentNode === endId) {
            reconstructPath(prev, endId, animationQueue);
            return;
        }

        edges.filter(edge => edge.source === currentNode).forEach(edge => {
            let alt = distances[currentNode] + edge.weight;
            if (alt < distances[edge.target]) {
                distances[edge.target] = alt;
                prev[edge.target] = currentNode;
                pq.enqueue(edge.target, alt);
                animationQueue.push(edge);
            }
        });
    }
};

const reconstructPath = (prev, endId, animationQueue) => {
    let path = [];
    let currentNode = endId;

    while (currentNode) {
        path.push(currentNode);
        currentNode = prev[currentNode];
    }

    animationQueue.push(...path);

    animateAlgorithm(animationQueue, path);
};

const animateAlgorithm = (animationQueue, path) => {
    const highlightNode = (id, color) => {
        d3.select(`circle[cy="${nodes.find(node => node.id === id).y}"][cx="${nodes.find(node => node.id === id).x}"]`)
            .style('fill', color);
    };

    const highlightEdge = (source, target, color) => {
        d3.selectAll('line')
            .filter(d => (d.source === source && d.target === target) || (d.source === target && d.target === source))
            .style('stroke', color);
    };

    let delay = 0;

    animationQueue.forEach(item => {
        if (typeof item === 'string') {
            setTimeout(() => highlightNode(item, 'yellow'), delay);
        } else {
            setTimeout(() => highlightEdge(item.source, item.target, 'green'), delay);
        }
        delay += 500;
    });

    path.forEach((node, index) => {
        setTimeout(() => highlightNode(node, 'purple'), delay + index * 500);
    });
};

const randomizeWeights = () => {
    edges.forEach(edge => {
        edge.weight = Math.floor(Math.random() * 10) + 1; // Random weight between 1 and 10
    });
    createGraph();
};

class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(element, priority) {
        let added = false;
        for (let i = 0; i < this.collection.length; i++) {
            if (priority < this.collection[i].priority) {
                this.collection.splice(i, 0, { element, priority });
                added = true;
                break;
            }
        }
        if (!added) {
            this.collection.push({ element, priority });
        }
    }

    dequeue() {
        return this.collection.shift();
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}

document.getElementById('startButton').addEventListener('click', () => {
    const startPoint = document.getElementById('startPoint').value;
    const endPoint = document.getElementById('endPoint').value;
    dijkstra(startPoint, endPoint);
});

document.getElementById('updateWeightButton').addEventListener('click', () => {
    const edgeIndex = document.getElementById('edgeSelect').value;
    const newWeight = document.getElementById('edgeWeight').value;
    edges[edgeIndex].weight = parseInt(newWeight, 10);
    createGraph();
});

document.getElementById('randomizeWeightsButton').addEventListener('click', () => {
    randomizeWeights();
});

// Initial graph creation
createGraph();
