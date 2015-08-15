# Scope and Debugging

##### LEARNING OBJECTIVES
- Review function scope
- Understand avoiding global scope (`window`)


```
function() {
  var prompt;
  window.prompt();
}
```


*functions.js*
```
```

*program.js*
```
sayMyName(name);
```


```
(function(){
  var name = 'test';
  console.log(asdf);
})();
```
