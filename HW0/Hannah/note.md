# Homework0 - Hannah He

### 1. What is the difference between git fetch and git pull?
- git fetch and git pull are both used to retrieve updates from a remote repository, but they differ in what they do with those updates.
- git fetch only downloads updates from the remote and updates remote-tracking branches, but it does not change our current branch. It’s safe and lets us review changes first.
- git pull does a fetch and then immediately merges (or rebases) those changes into my current branch, updating my working tree.
- So fetch is for inspection and control, pull is for quick synchronization.

### 2. What is the difference between git merge and git rebase? Pro and Cons?
- Merge combines branches and preserves the true branching history, usually by creating a merge commit—safe for shared branches but can make history noisy. Rebase rewrites commits by replaying them on top of another branch, producing a linear, cleaner history—great for local feature branches, but risky on shared branches because it changes commit hashes and can force-push. I typically rebase locally for a clean PR and merge when integrating into shared branches.

### 3. How do you resolve merge conflicts in Git?
- First, I pull or merge and Git tells me there’s a conflict. I run git status to see which files are conflicted. Then I open those files and look for the conflict markers <<<<<<<, =======, and >>>>>>>. I decide which changes to keep or how to combine them, edit the file to the final version, and remove the markers.

After that, I stage the resolved files with git add, and complete the process with git commit (or git rebase --continue if I was rebasing).

### 4. What is the purpose of .gitignore?
- The purpose of .gitignore is to tell Git which files and directories should not be tracked or committed to the repository.

- It is typically used to exclude:
Build artifacts (/dist, /build)
Dependency folders (node_modules/)
Environment or config files (.env)
Logs and temporary files (*.log, .DS_Store, *.tmp)
IDE/editor settings (.vscode/, .idea/)

- This keeps the repository clean, prevents sensitive data from being committed, and avoids unnecessary or machine-specific files from polluting version control.

### 5. How do you undo a commit that has already been pushed?
- If a commit is already pushed, I usually use git revert because it safely creates a new commit that undoes the change without rewriting history. git reset --hard with force push can also undo it, but it rewrites history and is dangerous on shared branches, so it’s only for special cases.

### 6. Can you give me some common git commands?
- Common Git commands include clone, status, add, commit, push, pull, branch, checkout, merge, rebase, fetch, log, diff, and revert. They cover daily work like versioning, branching, syncing with remote, and undoing mistakes.