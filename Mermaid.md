# Mermaid

[Mermaid](https://mermaid-js.github.io/mermaid) - это инструмент для создания диаграмм и графиков, которые можно определить внутри блоков кода в Markdown.

![](/static/mermaid-header.png)

## Синтаксис компонентов

Для создания диаграммы Mermaid схожего с синтаксисом блоков кода, необходимо использовать символ `` ``` `` вокруг кода и указать языковую спецификацию `mermaid`.

~~~ Пример диаграммы Mermaid
```mermaid
graph LR
    A[Твердый край] -->|Текст ссылки| B(Круглый край)
    B --> C{Решение}
    C -->|Один| D[Результат один]
    C -->|Два| E[Результат два]
```
~~~

```mermaid
graph LR
    A[Твердый край] -->|Текст ссылки| B(Круглый край)
    B --> C{Решение}
    C -->|Один| D[Результат один]
    C -->|Два| E[Результат два]
```

---

## Директивы

Mermaid [директивы](https://mermaid-js.github.io/mermaid/#/directives) могут быть настроены с использованием рекомендованного синтаксиса `%%{init: { }}%%` в качестве первой строки внутри блока `` ```mermaid ``.

Из документации Mermaid:

> Директивы дают автору диаграммы возможность изменять внешний вид диаграммы перед отображением, изменяя примененную конфигурацию.

Все директивы Mermaid поддерживаются Retype.

Следующий пример демонстрирует применение `theme` к диаграмме:

~~~
```mermaid
%%{init: { 'theme': 'forest' }}%%
graph LR
    A[Твердый край] -->|Текст ссылки| B(Круглый край)
    B --> C{Решение}
    C -->|Один| D[Результат один]
    C -->|Два| E[Результат два]

```
~~~

```mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'forest' }}%%
graph LR
    A[Твердый край] -->|Текст ссылки| B(Круглый край)
    B --> C{Решение}
    C -->|Один| D[Результат один]
    C -->|Два| E[Результат два]
```

### Блок подсветки синтаксиса

Для создания блока кода Mermaid с подсветкой синтаксиса вместо отображения содержимого, используйте языковую спецификацию `mermaid-js` для блока кода.

~~~
```mermaid-js
%%{init: { 'theme': 'forest' }}%%
graph LR
    A[Твердый край] -->|Текст ссылки| B(Круглый край)
    B --> C{Решение}
    C -->|Один| D[Результат один]
    C -->|Два| E[Результат два]
```
~~~

```mermaid-js
%%{init: { 'logLevel': 'debug', 'theme': 'forest' }}%%
graph LR
    A[Твердый край] -->|Текст ссылки| B(Круглый край)
    B --> C{Решение}
    C -->|Один| D[Результат один]
    C -->|Два| E[Результат два]
```

---

## Типы диаграмм

### Блок-схема

Более подробно в документации Mermaid [здесь](https://mermaid-js.github.io/mermaid/#/flowchart).

~~~
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
~~~

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

### Диаграмма последовательности

Более подробно в документации Mermaid [здесь](https://mermaid-js.github.io/mermaid/#/sequenceDiagram).


~~~
```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Привет Джон, как дела?
    loop Проверка состояния здоровья
        John->>John: Борьба с гипохондрией
    end
    Note right of John: Правильные мысли <br/>побеждают!
    John-->>Alice: Отлично!
    John->>Bob: А у тебя как?
    Bob-->>John: Очень хорошо!
```
~~~

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Привет Джон, как дела?
    loop Проверка состояния здоровья
        John->>John: Борьба с гипохондрией
    end
    Note right of John: Правильные мысли <br/>побеждают!
    John-->>Alice: Отлично!
    John->>Bob: А у тебя как?
    Bob-->>John: Очень хорошо!
```

### Диаграмма Ганта

Более подробно в документации Mermaid [здесь](https://mermaid-js.github.io/mermaid/#/gantt).

~~~
```mermaid
gantt
dateFormat  YYYY-MM-DD
title Добавление диаграммы Ганта в Mermaid
excludes weekdays 2014-01-10

section Секция А
Завершенная задача         :done,    Описание 1, 2014-01-06,2014-01-08
Активная задача            :active,  Описание 2, 2014-01-09, 3d
Будущая задача             :         Описание 3, после Описания 2, 5d
Будущая задача 2           :         Описание 4, после Описания 3, 5d
```
~~~

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Добавление диаграммы Ганта в Mermaid
excludes weekdays 2014-01-10

section Секция А
Завершенная задача         :done,    Описание 1, 2014-01-06,2014-01-08
Активная задача            :active,  Описание 2, 2014-01-09, 3d
Будущая задача             :         Описание 3, после Описания 2, 5d
Будущая задача 2           :         Описание 4, после Описания 3, 5d
```

### Диаграмма классов

Более подробно в документации Mermaid [здесь](https://mermaid-js.github.io/mermaid/#/classDiagram).

~~~
```mermaid
classDiagram
Class01 <|-- КлассСОченьДлиннымИменем : Круто
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Где я?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Крутая метка
```
~~~

```mermaid
classDiagram
Class01 <|-- КлассСОченьДлиннымИменем : Круто
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Где я?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Крутая метка
```

### Диаграмма сущность-связь

Более подробно в документации Mermaid [здесь](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram).

~~~
```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : размещает
    ORDER ||--|{ LINE-ITEM : содержит
    CUSTOMER }|..|{ DELIVERY-ADDRESS : использует
```
~~~

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : размещает
    ORDER ||--|{ LINE-ITEM : содержит
    CUSTOMER }|..|{ DELIVERY-ADDRESS : использует
```

### Путешествие пользователя

Более подробно в документации Mermaid [здесь](https://mermaid-js.github.io/mermaid/#/user-journey).

~~~
```mermaid
journey
    title Мой рабочий день
    section Пойти на работу
      Приготовить чай: 5: Я
      Подняться наверх: 3: Я
      Работать: 1: Я, Кот
    section Пойти домой
      Спуститься вниз: 5: Я
      Сесть: 5: Я
```
~~~

```mermaid
journey
    title Мой рабочий день
    section Пойти на работу
      Приготовить чай: 5: Я
      Подняться наверх: 3: Я
      Работать: 1: Я, Кот
    section Пойти домой
      Спуститься вниз: 5: Я
      Сесть: 5: Я
```

[!ссылка :mermaid: Сайт Mermaid](https://mermaid-js.github.io/mermaid/)