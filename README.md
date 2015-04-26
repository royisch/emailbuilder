# Nir Team Demo Application

#Technologies:
 - Node JS
 - Express
 - passportJs
 - AngularJS
 - Bower
 - Grunt


## Node modules installation :
 - run npm install
 - have a look at http://package.json.nodejitsu.com/ - basically , all the dependencies (dev + prod) will be installed.\
   usually the dev should contain testing frameworks , ui testing etc , while the production should be in the dependencies section (here its not well orginized)

## frameworks installation using bower :
 - run bower install
 - this command will take all the dependencies listed in the bower.json and install them.
 - the files will be installed in a folder called bower_components. this can be changed in the file .bowerrc that has this configuration
 - no try something else:
    - bower search jQuery - you will get a list of all the bower-ready jquery frameworks
    - bower install angular-ui --save
    - the action --save will actually write it in the bower.json dependencies file - you can also specify the version you want - look at http://bower.io/

## running grunt tasks:
 - grunt basically is a JS task runner , it allows you to automate actions that you do repeatedly  - pretty much like maven
 - there a a-lot of examples on grunt tasks , almost everytinh you can think of. here we will focus on :
    - scss compilation
    - css minification
    - js minification
  - but you can do a lot with this tool
  - now lets run in cmd - grunt build
