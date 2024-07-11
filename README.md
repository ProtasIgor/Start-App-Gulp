# Сборка Gulp

## Начало работы

> Установите все необходимые пакеты Node из сборки с помощью команды:

```> npm install```

> Node.js - v14.21.3
> Ниже представлен список основных команд, используемых в сборке Gulp:

<pre>
{
  "scripts": {
    "start": "gulp dev",
    "html": "gulp html",
    "style": "gulp style",
    "script": "gulp script",
    "script-production": "gulp script --production",
    "clean": "gulp clean",
    "clean-build": "gulp cleanBuild",
    "dev": "gulp dev",
    "watch": "gulp watch",
    "build": "gulp build",
    "reliase": "gulp reliase",
    "reliase-production": "gulp reliase --production"
  }
}
</pre>

## Start

> Запускает режим разработки с использованием Gulp. Эквивалентен – Dev.

## Html

> Обрабатывает HTML-файлы: ~выполняет оптимизацию~.

## Style

> Обрабатывает SCSS-файлы: выполняет компиляцию SCSS, автоматическую расстановку префиксов и минификацию.

## Script

> Обрабатывает JavaScript-файлы в bundle.js.

## Script-production

> Обрабатывает JavaScript-файлы в режиме сжатия, выполняя дополнительную оптимизацию.

## Clean

> Удаляет основные файлы сайта (Build) с папки /build.

## Clean-build

> Удаляет основные файлы сайта (Reliase) с корневой директории.

## Dev

> Запускает режим разработки с использованием Gulp-Watcher и Browser-Server.

## Watch

> Запускает режим разработки с использованием Gulp-Watcher. Отслеживает изменения в файлах и автоматически выполняет соответствующие задачи Gulp.

## Build

> Выполняет полную сборку проекта и переносит её в корневую директорию.

## Reliase

> Очищает сборку -> Выполняет основные задачи Gulp -> Выполняет сборку в корневую директорию.

## Reliase-production

> Очищает сборку -> Выполняет основные задачи Gulp (минимизируя файлы .js) -> Выполняет сборку в корневую директорию.