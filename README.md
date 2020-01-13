# ManicardWebsite

## Getting Started

### Dependencies

1. Install [VSCode](https://code.visualstudio.com/)
2. Install [NodeJS](https://nodejs.org/)
3. Install [Yarn](https://yarnpkg.com)
4. Install [Angular](https://cli.angular.io/)
5. Open this project in VSCode

```sh
yarn
yarn run start --open
```

### Structure

Configurations are at the root of the project. The source code is mostly inside `src/`.

```tree
src
├── app                                   // Entry point
│   ├── core                              // Component who is displaed on all pages of application
│       ├── header
│       ├── footer
│       ├── menu
│       ├── core.module.ts                // Export all child component
│   ├── pages
│       ├── page1
│           ├── states                    // State management
│           ├── components                // It's optional. If he have childs component
│           ├── interfaces
│           ├── enums
│           ├── directives
│           ├── services
│           ├── pipes
│           ├── class
│           ├── utils
│           ├── page1.component.html
│           ├── page1.component.ts
│           ├── page1.component.scss
│           ├── page1.component.spec
│           ├── page1.module.ts           // Lazy loading
│           ├── page1-routing.module.ts   // Lazy loading
│       ├── pages-routing.module.ts       // Lazy lodaing
│       ├── pages.module.ts
│   ├── shared
│       ├── states
│       ├── directives
│       ├── components
│       ├── class
│       ├── enums
│       ├── interfaces
│       ├── interceptors
│       ├── services
│       ├── validators
│       ├── utils
│       ├── factories
│       ├── guards
│       ├── shared.module.ts              // Export all child component without services
│   ├── app-routing.module.ts             // Lazy lodaing
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.module.ts
├── assets                                // Included in the build files
│   ├── fonts
│   ├── i18n                              // Translations files
│   ├── icons
│   ├── images
│   └── logos
├── environments                          // Configuration
│   ├── environment.prod.ts
│   └── environment.ts
├── styles                                // Stylesheet
│   ├── _file-name.scss
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss                           // Theme
└── test.ts
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
