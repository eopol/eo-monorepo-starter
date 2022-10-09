if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\n\u001b[33mThis repository requires using pnpm as the package manager.\u001b[39m\n`
  )
  console.warn(
    `\n\u001b[33mIf you want the scripts to work properly, please use pnpm. 🥶🥶🥶 \u001b[39m\n`
  )
  process.exit(1)
}
