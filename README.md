# STTerminal

## Intro
If you are looking to create your own terminal-like environment with your OWN commands, then look no further.

This project focuses on being able to create your own commands and having the ability to highly customize your own commands. 

I found plenty of projects around creating a web based terminal. I have yet to find a good alternative that has a highly decoupled feature to make your own commands easily.

## Terminal Features
 * TAB autocompletion
 * History via arrow keys
 * Colorization (TODO)

## Core Tech

 * Gulp
 	* Task-runner
 * Browserify
 	* Concatination and minification of js files
 	* Why not Requirejs? I found Browserify a ton easier to use than Requirejs
 * PegJS
 	* Parser generator
 	* Why not Jison? I found PEGJS a ton easier to use than Jison

## Concepts
The project is pretty much divided into three pieces. 

### Terminal
Piece one is the actual core terminal whose main feature-set is to delegate the packages and the other is the package(s) itself. The idea is that you load packages and the terminal consumes them. A package is analogous to any command you find living in your terminal (ls, cd, rm, git, node, npm, brew, ...). As a Gulp task, this is terminal.js

### Package Router
Piece two is the bridge between the actual terminal and packages is the package router. As a Gulp task, this is pkgRouter.js

### Packages
The last piece, piece three are the actual packages which you can have as many as you desire. In order for the packages to be able to be understood, a parser is a must. Each package is given a parser which makes it highly decoupled from the whole project and makes it extremely easily to swap in and out packages. In order to add more tasks, I would refer to 'gulpfile.js' and copy the structure as which the math package (pkg_math.js) is created.

Therefore upon the Gulp task completion, there should be at a minimum three files, the terminal itself, the package router, and the package.

## Getting Started
1. 'npm install -g gulp'
2. 'npm install' 

# Creating a new package
1. 'npm install -g pegjs'
2. Create .pegjs definition (look at /src/packages/stats/peg.pegjs)
3. 'pegjs FILENAME.pegjs lexer.js' (this will generate lexer.js which will generate the necessary parser from grammar)
4. Add a gulp task (refer to how the stats package is generated)
