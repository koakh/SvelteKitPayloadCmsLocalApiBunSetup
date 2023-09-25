# NOTES

- [Build an app with SvelteKit and Bun | Bun Examples](https://bun.sh/guides/ecosystem/sveltekit)

```shell
$ bunx create-svelte my-app
$ cd my-app
$ bun i
```

## TLDR run Project

```shell
# run dev/hot reload
$ cd frontend
$ bun --bun run dev
$ cd backend
$ pnpm dev
```

## [WARNING] Cannot find base config file "./.svelte-kit/tsconfig.json" [tsconfig.json]

```shell
$ bun --bun run dev
$ vite dev
▲ [WARNING] Cannot find base config file "./.svelte-kit/tsconfig.json" [tsconfig.json]

    ../tsconfig.json:2:12:
      2 │   "extends": "./.svelte-kit/tsconfig.json",
        ╵              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  VITE v4.4.9  ready in 1489 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

- [Discord - A New Way to Chat with Friends & Communities](https://discord.com/channels/457912077277855764/689494103380983930/1150184839438409808)

dummdidumm — Today at 22:43
**That warning should only appear the first time when that generates TS config doesn't exist yet**.
It's harmless because it's immediately created and then used. There's no way to silence it unfortunately

- [Discord - A New Way to Chat with Friends & Communities](https://discord.com/channels/457912077277855764/689494103380983930/1150187522404667485)

ShadowMobX — Today at 22:54
if you run with `--bun` flag there might be some speed improvements, otherwise it's just packaging stuff afaik

## Payload Integration

```shell
$ bun add payload
$ npm install --platform=linux --arch=x64 sharp
```

### SyntaxError: Cannot use import statement outside a module

```shell
bun run dev

// /mnt/storage/Development/Svelte/SvelteKit/SvelteKitBunStarter/frontend/src/payload.config.ts:1
// import { buildConfig } from "payload/config";
// ^^^^^^

// SyntaxError: Cannot use import statement outside a module
```

the problem is when we `import { payloadClient } from '$lib/server/payload';` anywhere

```ts
// import { payloadClient } from '$lib/server/payload';

export const handle = async ({ event, resolve }) => {
  // event.locals.payloadClient = payloadClient;
  const response = await resolve(event);
  return response;
};
```

### bun run build : Something went wrong installing the "sharp" module

```shell
$ bun run build
node:internal/event_target:1012
  process.nextTick(() => { throw err; });
                           ^
Error: 
Something went wrong installing the "sharp" module

Module did not self-register: '/mnt/storage/Development/Svelte/SvelteKit/SvelteKitBunStarter/frontend/node_modules/payload/node_modules/sharp/build/Release/sharp-linux-x64.node'.
```

the trick is comment this line from starter

`frontend/src/routes/+page.ts`

```ts
// export const prerender = true;
```