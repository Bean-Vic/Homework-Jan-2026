1.What is the difference between git fetch and git pull?

    So git fetch is you download the changes from the remote repository but it does not modify my working branch, so it’s safe to inspect the updates first.  git pull fetches and then integrates the changes usually by using a merge or a rebase into my current branch.

2.What is the difference between git merge and git rebase? Pro and Cons?

	Git merge combines branches and preservers the full history, and it is safe for branches sharing.
	Git rebase is rewrites commits to create a cleaner, linear history which is great for local feature branches, but it’s risky if the branch is already shared.

3.How do you resolve merge conflicts in Git?

	When merge conflicts happened, we need to check which files are conflicted, then we manually resolve the conflicting files, add the files back and complete the merge or rebase again. We may run some test after we resolve the conflicts.

4.What is the purpose of .gitignore?

	gitignore is used to tell git which files or folders should not be tracked, such as dependencies, build artifacts, or environment files, to keep the repository clean and secure.

5.How do you undo a commit that has already been pushed?

	If the commit is already pushed and shared, I will use git revert to safely create a new commit that undoes the changes. I only use reset with a force push if i know nobody else is working on this branch.

6.Can you give me some common git commands?
	Sure I can give you some examples, 
	while we initial a repository we would use config, git init, git clone 
	And in the daily workflow, we always use git status, git add . , git commit , push and pull
	And the git commands for the branching,
	we will use git branch, git checkout, git switch , git merge


