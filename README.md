# VueWorkshop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Some summary

1.	Treat Components as entities which encapsulates view, logic, appearance. You can treat them as Classes in OOP
2.	Same principles here. Share Responsibility. Don’t Repeat Your Self. Single Responsibility principles
3.	It is easy here to make God component which holds and makes everything, but this is not maintainable solution
4.	If there is a large pieces of data should be passed to component, it is better to make one object instead of many properties. Object can have lambdas/closures as well so you can parametrize your component not only with data but with behavior as well.
5.	Sometimes it is better to have Storage Pattern than plug in Vuex storage (if you have no mutation, but only some shared state)

So main things are there HelloWorld component related to examples of initializing reactive/non-reactive properties
I put some comments as well, for different lifecycle component stages initializing.
Here as well pushing data to another component and receiving events

Alert component is an example of consuming API and render it.
Cause I did it on the fly, it is a good example for futher refactoring. Like extract table headers as a constants in a separate file, or it is possible to bind it with some internalization approach.
Row layout part could be separated in RowComponent which is only render row with pushed data etc.

It is good to see some ready widgets set for some free vue admin projects like this. https://madewithvuejs.com/vue-material-admin

It is really simple and ready tu use example http://vma.isocked.com/#/dashboard?ref=madewithvuejs.com

