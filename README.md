# Dijkstra's Algorithm Visualization (JavaScript + D3)
<img width="1130" height="1260" alt="image" src="https://github.com/user-attachments/assets/a56714c5-6003-4c7f-b2d0-ff62206f58de" />
An interactive visualization of Dijkstra’s shortest path algorithm implemented in JavaScript with D3.js.

This project demonstrates graph modeling, priority queue implementation, and step-by-step shortest path computation with animated visualization.

---

## Overview

This application:

- Models a weighted graph using node and edge data structures
- Implements Dijkstra’s shortest path algorithm from scratch
- Uses a custom priority queue for distance ordering
- Animates node visits and edge relaxations
- Allows dynamic edge weight updates
- Supports random weight generation

Users can select a start node and end node to compute and visualize the shortest path.

---

## Features

### Graph Representation
- Nodes stored as coordinate objects with unique IDs
- Edges represented as weighted connections
- Undirected grid-style graph layout

### Dijkstra Implementation
- Distance table initialization
- Predecessor tracking for path reconstruction
- Custom PriorityQueue class
- Edge relaxation logic
- Shortest path reconstruction using `prev` map

### Visualization
- D3-based rendering of:
  - Nodes (circles)
  - Edges (lines)
  - Edge weights (labels)
- Animated traversal:
  - Visited nodes highlighted in yellow
  - Relaxed edges highlighted in green
  - Final shortest path highlighted in purple

### Interactive Controls
- Select start and end nodes
- Modify individual edge weights
- Randomize all edge weights
- Re-run algorithm dynamically

---

## How It Works

1. Graph is rendered using D3.
2. User selects start and end nodes.
3. Dijkstra’s algorithm computes shortest distances.
4. Nodes and edges are queued for animation.
5. Final path is reconstructed and highlighted.

---

## Example Usage

- Select Start: A  
- Select End: P  
- Click "Run Dijkstra"
- Observe traversal and final path highlight.

You can also:
- Update edge weights manually
- Randomize weights and re-run the algorithm

---

## Technical Highlights

- Custom priority queue implementation
- Graph traversal and path reconstruction
- State tracking using distance and predecessor maps
- DOM manipulation and SVG rendering with D3.js
- Animated algorithm visualization using timed transitions

---

## Tech Stack

- JavaScript (ES6)
- D3.js
- HTML5 / SVG

---

## Skills Demonstrated

- Graph data structures
- Shortest path algorithms
- Priority queue implementation
- Algorithm visualization
- Interactive UI controls

---

## Team Members
- Spencer Tu
- Terry Cao
