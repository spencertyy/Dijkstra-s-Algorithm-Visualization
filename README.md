# Dijkstra's Algorithm Visualization (JavaScript + D3)

An interactive visualization of **Dijkstra's shortest-path algorithm** implemented in JavaScript with D3.js.

![Demo](Dijkstra_demo.gif)

This project demonstrates graph modeling, priority queue implementation, and step-by-step shortest path computation with animated visualization.

---

## How Dijkstra's Algorithm Works

Dijkstra's algorithm finds the **shortest path** between two nodes in a weighted graph where all edge weights are non-negative. It follows these steps:

1. Set the distance of the **start node** to `0` and all other nodes to `∞`
2. Use a **priority queue** to always process the node with the smallest known distance next
3. For each visited node, check all its neighbors — if a shorter path is found, update the neighbor's distance (**edge relaxation**)
4. Repeat until the **destination node** is reached
5. **Backtrack** through recorded predecessors to reconstruct the shortest path

**Time Complexity:** O(V²) with an array-based priority queue (as used in this project), or O((V + E) log V) with a binary min-heap.

---

## Features

### Graph Representation
- Nodes stored as coordinate objects with unique IDs (A – P, 4×4 grid)
- Edges represented as weighted connections (24 edges total)
- Undirected grid-style graph layout

### Dijkstra Implementation
- Distance table initialization
- Predecessor tracking for path reconstruction
- Custom `PriorityQueue` class (array-based, sorted insertion)
- Edge relaxation logic
- Shortest path reconstruction using `prev` map

### Visualization
- D3-based rendering of nodes (circles), edges (lines), and edge weight labels
- Animated traversal:
  - **Yellow** — node currently being visited
  - **Green** — edge being relaxed (evaluated for a shorter path)
  - **Purple** — the final shortest path

### Interactive Controls
- Select any start and end node from dropdowns
- Modify individual edge weights
- Randomize all edge weights with one click
- Re-run algorithm dynamically

---

## How to Run

No installation or server required. Simply open `index.html` in your browser:

```bash
open index.html
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [D3.js v6](https://d3js.org/) | SVG graph rendering and animation |
| Vanilla JavaScript (ES6) | Algorithm logic, priority queue, DOM interaction |
| HTML5 / CSS | Layout and controls |

---

## Team Members
- Spencer Tu
- Terry Cao
