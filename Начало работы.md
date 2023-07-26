---
order: 100
icon: rocket
tags: [guide]
---
# Начало работы

Начать работу с Retype очень просто, и вы можете быть готовы к работе всего за несколько секунд.

Ознакомьтесь с [Быстрый старт](/README.md#quick-start) для сжатого процесса или продолжите здесь с подробными инструкциями.

!!!
Пожалуйста, ознакомьтесь с [Retype CLI](cli.md) для полных деталей по каждой команде.
!!!

---

## Предварительные требования

Retype устанавливается с помощью [`npm`](https://www.npmjs.com/get-npm), [`yarn`](https://classic.yarnpkg.com/en/docs/install/) или [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) CLI.

Вам потребуется только один из этих трех менеджеров пакетов в качестве предварительного требования, хотя все три также могут быть установлены на вашем компьютере. Это зависит от вас. :raised_hands:

| Package Manager | Supported Platforms |
| --- | --- |
| [`npm`](https://www.npmjs.com/get-npm) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="dark"]
| [`yarn`](https://classic.yarnpkg.com/en/docs/install/) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="dark"]
| [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="dark"]

---

## Установка

Установка Retype займет всего несколько секунд с помощью любой из следующих команд. Выберите команду в зависимости от менеджера пакетов, который установлен на вашем компьютере.

+++ npm
```
npm install retypeapp --global
retype start
```
+++ yarn
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

Вот и все! :tada: Ваш новый веб-сайт Retype должен быть готов к работе. :tada:

!!!
Если у вас уже установлен CLI `dotnet` на вашем компьютере, установка с помощью `dotnet tool install retypeapp --global` будет самым быстрым вариантом, но любой из вариантов должен установиться за считанные секунды. Они все дают одинаковый результат и работают с одинаковой производительностью. Размер пакета `dotnet` является самым маленьким.
!!!

---

## Update

Обновите до последней версии Retype с помощью одной из следующих команд для менеджера пакетов, с помощью которого вы изначально установили Retype. Например, если вы использовали `npm` для установки Retype, выполните команду обновления `npm`, чтобы обновить Retype локально.

+++ npm
```
npm update retypeapp --global
```
+++ yarn
```
yarn global upgrade retypeapp
```
+++ dotnet
```
dotnet tool update retypeapp --global
```
+++
Все файлы и папки, связанные с Retype в вашем проекте, можно удалить, такие как файл **retype.yml** и сгенерированная папка `.retype`.

---

## Особенности платформы

Пакет `retypapp` для **NPM** по умолчанию является набором нескольких пакетов, специфичных для разных платформ. При установке установщик автоматически обнаруживает и выбирает правильный пакет для вашей платформы из этого набора.

Этот набор обеспечивает удобство, но увеличивает размер загрузки.

Установщик пакетов **dotnet** автоматически загрузит пакет, специфичный для вашей платформы.

Для **NPM** и **Yarn** также есть возможность установить меньшие пакеты для каждой отдельной платформы без объединения в набор. В настоящее время поддерживаются четыре отдельные платформы, которые можно устанавливать независимо от основного пакета `retypeapp`.

### :icon-package: macOS

+++ npm
```
npm install retypeapp-darwin-x64 --global
```
+++ yarn
```
yarn global add retypeapp-darwin-x64
```
+++ dotnet
```
dotnet tool install retypeapp --global
```
+++

OS                                    | Version                 | Architectures     | { class="compact" }
--------------------------------------|-------------------------|-------------------|
[macOS][macOS]                        | 10.15+                  | x64, Arm64        |

[macOS]: https://support.apple.com/macos

### :icon-package: Windows

+++ npm
```
npm install retypeapp-win-x64 --global
# or
npm install retypeapp-win-x86 --global
```
+++ yarn
```
yarn global add retypeapp-win-x64
# or
yarn global add retypeapp-win-x86
```
+++ dotnet
```
dotnet tool install retypeapp --global
```
+++

OS                                    | Version                 | Architectures     | { class="compact" }
--------------------------------------|-------------------------|-------------------|
[Windows 10 Client][Windows-client]   | Version 1607+           | x64, x86, Arm64   |
[Windows 11][Windows-client]          | Version 22000+          | x64, x86, Arm64   |
[Windows Server][Windows-Server]      | 2012+                   | x64, x86          |
[Windows Server Core][Windows-Server] | 2012+                   | x64, x86          |
[Nano Server][Nano-Server]            | Version 1809+           | x64               |

[Windows-client]: https://www.microsoft.com/windows/
[Windows-lifecycle]: https://support.microsoft.com/help/13853/windows-lifecycle-fact-sheet
[win-client-docker]: https://hub.docker.com/_/microsoft-windows
[Windows-Server-lifecycle]: https://learn.microsoft.com/windows-server/get-started/windows-server-release-info
[Nano-Server]: https://learn.microsoft.com/windows-server/get-started/getting-started-with-nano-server
[Windows-Server]: https://learn.microsoft.com/windows-server/

### :icon-package: Linux

+++ npm
```
npm install retypeapp-linux-x64 --global
```
+++ yarn
```
yarn global add retypeapp-darwin-x64
```
+++ dotnet
```
dotnet tool install retypeapp --global
```
+++

OS                                    | Version               | Architectures     | { class="compact" }
--------------------------------------|-----------------------|-------------------|
[Alpine Linux][Alpine]                | 3.15+                 | x64, Arm64, Arm32 |
[CentOS Linux][CentOS]                | 7                     | x64               |
[CentOS Stream Linux][CentOS]         | 8                     | x64               |
[Debian][Debian]                      | 10+                   | x64, Arm64, Arm32 |
[Fedora][Fedora]                      | 36+                   | x64               |
[openSUSE][OpenSUSE]                  | 15+                   | x64               |
[Oracle Linux][Oracle-Linux]          | 7+                    | x64               |
[Red Hat Enterprise Linux][RHEL]      | 7+                    | x64, Arm64        |
[SUSE Enterprise Linux (SLES)][SLES]  | 12 SP2+               | x64               |
[Ubuntu][Ubuntu]                      | 18.04+                | x64, Arm64, Arm32 |

[Alpine]: https://alpinelinux.org/
[Alpine-lifecycle]: https://alpinelinux.org/releases/
[CentOS]: https://www.centos.org/
[CentOS-lifecycle]:https://wiki.centos.org/FAQ/General
[CentOS-docker]: https://hub.docker.com/_/centos
[CentOS-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-centos8
[Debian]: https://www.debian.org/
[Debian-lifecycle]: https://wiki.debian.org/DebianReleases
[Debian-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-debian10
[Fedora]: https://getfedora.org/
[Fedora-lifecycle]: https://fedoraproject.org/wiki/End_of_life
[Fedora-docker]: https://hub.docker.com/_/fedora
[Fedora-msft-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-fedora32
[Fedora-pm]: https://fedoraproject.org/wiki/DotNet
[OpenSUSE]: https://opensuse.org/
[OpenSUSE-lifecycle]: https://en.opensuse.org/Lifetime
[OpenSUSE-docker]: https://hub.docker.com/r/opensuse/leap
[OpenSUSE-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-opensuse15
[Oracle-Linux]: https://www.oracle.com/linux/
[Oracle-Lifecycle]: https://www.oracle.com/a/ocom/docs/elsp-lifetime-069338.pdf
[RHEL]: https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux
[RHEL-lifecycle]: https://access.redhat.com/support/policy/updates/errata/
[RHEL-msft-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-rhel8
[RHEL-pm]: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/developing_.net_applications_in_rhel_8/using-net-core-on-rhel_gsg#installing-net-core_gsg
[SLES]: https://www.suse.com/products/server/
[SLES-lifecycle]: https://www.suse.com/lifecycle/
[SLES-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-sles15
[Ubuntu]: https://ubuntu.com/
[Ubuntu-lifecycle]: https://wiki.ubuntu.com/Releases
[Ubuntu-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-ubuntu-2004
[glibc]: https://www.gnu.org/software/libc/
[musl]: https://musl.libc.org/