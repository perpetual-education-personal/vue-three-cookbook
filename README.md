# vue-three-cookbook

GOAL: Create a series of minimal examples that aren't burried in tons of other code. We could use StackBlitz - but this will be more fun for the students to work on and get practice using Git in a group.

The main branch should stay clean and as minimal as possible (or as needed to suite our purpose). We can updated site-wide CSS there / and push into other branches as nessesary / or setup a sub-module?

-  basic examples of common interface patterns
-  various routing examples
-  examples of different ways to compose stores
-  basic testing examples

Everything will be in Vue 3 and use the composition api and setup pattern.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Push to staging / [Surge](https://surge.sh/)

```sh
npm run deploy
```

will build and then push to surge

https://vue-three-cookbook.surge.sh/

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Although prettier and ESLint _should_ be doing their job while you work.

## Known unknowns

-  not sure how we'll structure this yet... will it be many branches / or will we be able to group things by folder? (the router will get way too huge though?)

-  we don't know why we need a CNAME in the root and in public for the CLI to pick it up for surge

-  we're afraid of submodules

## Ideas

-  something to explain why you'd want to lazyload a route
-  common main-menu toggle for small screens
-  sub routes
-  anything that is confusing with links to useful conversation and solution ideas
