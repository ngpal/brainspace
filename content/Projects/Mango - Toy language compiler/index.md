---
date: 2025-09-04
title: Mango
tags:
  - mango
publish: "true"
---
# The Idea
I have wanted to make a compiler for the longest time. Just the idea of making my own programming language, that can translate down into machine code and run straight on the machine is just so exciting to me. So here I'm going to finally build my own compiler (of sorts)!

I already have some experience building parsers from scratch from an interpreter for a toy language I wrote in python, way back in highschool, and a bunch of failed attempts at writing this compiler, which I eventually hit with a frustrated `rm -rf`. So recently I decided to just lock in and get started on the project. And I actually did get quite far! I was able to build a parser, compiler and byte-code interpreter that can handle `int`s and `bool`s, compare them, assign and access variables. I'll delve into more details in [[Projects/Mango - Toy language compiler/0. A Long Introduction|Log 0]], where I plan on explaining the basics of lexing, parsing and compiling, the concept of bytecode interpretters and the current state of the project

This project is mostly just to serve as a fun learning tool and as a means to quench my thirst for building a compiler from scratch. I do not expect anyone to seriously use this programming language more than to just tinker around with an interesting toy. Hence, I won't be going hardcore on the compiler optimizations and VM implementation, but I'm gonna go as low level and "from scratch" as I possibly can in the Rust language.

# My Goals
- [ ] Structure out a proper grammar for this toy language
- [ ] Match the parser with the defined grammar
- [ ] Compile to custom "fake" assembly code that will run on my VM/byte-code interpretter
- [ ] Compile to actual binary (prefferably x86 or Arm64)
- [ ] Gloat

## Side quests I might reasonably find myself on
- Compiler optimizations
- Build the VM out into absolutely unnecessary detail
- Maybe even write a tiny OS for the tiny VM????

So hop on, let's get this started without any (more) procrastination.
