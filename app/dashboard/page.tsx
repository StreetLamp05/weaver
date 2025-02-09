"use client";

import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { Inter } from 'next/font/google';

const inter = Inter({ 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
    subsets: ["latin"] 
});

const width = 800, height = 600;

interface Node extends d3.SimulationNodeDatum {
    id: string;
    name: string;
}

interface Link extends d3.SimulationLinkDatum<Node> {
    source: string | Node;
    target: string | Node;
}

const DashboardPage: React.FC = () => {
    useEffect(() => {
        const svg = d3.select<SVGSVGElement, unknown>("#graph")
            .attr("width", width)
            .attr("height", height);

        const simulation = d3.forceSimulation<Node>()
            .force("link", d3.forceLink<Node, Link>().id((d) => d.id).distance(70))
            .force("charge", d3.forceManyBody().strength(-100))
            .force("center", d3.forceCenter(width / 2, height / 2));

        let graphData = {
            nodes: [
                { id: 'user', name: 'User Profile' },
                { id: 'song1', name: 'Song 1' },
                { id: 'song2', name: 'Song 2' },
                { id: 'song3', name: 'Song 3' },
                { id: 'song4', name: 'Song 4' },
                { id: 'song5', name: 'Song 5' }
            ] as Node[],
            links: [
                { source: 'user', target: 'song1' },
                { source: 'user', target: 'song2' },
                { source: 'user', target: 'song3' },
                { source: 'user', target: 'song4' },
                { source: 'user', target: 'song5' }
            ] as Link[]
        };

        function updateGraph() {
            const link = svg.selectAll<SVGLineElement, Link>(".link")
                .data(graphData.links)
                .join("line")
                .attr("class", "link");

            const node = svg.selectAll<SVGCircleElement, Node>(".node")
                .data(graphData.nodes)
                .join("circle")
                .attr("class", "node")
                .attr("r", 10)
                .attr("fill", "#3B3D49")
                .call(d3.drag<SVGCircleElement, Node>()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended)
                );

            node.append("title").text((d) => d.name);

            const labels = svg.selectAll<SVGTextElement, Node>(".label")
                .data(graphData.nodes)
                .join("text")
                .attr("class", "label")
                .attr("dx", 0)
                .attr("dy", 20)
                .attr("text-anchor", "middle")
                .text((d) => d.name)
                .style("font-family", "Inter, sans-serif"); // Apply Inter font

            simulation.nodes(graphData.nodes).on("tick", ticked);
            simulation.force<d3.ForceLink<Node, Link>>("link")!.links(graphData.links);
            simulation.alpha(1).restart();
        }

        function ticked() {
            svg.selectAll<SVGLineElement, Link>(".link")
                .attr("x1", d => (d.source as Node).x!)
                .attr("y1", d => (d.source as Node).y!)
                .attr("x2", d => (d.target as Node).x!)
                .attr("y2", d => (d.target as Node).y!);

            svg.selectAll<SVGCircleElement, Node>(".node")
                .attr("cx", d => d.x!)
                .attr("cy", d => d.y!);

            svg.selectAll<SVGTextElement, Node>(".label")
                .attr("x", d => d.x!)
                .attr("y", d => d.y! + 20);
        }

        function dragstarted(event: any, d: Node) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event: any, d: Node) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event: any, d: Node) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        updateGraph();
    }, []);

    return (
        <div className={inter.className}>
            <svg id="graph"></svg>
        </div>
    );
};

export default DashboardPage;
