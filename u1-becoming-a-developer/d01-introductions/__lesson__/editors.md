# Editors

#### LEARNING OBJECTIVES
- SWBAT Create, open and save files in Atom
- SWBAT Navigate a project directory
- SWBAT Search/Replace in a file
- SWBAT Search in a project

## STEP 1: Atom [I]

Atom is an easy to use text editor developed by the people at GitHub.  While
you can use any editor, for this class we should all be using Atom.

Atom can be installed by downloading it from their website, or through Homebrew Cask

## STEP 2: Opening Files [W]

- How many of you have experience using Text Editors?
- What editors are you familiar with?  What are your favorite features?

## STEP 3: Editor Shortcuts

Your time is valuable, and it is important to get used to your editor.  We
should begin to develop our muscle memory so we can be as effective as possible.

Instead of using the menus, let's practice using the most common keyboard shortcuts:

| Shortcut | Function |
|----------|----------|
| Ctrl+S   | Save the current document |
| Ctrl+O   | Open a file |
| Ctrl+N   | Create a new file |
| Ctrl+W   | Close the file |
| Ctrl+[   | Switch to the previous tab |
| Ctrl+]   | Switch to the next tab |
| Shift+Arrow Keys | Make selection using the keyboard |
| Ctrl+C   | Copy the selection to the clipboard |
| Ctrl+V   | Paste the contents of the clipboard |
| Cmd+A    | Select the entire file |
| Cmd+T    | Open a file in by name |

## ACTIVITY: Shortcut Practice (15 minutes)
`d01/student/shortcut-practice`

**WITHOUT USING YOUR TRACKPAD OR MOUSE**

1. Open the sample project from the Terminal
2. Find the file named "find_me.txt" using Cmd+T
3. Search the entire project for the text "Hey Bobby!"
4. Replace the string "Bobby" with "Charlie" across the entire project
5. Open `file1.txt` and `file2.txt`
6. Copy the entire contents of `file1.txt` and paste it into `file2.txt`
7. Create a new file named "file3.txt", type your name, and close it.

## STEP 4: Web Servers [W]

Lets create a simple HTML project in Atom.  Let's start by creating a directory:

```sh
$ cd ~/code/wdi
$ mkdir about-me
$ cd about-me
$ atom .
```

Because we opened atom with a current directory as the first argument, (`.`)
the contents of that directory is visible in the pane on the left.

Let's create a new file named "index.html".  Let's take a few minutes to build
out a simple website for our neighbor.  (15 minutes)

If we are going to be real web developers, we should get used to working behind a web server.

In your terminal, type the words:

```sh
$ server
```

This command was setup by during installfest.  For the first few units, we will use this command to test our code.

## STEP 5: How the Internet Works

DevOps

##### Browsers
##### Servers
##### IP Addresses
##### DNS
