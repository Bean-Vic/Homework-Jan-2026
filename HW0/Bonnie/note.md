1) What is the difference between git fetch and git pull?
git fetch` downloads new commits/branches/tags from the remote, but does **not** change your current local branch. git pull` = `git fetch` + integrate changes into your current branch.

 2) What is the difference between git merge and git rebase? Pros and Cons?
`merge` combines histories by creating a merge commit; rebase` moves/rewrites your commits onto a new base, creating a linear history
Pros:  Preserves true history (shows exactly when branches diverged and merged). 
Cons: Can create extra merge commits; history may look “messy”.

git rebase: 
Clean, linear history; easier to read `git log`; but rewrites commit history (new commit hashes).  

3) How do you resolve merge conflicts in Git?
1. Run `git merge <branch>` and Git reports conflicts.  
2. Check conflicted files: `git status`  
3. Open each file and resolve conflict markers
4. After editing, mark as resolved: `git add <file>`  

4) What is the purpose of .gitignore?
.gitignore` tells Git which files/folders should be **ignored** and not tracked, such as build outputs

5) How do you undo a commit that has already been pushed?
Use `git revert <commit>`: it creates a new commit that undoes the changes.  

 6) Can you give me some common git commands?
git status
git add .
git push / git pull
git branch newbranch
git checkout <branch>
git merge <branch>