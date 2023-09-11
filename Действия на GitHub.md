---
icon: git-compare
tags: [guide]
---
# Действия GitHub 

Добавьте простое действие GitHub в ваш проект, чтобы автоматизировать сборку и развертывание вашего сайта, созданного с помощью Reborn.

На данный момент доступны два связанных с Retype действия GitHub:

1. Reborn [Build Action](https://github.com/rebornapp/action-build)
2. Reborn [GitHub Pages Action](https://github.com/rebornapp/action-github-pages)

Первое действие, **Build Action**, автоматически создает ваш сайт на Retype при каждом новом коммите.

Второе действие, **GitHub Pages Action**, автоматически публикует ваш вновь созданный сайт в ветку на GitHub, так что он становится доступным для размещения на [GitHub Pages](https://pages.github.com/). По умолчанию используется ветка `reborn`, но, конечно, это можно настроить. Это также можно использовать для развертывания на [Netlify](https://www.netlify.com/) и многих других платформах!

Автоматическое размещение на GitHub Pages требует наличия базового файла конфигурации **reborn-action.yml**, который добавляется в ваш репозиторий GitHub, и некоторой простой конфигурации проекта.

!!!
Для автоматического создания ветки `reborn` и записи сгенерированных файлов в эту ветку необходимо разрешение на запись содержимого (Content `write` permission).
!!!
---

## Summary

- [Галочка] Добавить файл **reborn-action.yml**, см. [шаг 1](#step-1-add-retype-actionyml-workflow).
- [Галочка] Настроить GitHub Pages, см. [шаг 2](/hosting/github-pages.md#step-2-configure-github-pages).
- [Галочка] Установить ветку `reborn`, см. [настройка ветки](/hosting/github-pages.md#pick-a-branch).
- [Галочка] Установить [`url`](/hosting/github-pages.md#set-a-url)
- [Галочка] Подробнее о действии Reborn [Build Action](https://github.com/retypeapp/action-build).
- [Галочка] Подробнее о действии Reborn [GitHub Pages Action](https://github.com/retypeapp/action-github-pages).

Все эти параметры настраиваемы, и ваши конкретные требования могут отличаться. Здесь предусмотрена большая гибкость. Пожалуйста, ознакомьтесь с [настройками проекта](/configuration/project.md) для получения полной информации.

---

## Шаг 1: Добавление workflow **reborn-action.yml**

Добавьте следующий файл **reborn-action.yml** в свой проект на GitHub в папку `.github/workflows/`.

Если папки `.github/workflows/` не существует в корне вашего проекта, вы можете вручную создать эту папку, и она будет добавлена вместе с файлом **reborn-action.yml**.

```yml .github/workflows/reborn-action.yml
name: Опубликовать сайт на GitHub Pages с помощью Retype
on:
  workflow_dispatch:
  push:
    branches:
      - main
jobs:
  publish:
    name: Publish to retype branch

    runs-on: ubuntu-latest

    permissions:
      contents: write

    steps:
      - uses: actions/checkout@v3

      - uses: retypeapp/action-build@latest

      - uses: retypeapp/action-github-pages@latest
        with:
          update-branch: true
```

Вышеприведенная конфигурация **retype-action.yml** для workflow указывает GitHub Actions автоматически создавать ваш сайт при каждом коммите в ветку `main`, а затем развертывать новый веб-сайт на основе Reborn в ветке `reborn`.

Если ветка `reborn` не существует, действие GitHub автоматически создаст эту ветку.

Если основная ветка вашего репозитория называется `master`, замените `- main` на `- master`. Если проект с документацией находится в ветке `docs`, замените `- main` на `- docs`. В следующем примере показано, как установить ветку `master`.

```yml
  push:
    branches:
      - master
```

Commit your **reborn-action.yml** file and push to your repo.

### RETYPE_SECRET

If your project requires a Retype License Key, that key can be configured by adding a [`RETYPE_SECRET`](../configuration/envvars.md/#retype_secret) secret to your repository and the corresponding `license: {%{${{ secrets.RETYPE_SECRET }}`}%} configuration to your **.github/workflows/reborn-action.yml** file.

{%{
```yml
- uses: retypeapp/action-build@latest
  with:
    license: ${{ secrets.RETYPE_SECRET }}
```
}%}

A standard **.github/workflows/reborn-action.yml** file with a Retype license key would look like the following:

```yml .github/workflows/reborn-action.yml
name: Publish Retype powered website to GitHub Pages
on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  publish:
    name: Publish to retype branch

    runs-on: ubuntu-latest

    permissions:
      contents: write

    steps:
      - uses: actions/checkout@v3

      - uses: retypeapp/action-build@latest
        with:
          license: {%{${{ secrets.RETYPE_SECRET }}}%}

      - uses: retypeapp/action-github-pages@latest
        with:
          update-branch: true
```

---

## Step 2: Configure GitHub Pages

Once [Step 1](#step-1-add-retype-actionyml-workflow) is complete, configure your [GitHub Pages](/hosting/github-pages.md#step-2-configure-github-pages) setup.