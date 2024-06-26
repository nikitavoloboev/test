# EdgeDB-Next

Started from [Next.js + EdgeDB + EdgeDB Auth template](https://github.com/edgedb/nextjs-edgedb-auth-template).

## Setup

[Bun](https://bun.sh) is used to run/install things.

```
bun i
```

Install [EdgeDB](https://www.edgedb.com/) using:\
(or update to version in [/edgedb.toml](edgedb.toml) using `edgedb cli upgrade`)

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh
```

Create new EdgeDB instance:\
(if it asks you for version, accept `main`)

```
edgedb project init
```

Name instance `test`. Apply migrations with:

```
edgedb migration apply
```

Setup auth with:\
(app name: "test", and accept everything else)

```
bun auth:setup
```

Generate [EdgeDB-JS](https://github.com/edgedb/edgedb-js) types with:

```
bun generate:all
```

Sets up seed folder for [cli/seed.ts](cli/seed.ts) to work well.

```
bun setup
```

## Run

```
bun dev
```

Can then create account by pressing `sign up` on top corner.

More info on development can be read in [Next.js + EdgeDB + EdgeDB Auth template](https://github.com/edgedb/nextjs-edgedb-auth-template) and [EdgeDB docs](https://docs.edgedb.com/).

## Contribute

Always open to useful ideas or fixes in form of issues or PRs.
