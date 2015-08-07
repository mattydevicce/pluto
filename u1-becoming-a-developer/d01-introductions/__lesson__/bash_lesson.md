# INTRO _(10m)_
- **Background**
> - Before the age of personal computers (PC - Apple and Microsoft computers) people had to explicitly talk to the computer to make it do things.
> - What do I mean talk to a computer (Show command line)
> - This more or less only allows developers to use the computer. Then companies like Apple and MS started building a User Interfaces(UI) layer, which hides the command lines underneath, so everyone could use it.

- **What are we going to learn and why is it important?**
> - As developers, the GUI is limiting in terms of what we could do and how efficiently.
> - Today we are going to learn a way to communicate with computers - Command Line.

- **How will the learning occur?**
> - We'll learn Command Line by first learning a few commands that are relevant to us.
> - The use these commands in a Star Wars example - you'll like it.

# OBJECTIVES
1. Diagram file system structure
2. Be able to tell a computer to take us to a certain of the file system using Absolute and Relative paths
3. Create, move, and delete files and directories through command line.

# HOW
- We will go through a short introduction on what the CLI is.
- We will interact with the CLI by inputing commands.
- We will create, delete, move, and rename a few files and directories through the CLI.

# CLI vs GUI _(15m)_
## I do
Just about everything you see on your computer right now is a GUI. If there wasn't a GUI everything you would see would be a black page with a bunch of text.
> **Show image of command line computer**

## We do
Some of you might be wondering why might we want to go back to using command line.
> - Ask class to create file on the Desktop called `myFile.txt`
> - **Open timer to track duration of tasks**
> - Ask students to create a file and move it into the Documents folder
> - Do same example using command line to demonstrate how much more quickly it could be done through command line

## You do _(10m)_
Ask student to copy and paste command into terminal
> - Open up Terminal on your Mac
> - Type `cd ~/Desktop`
> - Type `mv myFile.txt ~/Documents/myFile.txt`

## I do _(30m)_
Introduce BASH commands

| BASH Command     | Description     |
| :------------- | :------------- |
| `pwd` | Print Working Directory |
| `ls` | List files and folders in current directory|
| `cd [path]` | Change Directory |
| `mkdir [directory]` | Create directory(folder) |
| `touch [path/file_name].[extension]` | Create new file |
| `rm [path/file]` | Remove file |
| `rm [path/file] -r` | Remove directory recursively |
| `cp [path/file]` | Copy file |
| `mv [path/file] [/path/]` | Move/Rename file |

> # BREAK _(10m)_

## I do _(15m)_
CLI File Structure & Manipulation
- OS's organize files in directories (folders)
- CLI allows us manage files and directories in the file system.
  - directories or folders are special files where other files fit into, creating something that looks like a tree.
  - folders allows us to organize all the files in the OS.

## We do
- We have to think of file structure as a tree
- We navigate through the CLI via "paths" ```cd```
- Absolute paths vs relative paths
- ``` pwd ``` ( absolute ) vs ```.``` and ``` ..``` ( relative )
- How do we create directories? ```mkdir room```
- How do we create files? ```touch, ls > bed.txt, ls > chair.txt```
- How do we delete files? ```rm bed.txt```
- How do we remove directories?  ```rm -R room```
- How do we move a file or directory? ```mv```
- How do we rename a file or directory? ```mv```

# We do: _(15m)_
- Create:
```
Home
    |-room
        |-bed.txt
        |-chair.txt
        |-tv.txt
        |-closet
             |-shirt.txt
             |-shoes.txt
```
- Navigate to room and write the output of ```pwd```
- Navigate to closet and write the output of ```pwd```
- Create 'newHome' and move contents from 'Home' to 'newHome'
- 'newHome' doesn't have a closet so delete the closet directory.
- rename 'newHome' to 'Home'

# OUTRO
- We learned about the CLI and how its different from the GUI
- We learned to navigate through our files through the CLI
- We learned to create, delete, move, and rename files and directories.

# Extended
# I do
  - Piping and redirecting input

# You do:
- Create files with the output of the following commands
```
ls
pwd
man cd
date
```
- move these files to a folder named outputs in your desktop.
