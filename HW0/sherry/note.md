# Q&A

## 1. What is the difference between git fetch and git pull?

**git fetch** downloads **remote changes** but **does NOT** modify our local branch. It only **updates remote-tracking branches** (like origin/main). It is **safe**, let us **review changes before merging**.

**git pull** is the **combination** of git fetch and **git merge**. It **downloads and immediately merges** changes into our current branch. it is **faster**, but riskier because it may create **merge conflicts** right away.

## 2. What is the difference between git merge and git rebase? Pro and Cons?

**git merge** combines branches by creating a **merge commit**. It **preserves the full commit history** and clearly shows **when branches diverged**. Because it does **not rewrite history**, it is **safe for shared branches** like `main`.

The downside is that the commit history can become **messy**, since you may end up with many **extra merge commits**.

**git rebase** works differently. It **replays commits** on top of another branch, creating a **clean, linear history**. This makes the **git log easier to read** and understand.

However, **rebase rewrites history**, so it can be **dangerous on shared branches** and may cause issues for teammates.

## 3. How do you resolve merge conflicts in Git?

When a **merge conflict** happens, Git marks the conflicted files with **`<<<<<<<` `=======` `>>>>>>>`** to show **conflicting changes**.

In practice, I usually open the file in **VS Code**, which has a built-in **conflict resolver UI**. VS Code lets me **compare changes** and choose **which code to keep**, such as **accept current**, **accept incoming**, or **accept both**.

After resolving the conflict, I **remove all conflict markers**, stage the file using **`git add`**, and then complete the process with
 **`git commit`**.

## 4. What is the purpose of .gitignore?

`.gitignore`  tells Git which files **NOT to track**,  and some common examples like .env, node_modules/, logs, .vscode/ , build or dist folders. It can help keep the repo **clean**,  prevents **secrets** from being committed, reduces **noise in version control**.

## 5. How do you undo a commit that has already been pushed?

The **recommended and safe way** is to use **`git revert`**. **Revert creates a new commit** that **undoes the changes** from a previous commit. It **does not rewrite history**, so it is **safe for shared branches** and team workflows.

In contrast, a **dangerous approach** is using **`git reset --hard`** followed by a  **force push**. This **rewrites commit history** and can **break other teammates’ work**, so it should **never be used on main or shared branches**. I use this on my own branch when I'm sure that no one else is using it and i need to clean up some local commits before merging.

```bash
git revert <commit-hash>

git reset --hard <commit-hash>
git push --force
```

## 6. Can you give me some common git commands?

**`git clone`** – copy remote repo

**`git status`** – check working tree state

**`git add`** – stage changes

**`git commit`** – save changes

**`git push`** – upload commits

**`git pull`** – fetch + merge

**`git fetch`** – download only

**`git branch`** – list branches

**`git checkout / git switch`** – change branches

**`git merge`** – merge branches

**`git rebase`** – reapply commits

**`git log`** – view history
