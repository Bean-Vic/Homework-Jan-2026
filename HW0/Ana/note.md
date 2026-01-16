Q1. What is the difference between git fetch and git pull
git fetch downloads the latest changes from the remote repo to local machine, but it does not apply them to current working files
git pull is a combination of two commands: git fetch +  git merge

Q2. What is the difference between git merge and git rebase? Pro and Cons?
git merge and git rebase both integrate changes from one Git branch into another.
Git merge combines branches by creating a new merge commit that preserves the full history of both branches.
Pros: safe, does not rewrite commit history
Cons: create extra merge commits, making the commit history more cluttered and harder to read.

Git rebase moves or reapplies commits from one branch on top of another, creating a linear commit history.
Pros: It results in a cleaner, more readable history without merge commits.
Cons: It rewrites commit history, which can be dangerous if used on shared branches and may cause conflicts that must be resolved commit by commit.

Q3. How do you resolve merge conflicts in Git?
you can either edit the files manually using the command line or use a (GUI). The general process involves identifying the conflicting files, choosing which changes to keep, and then marking the conflict as resolved by staging and committing the changes. 

Q4. What is the purpose of .gitignore?
To specify untracked files Git should ignore. This keeps the repository clean and ensures that only necessary source files and relevant content are part of version control and shared with other collaborators. 
Q5. How do you undo a commit that has already been pushed
git revert <commit-hash> to undo the changes, then git push the revert commit

Q6. Can you give me some common git commands
git status, git clone, git pull, git commit git push, git reset

