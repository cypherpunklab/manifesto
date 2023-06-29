# Manifesto
Recursive Manifesto

Inscirbe your manifesto by downloading the `manifesto.html` file [here](https://github.com/cypherpunklab/manifesto/blob/main/manifesto.html) and inscribing it.

## Verify 
Check if your manifesto inscription is valid by running the validation script
> node validate_manifesto.js <inscription_ID>

You can run this in a codespace

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/cypherpunklab/manifesto)

## Add your Inscription ID with a Pull request

Once you verify your inscription make a PR with your inscription Id by adding it to the collection.json

1) Make a new uniuqe branch-name with your github user name
> git checkout -b add-new-inscription-elocremarc

2) add your `inscriptionId` to the `collection.json` file
```json
{"inscriptionID": "8cb9a7f93677cc17a9f15acdd36ff368bf4efbf9cba6b77922c401f137e38025i0"},
```
Save and close the file when you're done.

3) Stage your changes:

After making your changes, you need to stage them for commit. You can do this using the `git add` command:

```bash
git add collection.json
```
4) Commit your changes:

Now, you can commit your staged changes using the git commit command:

```bash
git commit -m "Add new inscription ID"
```
5) Push your changes:

Next, push your changes to GitHub using the `git push` command:

```bash
git push origin add-new-inscription
```

6) Create a pull request:
```bash
gh pr create --title "Add new inscription ID" --body "This PR adds a new inscription ID to the manifestos.json file."
```
