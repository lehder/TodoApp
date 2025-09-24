# recap terminal terminology

## CD

Used to change directory. e.g. cd .. or cd dirname

## LS

Used to view files in the current directory. E.g. LS
ls -a (shows ALL files, even hidden ones)

## mkdir

Used to make a new directory in a specified directory, or in the current dir if nothing is specified.
mkdir ./newdir dirname

## touch

Used to make a new file in a specified directory, or in the current dir if nothing is specified.

touch newfile.cs

## rm

remove filename/dirname, deletes FOREVER (unless backed up somehow, e.g. through git / github)
rm filename.txt

## code

Opens file/dir in vscode. Creates a new file/dir if the specified name does not already exist.
code newfilename.html
code .
code existingfilename.js

## clone

Used to clone an existing repo, dir or file given correct permission to access.
git clone ["Link til github repository"](https://github.com/LudvigAlvir/BED-2025)

## checkout

Used check out previous commits (previous versions of the file), and different currently active branches.
git checkout branch-one, git checkout main

## add

Stages/Prepares a file for git commit.
git add README.md

## commit

Saves all staged files changes to the local repo's history
git commit -m "Blabla yep uwu"

## push

Transfer commited files from local to the GitHub Repo, including the "history" reflected by each commit.
git push origin main
git push origin branch-uwu

## merge

Used to merge... the file changes between two branches"checkpoints" (commits).

## pull request

Used to request a merge between branches. E.g. from a branch into main.

## Merge conflict

An error occuring during a merge when there is conflicting code/data. You have to review the conflict and edit the specified lines that caused the conflict.
