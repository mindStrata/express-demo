#### Basic setup

To set your name and email for git configuration and code editor

```bash
git config --global user.name "Your Name"
git config --global user.email "example@domain.com"
git config --global core.editor "code --wait" # Helpful while wrong committing command

# To see the configuration list
git config --list
```

#### Steps of committing codes to repo

```bash
git status # To confirm wheather there is any previous initializtion
git init # To initialize git over a particular folder

#Write your code, once it is done you can commit by the following commands:
git add <file> <file> ...
git add . #To add all files simultaneously (Depends on your need)
git status # staging

git commit -m "your message" #Should be in present tense and imparative sentence (e.g., "add README.md file to codebase").
```

#### Command to check commit details

```bash
git log
```

The above command is not effect, to show the all commit in shorthand you can add `--oneline` after the above command.

```bash
git log --oneline
```

To view a particular commit history, the following command can be used:

```bash
git log <commit-hash> # git log ab12cd3
```

To see details of certain a commit, you can run:

```bash
git show <commit-hash>
```

#### Options with `git log <commit-hash>`:

You can use various options with `git log` to customize the output:

- `git log <commit-hash> --oneline`: Shows a condensed version of the commit history starting from the specified commit.
- `git log <commit-hash> --stat`: Shows the commit history with statistics on the number of lines changed (added/removed).
- `git log <commit-hash> -p`: Shows the patch (the actual changes in code) for each commit starting from the specified one.

---

# 1. How to Recover a Deleted Git Branch from GitHub

If you have deleted a branch on your local machine but it still exists on GitHub, you can easily recover it. Follow these steps:

## Step 1: Check GitHub for the Deleted Branch

1. Go to your repository on **GitHub**.
2. Click on the **"Branches"** tab.
3. Look for the branch you want to recover. If it’s there, you can proceed to the next step.

## Step 2: Open Your Terminal

Open your terminal (Command Prompt, Git Bash, or any terminal you use).

## Step 3: Fetch Remote Branches

Run the following command to update your local repository with the latest changes from GitHub:

```bash
git fetch origin
```

This command will bring the latest information about the branches from the remote repository.

## Step 4: List All Branches

To see a list of all branches, including remote branches, run:

```bash
git branch -a
```

Look for your deleted branch in the list. It should appear as `remotes/origin/<branch-name>`.

## Step 5: Checkout the Deleted Branch

To recover your deleted branch locally, run the following command:

```bash
git checkout -b <branch-name> origin/<branch-name>
```

Replace `<branch-name>` with the actual name of your branch. This command creates a new local branch that tracks the remote branch on GitHub.

## Step 6: Verify the Branch is Recovered

To check if the branch has been restored, run:

```bash
git branch -vv
```

This will show you the current branches and confirm that your recovered branch is now tracking the remote branch.

---

You have successfully recovered your deleted branch from GitHub! You can now continue working on it as needed.

Here’s a simple documentation on how to rename a Git branch and push it to a remote repository:

---

# 2. How to Rename a Git Branch and Push to Remote

If you have renamed a branch locally in Git and want to push the changes to your remote repository, follow these steps to do it correctly.

## Step 1: Rename Your Local Branch

To rename your current branch, use the following command:

```bash
git branch -m new-branch-name
```

Replace `new-branch-name` with your desired name for the branch.

## Step 2: Push the Renamed Branch to Remote

After renaming your branch, push it to the remote repository with:

```bash
git push origin new-branch-name
```

This command uploads your renamed branch to the remote repository.

## Step 3: Delete the Old Remote Branch (if necessary)

If the old branch name still exists on the remote and you want to remove it, use the following command:

```bash
git push origin --delete old-branch-name
```

Replace `old-branch-name` with the name of the branch you renamed.

## Step 4: Set the Upstream Branch (if necessary)

To set the upstream tracking for your renamed branch (if it’s not set automatically), use:

```bash
git push --set-upstream origin new-branch-name
```

This command links your local branch to the remote branch, making future pushes and pulls easier.

## Common Errors and Solutions

1. **Error: Remote branch exists**  
   If you encounter an error indicating that the branch with the same name already exists on the remote, you need to delete the old remote branch first (see Step 3).

2. **Error: Failed to push some refs**  
   This error may occur if your local branch is behind the remote branch. To resolve this, first pull the changes from the remote branch, resolve any conflicts, and then attempt to push again.
