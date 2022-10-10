import path from 'path'
import fs from 'fs'
import childProcess from 'child_process'
import { getPackages } from '@manypkg/get-packages'
import { Octokit } from 'octokit'
import semver from 'semver'

const cwd = process.cwd()

// Create release on github
const createRelease = async (octokit, { pkg, tagName }) => {
  const changelogPath = path.join(pkg.dir, 'CHANGELOG.md')

  const changelog = await fs.promises.readFile(changelogPath, 'utf8')
  const changelogArr = changelog.split('\n')
  let releaseNotes: string[] = []
  // Get release notes from changelog
  for (const line of changelogArr) {
    if (line.match(/^#{3}\s/)) {
      releaseNotes.push(line)
    } else if (line.match(/^#{1,3}\s/) && releaseNotes.length > 0) {
      break
    } else if (releaseNotes.length > 0) {
      releaseNotes.push(line)
    }
  }

  // Check if it's a prerelease
  const prereleaseParts =
    semver.prerelease(tagName.replace(`${pkg.packageJson.name}@`, '')) || []

  // Create release on github
  await octokit.rest.repos.createRelease({
    owner: 'eopol',
    repo: 'eo-monorepo-starter',
    name: tagName,
    tag_name: tagName,
    body: releaseNotes.join('\n'),
    prerelease: prereleaseParts.length > 0,
  })
}

// Get only packages that have a new version published
const getReleasedPackages = async (csOutput, pkgs) => {
  const tagNameRegex = /New tag:\s+(@eo-ms\/[^@]+)@([^\s]+)/
  return csOutput.split('\n').reduce((acc, line) => {
    const match = line.match(tagNameRegex)
    if (match === null) {
      return acc
    }
    const tagName = [match[1], match[2]].join('@')
    const pkg = pkgs.find((p) => p.packageJson?.name === match[1])
    return [...acc, { tagName, pkg }]
  }, [])
}

async function main() {
  console.log("releases")
  const env = process.env
  const octokit = new Octokit({
    auth: `token ${env.GITHUB_TOKEN}`,
  })

  // Run changesets publish and get stdout
  const csOutput = childProcess
    .execSync(
      'pnpm exec changeset publish'
    )
    .toString()
  console.log(
    `
    🚀🚀🚀 Run changesets publish and get stdout. 🚀🚀🚀
    ${csOutput}
    `
  )

  const gitPushCommand = `git add . && pnpm run format
  git diff --staged --quiet || git commit -m "docs: 📝 add changelogs for $(git rev-parse --short HEAD) [skip ci]" && git push origin ${env.GITHUB_BRANCH} --follow-tags`

  // Push updated packages to github with tags
  console.log(
    `
    🚀🚀🚀 Push updated packages to github with tags. 🚀🚀🚀
    ${childProcess.execSync(gitPushCommand)}
    `
  )

  const { packages: pkgs } = await getPackages(cwd)
  const releasedPkgs = await getReleasedPackages(csOutput, pkgs)

  // Create release for each published package
  for (const pkg of releasedPkgs) {
    await createRelease(octokit, pkg)
  }
}

main()
