## 1. What is the difference between git fetch and git pull?

- **git fetch** retrieves the latest changes from the remote repository, and it does not automatically merge them into the current branch.
- **git pull** combines `git fetch` and `git merge`. It retrieves changes from the remote repository and automatically merges them into the current branch.

---

## 2. What is the difference between git merge and git rebase? Pros and Cons

### git merge
- Combines branches by creating a merge commit and preserves the branch history.  
**Pros:**
- The history is accurate and safe for shared branches.  
**Cons:**
- The history may become complex with many merge commits.

### git rebase
- Reapplies commits on top of another branch and creates a linear commit history.  
**Pros:**
- The history is clean, linear, and easy to read.  
**Cons:**
- It rewrites history and can be unsafe on shared branches.

---

## 3. How do you resolve merge conflicts in Git?

- First, identify the conflicting files.
- Then edit the files to resolve the conflicts.
- Stage the resolved files using `git add`.
- Finally, complete the merge.

---

## 4. What is the purpose of .gitignore?

- `.gitignore` is used to tell Git which files or directories should be ignored and not tracked by Git.

---

## 5. How do you undo a commit that has already been pushed?

- There are two ways:
  - `git revert` is safe and does not rewrite history.
  - `git reset` rewrites history.

---

## 6. Can you give me some common git commands?

Some common Git commands include:

- `git init`
- `git clone`
- `git status`
- `git add`
- `git commit`
- `git log`
- `git branch`
- `git checkout`
- `git merge`
- `git push`
- `git pull`
