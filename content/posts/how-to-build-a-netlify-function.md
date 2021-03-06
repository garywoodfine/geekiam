---
title: How to build a Netlify Function
description:  A tutorial demonstrating how to build a simple Netlify Function
summary: A tutorial demonstrating how to build a simple Netlify Function.
keywords:
  - How to build a Netlify Function
  - Building Serverless functions with netlify
feature:
  image: /uploads/posts/javascript/javascript-tutorials.svg
  alt: How to build serverless functions with Netlify
cardImage:
  image: /uploads/posts/javascript/netlify_tutorials.png
  alt: How to build serverless functions with Netlify
date: 2020-11-27T17:31:47.672Z
author: garywoodfine
tags:
  - javascript
  - serverless
categories:
  - software-development
---
[Serverless Computing](https://geekiam.io/what-is-serverless-computing/ "What is serverless computing") is a popular model 
that helps Start-Up companies develop and deploy their world changing apps quicker and easier, without actually having 
to worry about configuring and managing the hosting infrastructure.

Netlify is one of these great innovative Serverless Computing services that enables you launch a website in a matter of 
minutes and provides a whole of host great tools and services to not only help you develop your next big idea but also 
to help you manage it effortlessly!
 
 In fact, in developing our idea for Geek.I.Am, we've chosen Netlify as our platform of choice. In our opinion, Netlify 
 is a great platform if you want to learn something new, that you can really dig into and a platform that works just 
 fine for small projects or large projects. You can Use it for sandbox development or even something more substantial.
 
 Netlify offers web hosting and automation solutions for businesses. It speeds up the static site set up and lets 
 companies start hosting instantly. Users can drag and drop components onto the Netlify web application or import 
 resources from Git repositories.
 
 Netlify enables users to reference specific branches for Git repository hosting. The platform allows users to surpass 
 all requirements for set up and maintenance for launching web projects.
 
 <div class="flex bg-teal-lighter mb-4">
           <div class="w-16 bg-teal">
               <div class="p-4">
                   <svg 
                      class="h-8 w-8 text-white fill-current" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 512 512">
                       <path d="M437.019 74.981C388.667 26.629 324.38 0 256 0S123.333 26.63 74.981 74.981 0 187.62 0 256s26.629 132.667 74.981 181.019C123.332 485.371 187.62 512 256 512s132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.668-74.981-181.019zM256 470.636C137.65 470.636 41.364 374.35 41.364 256S137.65 41.364 256 41.364 470.636 137.65 470.636 256 374.35 470.636 256 470.636z"/>
                       <path d="M256 235.318c-11.422 0-20.682 9.26-20.682 20.682v94.127c0 11.423 9.26 20.682 20.682 20.682 11.423 0 20.682-9.259 20.682-20.682V256c0-11.422-9.259-20.682-20.682-20.682zM270.625 147.248A20.826 20.826 0 0 0 256 141.19a20.826 20.826 0 0 0-14.625 6.058 20.824 20.824 0 0 0-6.058 14.625 20.826 20.826 0 0 0 6.058 14.625A20.83 20.83 0 0 0 256 182.556a20.826 20.826 0 0 0 14.625-6.058 20.826 20.826 0 0 0 6.058-14.625 20.839 20.839 0 0 0-6.058-14.625z"/>
                   </svg>
               </div>
           </div>
           <div class="w-auto text-grey-darker items-center p-4">
               <span class="text-lg font-bold pb-4">
                  <a href="https://www.netlify.com/pricing/" target="_blank">Sign Up to Netlify Starter for free</a>
               </span>
               <div class="leading-tight">
               <ul>
                 <li>Automated builds from Git</li>
                 <li>Deploy to global Edge network</li>
                 <li>Site previews for every push</li>
                 <li>Instant rollbacks to any version</li>
                 <li>Deploy static assets & dynamic serverless functions</li>
                 </ul>
               </div>
           </div>
 </div> 
 

One of the great features Netlify provides to help you to implement dynamic content into your Jamstack static website,
is [Netlify functions](https://functions.netlify.com/ "Netlify Functions | Netlify").  

 
> Functions are scripts that you write and deploy with Netlify. The function’s code is hidden from the public, 
> but you can interact with it just like any other API service. Just as with your site code, Netlify takes care of 
> deploying your scripts into functions.

### Netlify CLI
 
 One of the tools that makes working with Netlify so easy and saves a lot of time, is the Netlify CLI.
 Netlify's CLI tool enables you to configure, manage, deploy and automate aspects of your development workflow directly
 using the command line!
 
 You can use the CLI to spin up  local development server and test your website as it would be once deployed! The CLI 
 comes with utilities to help you quickly and easily develop and test Netlify functions.
 [Get started with Netlify CLI](https://docs.netlify.com/cli/get-started/#installation) provides all the information 
 you need to get up and running with the Netlify-CLI quickly!
 
 In this, post we will be making use of the Netlify to develop and deploy a netlify function. We will be using Netlify 
 site to only host our functions.  Along the way we'll learn all the important basics we'll need to expand on this and 
 develop more complex functionalities.
 
### Create a local development directory

Create a directory on your local machine for your project. 

```shell script

mkdir  geekiam-tutorials && cd geekiam-tutorials

```
 At this point you could create a local and remote git repository to store your project, why not checkout our great
 guide on [How To Create A New Github Repository Using The Terminal](https://geekiam.io/how-to-create-a-new-github-repository-using-the-terminal/ "How To Create A New Github Repository Using The Terminal | Geek.I.Am")
 
 ### Create a Netlify Configuration file
 
 Our next step involves creating a `netlify.toml` which is a file where we configure how the site builds and where 
 your serverless functions can be located within our project. 
 
 This file is a [TOML configuration](https://toml.io/en/ "A config file format for humans") file 
 that aims to be a minimal configuration file format that’s easy to read due to obvious semantics. 
 
 TOML is designed to map unambiguously to a hash table. TOML should be easy to parse into data structures in a wide 
 variety of languages.
 
 Add a `[build]` section to inform netlify, your functions will be found in a folder we'll name `functions`.
 
 For the purpose of our application, we will be configuring the bare minimum, in order to just get our very simple 
 function out there. It is well worth taking the time to read the [File-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/#sample-file "File-based configuration | Netlify")
 to understand more about what is possible with File-based configuration.
 
 ```toml
[build]
   functions = "functions"
``` 
Next we'll create a new folder and name it `functions`, then we'll also create a new folder 
and name it `sayhello` which will be our first function folder.

```shell script
mkdir functions && cd functions
mkdir sayhello && cd sayhello

```
 
 ### Develop a simple function
 
 We now need to add a javascript file and open the file for editing in any editor of choice. In my case I will simply 
 use `nano`
 
 ```shell script
touch sayhello.js && nano sayhello.js
```
We can now add the following JavaScript code. Our function is going to really simple, in that it only will return a 
with a greeting.  However, it contains just enough complexity in it which requires some explanation.


```javascript
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Geek.I.Am',
      event: event,
    })
  }
}
```
 Netlify enables you to do develop functions supporting either synchronous or asynchronous invocation.
 For the sake of this tutorial we'll be making use of asynchronous. 
 
  Netlify uses AWS Lambda under the hood, so you can checkout documentation and learning materials about creating 
  AWS Lambda functions for what kind of code can go in there.
  
  Netlify gives us have a generous free tier limit, with up to 125.000 function invocations and a total of 100 hours 
  of run time every month. Functions have 128MB of memory and each can execute for up to 10 seconds.

 All functions must implement a method named `handler`
 
 ```javascript
exports.handler = async (event, context) => { }
```
If you are familiar with AWS Lambda, the function code will be familiar to you:

* `event` : object contains data on the request
* `context` : user information when using Identity for user authentication.

All we do in our function is return a simple [Javascript promise](https://geekiam.io/what-is-a-javascript-promise/ "What Is A Javascript Promise | Geek.I.Am")
 with a status code, message and event information.
 
 ```javascript
 return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Geek.I.Am',
      event: event,
    })
  }
```

### Initialise the Netlify Local environment

We can now test our function locally to ensure it works as expected. To this we can simply spin up
the `netlify dev` from our project root folder.

```shell script
cd ../.../../functions/..
netlify dev
```

This will launch netlify development environment, by default our site will be available on http://localhost:8888.

![netlify development environment](/uploads/netlify-dev.png)

We can now use cUrl to query call our lambda locally and test its response from the command line.
Curl is command line tool that enables you to interact with API's, to learn more about read [What is cUrl](https://geekiam.io/what-is-c-url/ "What is cUrl | Geek.I.Am")
```shell script
curl --location --request GET 'http://localhost:8888/.netlify/functions/sayHello'
```

We can also simply open a browser and navigate to the following Url
`http://localhost:8888/.netlify/functions/sayhello`  and will see the response of our simple function.
![netlify function](/uploads/netlify-functions-dev.png)

You have confirmed our functions worked! We can now deploy our super simple function to a production environment.

### Prepare deployment environment

We can now create and deploy the function to our production environment straight from the CLI. In our case we will 
manually create a new hosting and name our application `geekiam-tutorials`.

We don't need to leave the CLI at all, to create a website, in fact we can requisition our entire deployment 
infrastructure with one simple CLI command.

```shell script
netlify init --manual 
```
This will initiate a wizard workflow to enable netlify get some additional information it requires to set up a website 
for us.

![netlify deploy](/uploads/netlify-deploy.png)

### Deploy to staging environment

We can now use `netlify deploy` to deploy our functions. This will deploy our function to a "staging" server
to enable us to test our functions

![Netlify deploy Test ](/uploads/netlify-deploy-test.png)

we can test our staging environment function by using with the temporary url that has been created for us.

```shell script
curl --location --request GET https://5fc17a5bda660a47884aa02c--geekiam-tutorials.netlify.app

```

We can also visit the draft website Url and append the path to our function, we'll see our function respond

![netlify function](/uploads/netlify-deploy-test-browser.png)

### Deploy to production

Our function works as expected, so we can now deploy it to our production server using
```shell script
netlify deploy --prod
```

![netlify production deploy](/uploads/netlify-deploy-prod.png)

Once the site has been deployed, we can now use curl again to query function and test it
```shell script
curl --location --request GET https://geekiam-tutorials.netlify.app/.netlify/functions/sayhello
```
We can also visit the production url and append the path to our function, we will see the production instance of our function 
respond.

![netlify production](/uploads/netlify-production-function.png)


### Conclusion
We have managed to develop and deploy our function without really having to leave our console.  This makes working with 
netlify so easy and enables developers to concentrate on the things they do best, developing software applications.


