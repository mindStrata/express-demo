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

# How to Recover a Deleted Git Branch from GitHub

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
