---
date: 2024-12-19
title: Glide
tags:
  - glide
publish: "true"
---
## The Idea 💡  
The inspiration for this project came from a simple yet powerful goal: to make file sharing easy, efficient, and reliable. While tools like cloud storage services or USB drives dominate this space, I wanted to explore something more personal and technical—a **command-line tool** for file sharing. Why command-line? Well, I suck at UI.

Initially, I envisioned a **peer-to-peer (P2P)** file-sharing system, but as I delved deeper into the complexities of networking (like NAT traversal and decentralized discovery), I realized how ambitious such a project would be, especially for someone still learning the intricacies of networking. So, the plan has evolved into building a solid foundation, starting with a **file-sharing server that runs on a local network**. Over time, I plan to expand its capabilities, eventually incorporating P2P features and more advanced networking functionality.  

In all honesty, I'm writing this introduction AFTER finishing [[4. An Underwhelming Day|Log 3.5]], so there is a lot of ideas and planning that do not reflect well in those logs lol. But here we are!  
## The Motivation 🚀  
It all started when I wanted to share a couple of files to my roommate and the internet was down. We we're sitting in our room, connected to the same network, why couldn't we just share files over the network, regardless of internet access?

I’ve always been fascinated by networking and low-level systems programming. This project gives me an opportunity to explore concepts like:  
-  **File chunking** for reliable transfers.  
-  **Progressive feature additions**, from simple transfers to encryption, compression, and beyond.  
- Expanding from a local network server to a full-fledged P2P system, tackling challenges like NAT traversal and discovery protocols.  

This project will also improve my skills with **Rust**, a language I love for its performance, safety guarantees, and suitability for systems programming.  
## The Goals 🎯  
Here’s what I aim to achieve:  
1. **Version 1**:  
	- A file-sharing server that runs on a local network.  
	- Basic metadata exchange (file name, size).  
	- File chunking and reliable transfer.  
	- Support for multiple clients.  
2. **Version 2**:  
	- Expanding beyond the local network with P2P communication.  
	- Peer discovery and direct file sharing.  
	- NAT traversal experiments.  
	- Enhanced CLI usability for real-world scenarios.  
3. **Future Scope**:  
	- Encryption for secure transfers.  
	- Compression for faster transfers.  
	- Multi-platform support, making it usable anywhere.  
## The Name 🎨  
After some brainstorming, I’ve decided to name the project **“Glide”**—a minimalist, abstract, and CLI-friendly name that’s easy to type and remember.  
## Why This Matters 🌍  
In a world where most file-sharing solutions are tightly integrated with large platforms, a lightweight and transparent tool like Glide could empower developers, enthusiasts, and even casual users who appreciate simplicity and control over their data.  

Beyond practicality, Glide is also my playground—a project to experiment, learn, and grow as a developer.  
## Join Me on This Journey 🛤️  
This is just the beginning. I’ll be documenting my progress with detailed logs, including design decisions, challenges, and breakthroughs. Stay tuned as Glide evolves from a simple local network file-sharing server into a robust, feature-rich system!  

Feel free to share ideas, suggestions, or tips. Let’s build something cool together!  