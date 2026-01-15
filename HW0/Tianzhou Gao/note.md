What is the difference between git fetch and git pull?

The difference lies in whether changes are automatically applied to your code. "git fetch" downloads the latest commits and files from the remote repository but does not merge them into your current work. It is safe and allows you to review changes first. "git pull" is a combination of two commands: it performs a "git fetch" followed immediately by a "git merge." It downloads changes and automatically tries to combine them with your current branch.

What is the difference between git merge and git rebase? Pro and Cons?

Both integrate changes from one branch to another, but they create different history structures.

Git Merge creates a new "merge commit" that ties two branches together. Pros: It is non-destructive and preserves the exact history and chronology of when things happened. Cons: The history can become cluttered with many merge commits if used frequently.

Git Rebase moves your entire feature branch to the tip of the main branch, rewriting history to look like a straight line. Pros: It creates a very clean, linear history that is easy to read. Cons: It rewrites history. If you rebase a branch that others are also using, it can cause significant synchronization problems for the team.

How do you resolve merge conflicts in Git?

Merge conflicts happen when Git cannot automatically decide which code to keep because two commits modified the same line. The standard process is:

Identify the conflict using "git status."

Open the conflicted file. You will see markers like <<<<<<<, =======, and >>>>>>> separating the two versions of the code.

Manually delete the markers and choose which code to keep (or combine them).

Save the file and run "git add" to mark it as resolved.

Run "git commit" to finish the merge.

What is the purpose of .gitignore?

The .gitignore file tells Git which files or folders to intentionally ignore and not track in the repository. This is used for three main reasons: Security: To prevent committing passwords, API keys, or sensitive credentials. Cleanliness: To keep the repository free of build artifacts, compiled files (like .exe or .o), and system files. Efficiency: To avoid uploading massive dependency folders (like node_modules) that can be re-downloaded by other developers.

How do you undo a commit that has already been pushed?

There are two main ways depending on your situation.

The Safe Way (git revert): You use the command "git revert <commit-hash>". This creates a brand new commit that does the exact opposite of the bad commit. This is the best option for shared branches because it preserves history.

The Destructive Way (git reset): You use the command "git reset --hard <commit-hash>" followed by a "git push --force". This erases the commits from history entirely. This should only be used if you are the only person working on the branch, as it can break the work of others.

Can you give me some common git commands?

Here are the most common commands:

git init: Initialize a new repository. git clone <url>: Copy a remote repository to your machine. git status: Check which files have been changed. git add .: Stage all changes for the next commit. git commit -m "message": Save the staged changes. git push: Upload local changes to the remote repository. git pull: Download and merge changes from the remote repository. git branch: List local branches. git checkout -b <name>: Create and switch to a new branch. git log: View the commit history. git diff: See the specific code changes between commits.

Would you like me to provide examples of specific scenarios for any of these commands?