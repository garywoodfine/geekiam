---
title: Getting started with nuxt
description: Learn how to create server-side rendered applications by using Nuxt.js, how to configure your application for development.
summary: In this tutorial, we’re going to learn how to create server-side rendered applications by using Nuxt.js.
keywords:
  - how to start a project with nuxt
  - what is nuxt
  - learning nuxt
feature:
  image: /uploads/posts/javascript/nuxt-logo.svg
  alt: Getting started with nuxt
cardImage:
  image: /uploads/twitter/javascript/nuxt-tutorials.png
  alt: Getting started with Nuxt
date: 2021-01-22T17:30:08.937Z
author: garywoodfine
tags:
  - nuxt
  - javascript
  - vue
categories:
  - software-development
---
When getting started with developing new applications, developers can often spend a lot of time agonising over which 
framework is going to be the best choice for their needs.  There are a number of points to consider like which Frontend
framework to consider .i.e. Vue, React, Angular, Meteor etc. and even once you've decided that, then comes the added
complication which Framework will you use on top your framework. 

We faced this exact same dilemma when we started with the development of Geek.I.Am, although we were always certain we
were going to use Vue.js, as it is our preferred javascript framework, we were uncertain which vue based framework would
be best. We initially started developing the website making use of [Gridsome - A Jamstack framework for Vue.Js](https://gridsome.org/ "Gridsome - A Jamstack framework for Vue.Js")
after a year, we decided to port our website to make use of [NuxtJS - The intuitive Vue Framework](https://nuxtjs.org/ "NuxtJS - The intuitive Vue Framework" )
for reasons discussed in [Why move to Nuxt from Gridsome?](https://garywoodfine.com/why-move-to-nuxt-from-gridsome/ "Why move to Nuxt from Gridsome?")

In this tutorial, we going to walk through some of the basic steps we went through in starting to create out server-side
rendered application using NuxtJS, how we configured our development environment and deploy our new application to our
Netlify hosting.

### What is Nuxt.JS

> Nuxt is a progressive framework based on Vue.js to create modern web applications. 
> It is based on Vue.js official libraries (vue, vue-router and vuex) and powerful development tools
> (webpack, Babel and PostCSS). Nuxt’s goal is to make web development powerful and performant with great developer 
> experience in mind

At it core NuxtJS enables developers to create three types of applications 

1. Static Generated website
   
   Static generated applications do not require API requests to fetch the contents of the pages, i.e. the contents 
   are already included in the HTML file. An example of a static site is a portfolio website or landing pages for 
   for lead generation.
   
2. Single Page Application
   
   JavaScript frameworks like React, Angular, Emberjs, Vue, etc are single page application whose contents are 
   dynamically populated with faster transitions. SPAs generally make use of the HTML5 history API or the location Hash
   for routing.
   
3. Server Side Rendered Applications (SSR)
   
   Server-Side Rendering is a technique used to fetch and display client-side data on the server to send a fully 
   rendered page to the client. This is a good approach to get good SEO for your application.

### Creating a Nuxt application

There best way to create a nuxt application is to make use of the NPM package runner (`npx`) a tool intended 
to help using packages from the npm registry — a similar experience to installing and manage dependencies hosted on 
the registry, npx makes it easy to use CLI tools and other executables hosted on the registry. 

To check if you have `npx` installed you can use `npx --version` which should respond with the version number. If `npx` 
not installed you can install it as follows

```shell
npm install -g npx
```

We can now proceed to creating our nuxt application using the `create-nuxt-app` command.

```shell
# use create0nuxt-app and provide a name of your application
npx create-nuxt-app geekiam-sample
```
This will initiate a wizard process which will ask several questions regarding the type of application you would like 
to create. For the purpose of this tutorial, we will install axios, linting and Prettier configurations to create a 
Server Side Rendered application.

![Create nuxt app ](/uploads/create-nuxt-app.png "create nuxt app")

Once the wizard has completed,  we can then change into the project directory created.

![Create nuxt app finish ](/uploads/create-nuxt-finish.png "create nuxt app finish")

We can now run the following command in our terminal:
```shell
 cd nuxt-tutorial-app
 npm run dev
```

![Create nuxt sampe app ](/uploads/create-nuxt-sample.png "create nuxt sample app")
  
### Conclusion

We have created our initial Nuxt Application and have it running.  We now proceed to the next tutorial to [understand
nuxt project structure](https://geekiam.io/understanding-nuxt-project-structure "Understanding the nuxt project structure | Geek.I.Am")