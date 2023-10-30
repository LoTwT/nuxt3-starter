import unocss from "@unocss/eslint-plugin"
import { defineFlatConfig } from "@ayingott/eslint-config"

export default defineFlatConfig(
  [
    unocss.configs.flat,
    {
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  {
    vue: true,
    react: false,
    unocss: true,
    prettier: true,
  },
)
