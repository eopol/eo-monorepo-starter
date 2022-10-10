# eo-monorepo-starter

Create a modern high-performance Monorepo starter project with pnpm + turbo + changeset + vite! 🚀

This project is developed based on React, and most apps work based on Vite, except `@eo-ms/docs`. `@eo-ms/docs` use Next.js to develop and deploy in Vercel.

## Pnpm Workspace description

### admin

Admin app

### @eo-ms/cli

Cli app

### @eo-ms/docs

Use Next.js to document for admin, cli and ui.

### @eo-ms/constant

Static variables required by this monorepo project

### @eo-ms/eslint-config

Eslint config required by this monorepo project

### @eo-ms/stylelint-config

Stylelint config required by this monorepo project

### @eo-ms/ts-config

Typescript config required by this monorepo project

### @eo-ms/ui

UI library

## Usage

### Install

`pnpm i -f` install deps

### Local devlopment

`pnpm dev:docs` to open local server

### CI

Use github action to control workflow.

- `pnpm release` to create changeset.

- `git add .`

- `pnpm commit`

- `git push`

## Git hook

Use `simple-git-hook`, `lint-staged`, `eslint`, `@commitlint/cli`, `@commitlint/config-conventional` to make file format and commit message lint.

Use [cz-git](https://cz-git.qbb.sh/), [czg](https://cz-git.qbb.sh/cli/#VPContent) to make git commit command reactive in terminal.

## CZ config

Move pkg's config of commitizen to root `.czrc` avoid `run-s clean:**` error. See [pnpm issues #3275](https://github.com/pnpm/pnpm/issues/3275) and [npm-run-all issue #201](https://github.com/mysticatea/npm-run-all/issues/201)

## Compile .ts script in Node

Use `tsx` to compile .ts file so fast.

## Use Github Action for CI

### Create Github Token

- Click user avator, Settings => Developer settings => Developer settings => click Generate new token

- `${{ secrets.GITHUB_TOKEN }}`: Just named `note` to GITHUB_TOKEN

- `${{ secrets.SELF_TOKEN }}`: Just named `note` to xxx, then enter your repo. Click Settings => Secrets => Actions => click New repository secret. Enter xxx to Secret and enter SELF_TOKEN to Name.

### Create NPM Token

- Click user avator, Access Tokens

- Enter name and choose Automation then copy token to github repo, Click Settings => Secrets => Actions => click New repository secret. Enter YOUR_NPM_TOKEN to Secret and enter NPM_TOKEN to Name.

### Create NPM group

- Click user avator, Add Organization
