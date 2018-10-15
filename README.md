<p align="center">
  <img src="https://habrastorage.org/webt/y2/m3/yt/y2m3ytqadzph9hos5taqwyp6axw.png" />
</p>
<h1 align="center">Schematics</h1>
<p align="center">This repository contains schematics for generating NGXS Store in Angular apps using the Angular CLI.</p>
<p align="center">
<a href="https://travis-ci.org/ngxs/schematics"><img src="https://travis-ci.org/ngxs/schematics.svg?branch=master" /></a>
<a href="https://github.com/ngxs/schematics/blob/master/LICENCE"><img src="https://img.shields.io/badge/License-MIT-green.svg" /></a>
<a href="https://codeclimate.com/github/ngxs/schematics/maintainability"><img src="https://api.codeclimate.com/v1/badges/f5c522a094a9303cac05/maintainability" /></a>
<a href="https://codeclimate.com/github/ngxs/schematics/test_coverage"><img src="https://api.codeclimate.com/v1/badges/f5c522a094a9303cac05/test_coverage" /></a>
<a href="https://now-examples-slackin-eqzjxuxoem.now.sh/"><img src="https://now-examples-slackin-eqzjxuxoem.now.sh/badge.svg"></a>
</p>
  
## Installation

### Install Angular CLI

You should be using `@angular/cli@6.1.0` or newer.

```bash
npm i -g @angular/cli
```

### Install NGXS Schematics
```bash
npm i @ngxs/schematics
```

### Easy way to add NGXS Store in your application
To add NGXS Store in application, you can use `ng add` with `@ngxs/schematics`.

```bash
ng add @ngxs/schematics
```

| Option | Description
| --- | ---
| --skipInstall | The flag to skip packages installing

Result:

```
Installed packages for tooling via npm.

  Adding npm dependencies

  ✅️ Added "@ngxs/devtools-plugin" into dependencies
  ✅️ Added "@ngxs/logger-plugin" into dependencies
  ✅️ Added "@ngxs/store" into dependencies
  ✅️ Added "@ngxs/schematics" into dependencies

  Adding @ngxs/schematics to angular.json

  UPDATE package.json (2920 bytes)
  ✅️ Setting NGXS Schematics as default

  👏 Create your first ngxs store by using starter kit: ng g ngxs-sk --spec

  🔍 Installing packages...
```

## Usage

### Create a NGXS Store
To generate store with `@ngxs/schematics`:

```bash
ng generate @ngxs/schematics:store --name todo
```

Result:

```ts
CREATE src/todo/todo.actions.ts
CREATE src/todo/todo.state.ts

```

Or with spec:

```bash
ng generate @ngxs/schematics:store --name todo --spec
```

Result:

```ts
CREATE src/todo/todo.actions.ts
CREATE src/todo/todo.state.spec.ts
CREATE src/todo/todo.state.ts
```

### Create a NGXS State
To generate state with `@ngxs/schematics`:

```bash
ng generate @ngxs/schematics:state --name todo
```

Result:

```ts
CREATE src/todo/todo.state.ts

```

Or with spec:

```bash
ng generate @ngxs/schematics:state --name todo --spec
```

Result:

```ts
CREATE src/todo/todo.state.spec.ts
CREATE src/todo/todo.state.ts
```

### Create a NGXS Actions
To generate state with `@ngxs/schematics`:

```bash
ng generate @ngxs/schematics:actions --name todo
```

Result:

```ts
CREATE src/todo/todo.actions.ts

```

## NGXS Starter Kit

### Usage
To generate store with `@ngxs/schematics:starter-kit`:

```bash
ng generate @ngxs/schematics:starter-kit
```

Result:

```ts
CREATE src/store/store.config.ts
CREATE src/store/store.module.ts
CREATE src/store/auth/auth.actions.ts
CREATE src/store/auth/auth.state.ts
CREATE src/store/auth/model/auth.model.ts
CREATE src/store/dashboard/index.ts
CREATE src/store/dashboard/states/dictionary/dictionary.actions.ts
CREATE src/store/dashboard/states/dictionary/dictionary.state.ts
CREATE src/store/dashboard/states/dictionary/model/dictionary-response.model.ts
CREATE src/store/dashboard/states/user/user.actions.ts
CREATE src/store/dashboard/states/user/user.state.ts
CREATE src/store/dashboard/states/user/model/person.model.ts
```

Or with spec:

```bash
ng generate @ngxs/schematics:starter-kit --spec
```

Result:

```ts
CREATE src/store/store.config.ts
CREATE src/store/store.module.ts
CREATE src/store/auth/auth.actions.ts
CREATE src/store/auth/auth.state.spec.ts
CREATE src/store/auth/auth.state.ts
CREATE src/store/auth/model/auth.model.ts
CREATE src/store/dashboard/index.ts
CREATE src/store/dashboard/states/dictionary/dictionary.actions.ts
CREATE src/store/dashboard/states/dictionary/dictionary.state.spec.ts
CREATE src/store/dashboard/states/dictionary/dictionary.state.ts
CREATE src/store/dashboard/states/dictionary/model/dictionary-response.model.ts
CREATE src/store/dashboard/states/user/user.actions.ts
CREATE src/store/dashboard/states/user/user.state.spec.ts
CREATE src/store/dashboard/states/user/user.state.ts
CREATE src/store/dashboard/states/user/model/person.model.ts
```
