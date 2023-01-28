# React Vite Template

The tiny 16kb app that could.

- Started with the official Vite React Typescript template
- Swaps React for Preact under the hood via resolve.alias, so small bundle size and totally inter-compatible
- linting and formatting c/o eslint + prettier
- path alias for ~ --> ./src
- Vitest testing
- Storybook previewing
- astroturf and ustyle for css-in-js:
  - astroturf is ideal for foundation styling needs
  - ustyle is ideal for inline styling bc is progressive/lazy and provides Chakra like features (shorthand style props)
- stackr router - a tiny SPA-first router that supports route stacks (like react-native-navigation but small and for web)
- ureact/useSwr - a tiny stale-while-refresh hook that fetches data and returns the cached data while you wait
- Global Html Tag components that are loaded with chakra-like css props, zx, _hover,_active, css and style shorthands

Roadmap: <https://github.com/users/bdombro/projects/2>