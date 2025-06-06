# [2025-05-23]

# Github repository: sharedRepository

#############

# FE setup

Angular playground. Shared repository (Alexandra Bozocea)

# Code management: GitHub

Create new GitHub repository

# Repository: Turborepo

from vscode, clone the empty Github repository, then create the base app with vite server

> npx create-turbo@latest -e with-vite

This template comes with a dummy frontend side found at: $\sharedRepository\my-turborepo\apps\web\
Will will replace this later with another template provided by Angular

# Server: Vite (works with Angular 16+)

https://vitejs.dev/config/server-options

> npm run dev (obsolete)
> npm run start

# Update node(js) v21.0.0 -> 22.5.1 -> 22.16.0

\*Angular works with node v22+

Download latest .msi windows file from nodejs.org and install
https://nodejs.org/en/download

# Update npm 9.6.5

// > npm update

# Install Angular 19

https://medium.com/@hiepxanh/angular-vite-example-is-crazy-fast-3ee4d730020c

> npm i @angular/cli @angular/compiler @angular/platform-browser @angular/core zone.js rxjs

# npm doesn't know about ng. link npm to ng

// > npm link @angular/cli

# Replace the FE base app with another Angular FE template app

> ng new temp-angular-app

Replace the old Vite FE template with the new Angular FE template:
Copy the content of the temp-angular-app in the $/web folder

Go to $/web and install all required packages:

> npm i

Start the FE server:

> npm run start

# Default port: 4200

#############

# BE setup

# REST API backend

Tutorial: https://geshan.com.np/blog/2021/10/nodejs-sqlite/

> npm install express

# Install SqLite3

Install on Windows: https://www.configserverfirewall.com/windows-10/install-sqlite3-on-windows-10/

Unzip file and copy to a location.

Add the location to the environment variable PATH

Test by running > sqlite3 --version

# sqlite3 commands

enter sqlite shell: > sqlite3
exit: > .exit
open existing database file \*.sqlite: > sqlite3 : > attach "bica.sqlite" as db1;

# start the BE

> npm run start

##############

# MD5 hash generator

https://www.md5hashgenerator.com/

##############

# FE Libraries

for web:
@angular/core
@angular/compiler
@angular/forms
@angular/router
@ngx-translate/core
@ngx-translate/http-loader
ts-md5
moment

for packages:
@angular/cdk
@angular/core
@angular/forms
@ngx-translate/core

# BE Libraries

@sqlite3 : 9.6.5
@sequelize/core
express
cors
typescript
@types/express
@types/node
dotenv
ts-node
jsonwebtoken
@types/jsonwebtoken

##################

# update

> npm install -g npm-check-updates

> ncu -u

> npm i
