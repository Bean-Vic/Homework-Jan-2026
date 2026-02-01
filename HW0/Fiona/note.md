# HM0 - Git Mock Interview

## 1. What is the difference between git fetch and git pull?
    Git allows you to retrieve the latest change from the remote repo, but it does not change anything on your local repo.
    Using git pull is like doing fetch and merge all at the same time, and it will bring down the changes from remote to 
    your local repo.

## 2. What is the difference between git merge and git rebase? Pro and Cons?
    They are all used for integrate changes. When git merge create a new commit, it keeps the full commit history, all 
    changes made are traceable in the version control. But git rebase will rewrite the commit history, so it is risky to use
    on public repo or shared branches. So the git merge is safer to use on public repo or shared branch, and git rebase 
    can be used for cleanup on your own branch.

## 3. How do you resolve merge conflicts?
    Git marks the conflic files, and I will check and compare the difference of two versions that cuase the conflic, after 
    I decide which change to keep, I will remoce the conflict marker, and then I can continue to add and commit.

## 4. What is the purpose of .gitignore?
    It tells git what files to ignore in the version control. Using it is used for files relates to local setup, like IDE
    config, .env files, node_modules and so on.

## 5. How do you undo a commit that has already been pushed? 
    I use git revert. Git revert will create a new commit to undo the changes, and keep the full commit history.

## 6. Common Git commands you use?
    Yeah, I used git in my daily work. Some common commands I used is like git clone, which is used to clone a remote repo 
    to your local branch; Git pull will brings down the changes from remote to local. Git push will upload the changes from
    local to remote. Git status is used to track the working directory and staing area. Git add and git commit are used to 
    save the changes you made on your local branch.