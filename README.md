# Manifesto
Cypherpunk Manifesto

Inscirbe your manifesto by downloading the `manifesto.html` file [here](https://github.com/cypherpunklab/manifesto/blob/main/manifesto.html) and inscribing it.

This html file uses recursion to bring in the styles and the javascript. This makes the file very small to inscribe. The script also uses recursion to load the text of the manifesto and renders it in javascript. The text uses the recursive blockheight endpoint to change the color of the text each block.

# Add your Inscription with a Pull request

https://github.com/cypherpunklab/manifesto/assets/42568538/4408e860-5702-440c-ba0c-5824bc5d8506

## Validate your Inscription

Check if your manifesto inscription is valid by running the `validate_manifesto.js` using your `inscriptionId` as an argument.

```bash
> node validate_manifesto.js <inscription_ID>
```
You can run this in a codespace. If you don't already have a github account you can create one and get a free codespace to run the script and submit your inscriptionId in a pull request. Once you verify your inscription make a PR with your inscription Id by adding it to the `collection.json` file.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/cypherpunklab/manifesto)


## Create a branch:

Make a new unique branch-name for example `add-new-inscription`:
```bash
> git checkout -b add-new-inscription
```
## Add your inscription ID:

add your `inscriptionId` to the `collection.json` file. Put it at the top.
```json
{"inscriptionId": "8cb9a7f93677cc17a9f15acdd36ff368bf4efbf9cba6b77922c401f137e38025i0"},
```
Save and close the file when you're done.

## Stage your changes:

After making your changes, you need to stage them for commit. You can do this using the `git add` command:

```bash
> git add collection.json
```
## Commit your changes:

Now, you can commit your staged changes using the git commit command:

```bash
> git commit -m "Add new inscription ID"
```
It will say that you don't have write access to the repository and ask you to fork it. Type `yes` in the terminal to make your own fork this repository.

## Push your changes:

Next, push your changes to GitHub using the `git push` command
use the branch-name you used in step 1

```bash
> git push origin branch-name
```
It will say that you you need to set the upstream branch. Copy the command it gives you and run it in the terminal.

## Create a pull request:
    
You can create a pull request by clicking the link that appears after pushing your branch to your GitHub. This will bring you to the pull request page where you can add a title and description for your pull request. After that, click the `Create pull request` button to submit your pull request.
Once your pull request is submitted, it will be reviewed by the repository maintainers. If any changes are needed, they will let you know in the pull request conversation. Otherwise, it will be merged into the main branch of the original repository.

> Cypherpunks Write Code
