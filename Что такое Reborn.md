---
label: "What is Reborn?"
icon: home
---
![](/static/retype-hero.png)

# Добро пожаловать в БАЗУ ЗНАНИЙ

[Reborn](https://retype.com/) — это ✨ сверхвысокопроизводительный ✨ генератор, который создает сайт на основе простых текстовых файлов. Сосредоточьтесь на своем письме, пока Reborn строит все остальное.

> Reborn представляет собой отличное решение для людей, обладающих техническими навыками, но не являющихся разработчиками. Этот инструмент позволяет им создавать веб-приложения с использованием самых передовых веб-стандартов.

Кодирование не требуется - всего лишь один файл Markdown, например [README.md](https://www.makeareadme.com/), поможет вам начать работу.

Веб-сайт [reborn](https://reborn.ru/) был создан с использованием Retype. Просмотрите [источник](https://github.com/Diversus23/reborn/blob/main/README.md), используемый для создания этой самой страницы.

Новый веб-сайт на основе Reborn может быть поднят и запущен в течение нескольких секунд после установки Reborn, что само по себе занимает всего несколько секунд. 👍

---

## Быстрый старт

Вы можете установить reborn с помощью `npm`, `yarn` или интерфейса командной строки `dotnet`.

В командной строке перейдите в папку, где у вас есть один или несколько файлов Markdown **.md**, например проект GitHub.

Затем выберите один из следующих инструментов, чтобы сначала установить `rebornapp`, а затем запустить Reborn с помощью команды запуска `reborn start` [команда](/guides/cli.md#reborn-start):

+++ NPM
```
npm install retypeapp --global
retype start
```
+++ Yarn
```
yarn global add retypeapp
retype start
```
+++ dotnet
```
dotnet tool install retypeapp --global
retype start
```
+++

Вот и все! Ваш новый веб-сайт на Retype должен быть готов к работе.

!!!
Перед установкой Reborn необходимо установить [npm](https://www.npmjs.com/get-npm), [Yarn](https://classic.yarnpkg.com/en/docs/install/), или [dotnet](https://dotnet.microsoft.com/download/dotnet-core). Требуется только один из этих трех инструментов, хотя все три могут быть установлены на вашем компьютере. Это на ваше усмотрение.  :raised_hands:

Поддерживаются все операционные системы, включая Mac, Windows и Linux.
!!!

---

## Features

#### :icon-shield-check: It just works

Retype has been built to be easy to use and should _"just work"_ out-of-the-box without any special configuration or troublesome setup.

#### :icon-zap: Lightning fast

Don't blink. Retype was built for speed.

#### :icon-gear: Easy install

[Installation](/guides/getting-started.md) takes only a few seconds. Then all you need is one Markdown **.md** file which Retype will start building a new website from.

#### :icon-plug: Powerful

Project level [configuration](/configuration/project.md) using **retype.yml** unlocks many more features and customization.

#### :icon-pencil: Simple formatting

Pages are [formatted](/guides/formatting.md) using Markdown syntax and Retype [components](/components/readme.md). Page level [configuration](/configuration/page.md) is available, such as setting a custom navigation [`label`](/configuration/page.md#label) or [`icon`](/configuration/page.md#icon).

#### :icon-sync: Live reload

If a change is detected, such as editing and saving an **.md** file, your Retype website will be updated almost instantly within the browser.

#### :icon-server: Host anywhere

Retype generates a basic HTML website that you can host on any web hosting service, or for free using [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site). No special server-side software or external dependencies are required. You can host your Retype site as a public website or as a private website inside your organization.

---

## Support

Do you have a technical support question, found a defect, or would like to make a feature request? Please create an [issue](https://github.com/retypeapp/retype/issues) and we will investigate right away.

Do you have a general inquiry? Please feel free to contact us at hello@retype.com.

We :heart: feedback.