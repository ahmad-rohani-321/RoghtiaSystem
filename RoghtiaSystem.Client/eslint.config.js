import withNuxt from './.nuxt/eslint.config.mjs'
import pluginOxlint from 'eslint-plugin-oxlint'

export default withNuxt(
  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
)
