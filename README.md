# A Cypherpunk's Manifesto

## Inscribe
**Inscribe your manifesto by downloading the `manifesto.html` file [HERE](https://github.com/cypherpunklab/manifesto/blob/main/manifesto.html) and inscribing it.** 

## Run your own Bitcoin and Ord node
We recommend running your own [bitcoin node](https://bitcoincore.org/en/download/), along with running [ord](https://github.com/ordinals/ord#installation) to inscribe using your own node.
If you need help setting up your node do not hesitate to reach out on the Cypherpunk Ghosts [discord](https://discord.gg/kayEReCgVG) and also the official ordianals [discord](https://discord.com/invite/ordinals).
You should have at least a `1tb ssd` to run your Bitcoin node as the blockchain with the ord index is about 600gb.

Here is a good 2 part video on how to setup your node:
https://youtu.be/zXlvkOSVM9M

How to inscribe from your node: 
https://youtu.be/LXrUu8WOrHo

*<ins>Again you should run your own node</ins>*

However if you want to inscribe while you are setting your node up or the hardware is too expensive you can use an inscribing service like
[https://chisel.xyz](https://chisel.xyz/) to inscribe your manifesto `html` file. A good browser/mobile wallet to use for inscriptions is https://www.xverse.app/

*Your goal should be inscribing from your own node.*

## About
This html file uses recursion to bring in the styles and the javascript. This makes the file very small to inscribe. The script also uses recursion to load the text of the manifesto and renders it in javascript. The text uses the recursive blockheight endpoint to change the color of the text each time a block is mined.

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

Make sure that you don't change the structure of the `json` file. It should look like this:
```json
[
  {"inscriptionId": "<InscriptionId-1>"},
  {"inscriptionId": "<InscriptionId-2>"},
  {"inscriptionId": "<InscriptionId-3>"}
]
```
## Make your changes valid for a pull request:

The last entry should not have a comma at the end. You also need to make sure the `[` and `]` are at the beginning and end of the file respectively each on their own line. If you don't do this, the file will be invalid and your pull request will need to be updated.

#### Add your entry in the middle it seems to help with merge conflicts
Like this in the middle:
✅ Valid:
```diff
[
 {"inscriptionId": "<Other InscriptionId>"},
+{"inscriptionId": "<Your InscriptionId>"},
 {"inscriptionId": "<Other InscriptionId>"}
]
```

❌ Invalid:
```diff
-[
+[{"inscriptionId": "<Your InscriptionId>"},
 {"inscriptionId": "<Other InscriptionId>"},
 {"inscriptionId": "<Other InscriptionId>"}
]
```
❌ Invalid:
```diff
[
 {"inscriptionId": "<Other InscriptionId>"},
 {"inscriptionId": "<Other InscriptionId>"},
+]{"inscriptionId": "<Your InscriptionId>"}
-]
```
✅ Valid:
```diff
[
+{"inscriptionId": "<Your InscriptionId>"},
 {"inscriptionId": "<Other InscriptionId>"},
 {"inscriptionId": "<Other InscriptionId>"}
]
```
✅ Valid:
```diff
[
 {"inscriptionId": "<Other InscriptionId>"},
 {"inscriptionId": "<Other InscriptionId>"},
+{"inscriptionId": "<Your InscriptionId>"}
]
```

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

## Dealing with merge conflicts:

If you get a merge conflict, you will need to resolve it before your pull request can be merged. You can do this manually on github by clicking the `Resolve conflicts` button. You might have to do this multiple times if branches go in before yours. This will bring you to a page where you can edit the file. You will see something like this:

```diff
[
 {"inscriptionId": "<Other InscriptionId-1>"},
 {"inscriptionId": "<Other InscriptionId-2>"},
<<<<<<< your-branch-name
 {"inscriptionId": "<Your InscriptionId>"},
=======
 {"inscriptionId": "<Other InscriptionId-3>"},
 {"inscriptionId": "<Other InscriptionId-4>"},
 {"inscriptionId": "<Other InscriptionId-5>"}
]
>>>>>>> main   
```
You will need to remove the `<<<<<<< your-branch-name`, `=======` and `>>>>>>> main` lines.

When your finished It should look somthing like this.
```diff
[
 {"inscriptionId": "<Other InscriptionId-1>"},
 {"inscriptionId": "<Other InscriptionId-2>"},
 {"inscriptionId": "<Your InscriptionId>"},
 {"inscriptionId": "<Other InscriptionId-3>"},
 {"inscriptionId": "<Other InscriptionId-4>"},
 {"inscriptionId": "<Other InscriptionId-5>"}
]
```
Once you are done, click the `Mark as resolved` button. 

> Cypherpunks Write Code
