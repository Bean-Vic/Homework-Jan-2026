1. What is the difference between git fetch and git pull?

git fetch downloads changes from the remote repository and updates remote-tracking branches without modifying the local branch, while git pull fetches the changes and then integrates them into the current branch。

2. What is the difference between git merge and git rebase? Pro and Cons?

git merge
keeps **all branch history** and creates a **merge commit**.

git rebase
rewrites commit history to make it **linear and clean**.

git merge

Pros
• Preserves true history
• Safe for shared branches

Cons
• Can create extra merge commits

git rebase

Pros
• Creates a clean, linear history
• Easier to read commit logs

Cons
• Rewrites history
• Dangerous on public/shared branches

Merge keeps history; rebase rewrites history. Rebase is for clean local work, merge is safer for team collaboration.

3. How do you resolve merge conflicts in Git?

We can manually edit the conflicted files by resolving the conflict markers, stage the resolved files with **git add**, and then complete the merge with a commit（**git commit**）.

4. What is the purpose of .gitignore?

.gitignore tells Git which files it should not track or commit.

5. How do you undo a commit that has already been pushed?

If it was already pushed we can use git revert with that commit hash code.

6. Can you give me some common git commands?

checkout add status
