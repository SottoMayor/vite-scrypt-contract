# How to Setup Scrypt Smart Contracts With Vite-Js Using React and TypeScript

## 1. Project Initialization

- The steps are the same from [How to integrate a frontend](https://docs.scrypt.io/bsv-docs/how-to-integrate-a-frontend/) (Scrypt Doc). But, the process has some little gotchas regarding Vite and Scrypt.
- 1. Create a new Vite project
   - Follow along: [Vite First Project](https://vite.dev/guide/#scaffolding-your-first-vite-project)
   - Using the CLI:
      - Porject Name: helloworld (The name is up to you, I cherry picked this just to align with the Scrypt tutorial)
      - Select a Framework = React
      - Select a Variant = Typescript
- 2. Back to the [Scrypt Doc](https://docs.scrypt.io/bsv-docs/how-to-integrate-a-frontend/) follow the same steps as **Install the sCrypt CLI** and **Load the Contract**
   - In the *Load the Contract/Load Artifact* step, notice that the `index.tsx` is, actually, `main.tsx` on Vite.

## 2. Adjustments to tsconfig Files
- At this point, the project:
   - Probably is indicating some errors in the contract code
   - Generated 4 different tsconfig files:
      - tsconfig-scryptTS.json
      - tsconfig.app.json
      - tsconfig.json
      - tsconfig.node.json
- You just need to **copy** from this project and paste to your project the whole content of:
   - **tsconfig-scryptTS.json**
   - **tsconfig.app.json**
   - **tsconfig.node.json**
 
## 3. Good to go!
- Start building your dApp 🚀

## Hint: Deploy on GitHub Pages
- If you have unused code in your code base, TypeScript will give error by the transpilation time.
- To avoid this, remove the `tsc -b &&` part from the build script
   - Before:
     ```
     "build": "tsc -b && vite build"
     ```
   - After:
     ```
     "build": "vite build"
     ```



