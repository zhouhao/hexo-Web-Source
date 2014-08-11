title: "grunt-gh-pages: Deploy Your Website into GitHub Pages"
date: 2014-08-08 14:27:16
tags:
 - AngularJS
 - Firebase
 - Grunt
 - GitHub Pages
 - TodoApps
---
Recently, I am learning AngularJS, and I "believe" I have some progress, so that I cannot wait to puslish my work to the public.
This is the [repository for the AngularJS demo](https://github.com/webiseverything/AngularJS-Demo-Code) I write in GitHub. And I publish this work at this link: http://sbzhouhao.net/TodoApp-AngularJS-Firebase/#/todo, which is a static page hosted in [GitHub Pages](https://pages.github.com/).
<!-- more -->
The easiest and most intuitive way is to copy all the files in `dist` to `gh-pages` branch of my new repository. But I just wonder is there any other solution for this? As I know [hexo](http://hexo.io/) has a command: 
```
hexo deploy -m "XXXXXX"
```
to deploy your website.

Then, I just try my luck. Awesome! There is something called [***grunt-gh-pages***](https://github.com/tschaub/grunt-gh-pages).     

<h2>What I do is as following:</h2>  
<h3>1. Add <code>grunt-gh-pages</code> configyration into <code>Gruntfile.js</code></h3>
```
grunt.initConfig({

	// More code here

    // deploy to GitHub pages
    'gh-pages': {
      options: {
        base: 'dist',
        branch: 'gh-pages',
        repo: 'https://github.com/zhouhao/TodoApp-AngularJS-Firebase.git'
      },
      src: '**/*'
    }

    // More code here

});
```

###2. Register a task as `deploy` [This is optional, but I like the the way from `hexo`, so I register it as `deploy`]

```
grunt.registerTask('deploy', [
    'gh-pages'
]);
```

###Therefore, if you want to publish your website into GitHub Pages, you can:

```
# This will generate the dist folder, which contain everything about the website
grunt build
# This will deploy everything in dist folder into new gh-pages branch in defined repository
grunt deploy
```