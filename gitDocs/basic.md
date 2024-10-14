#### Basic setup
To set your name and email for git configuration and code editor

```bash
git config --global user.name "Your Name"
git config --global user.email "example@domain.com"
git config --global core.editor "code --wait" # Helpful while wrong committing

# To see the configuration list
git config --list
```

#### Steps of committing codes to repo

```bash
git status # To confirm wheather there is any previous initializtion
git init # To initialized git over a particular folder

#Write your code, once it is done you can commit by the following command
git add <file> <file> ...
git add . #To add all file simontaneously (Depends on your need)
git status # staging

git commit -m "your message" #should be in present tense and imparative sentence e.g., "add README.md file to codebase"
```

#### Command to check commit details

```bash
git log
```

The above command is not effect, to show the all commit in shorthand you can add `--oneline` after the above command.

```bash
git log --oneline
```
