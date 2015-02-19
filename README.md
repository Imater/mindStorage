# jsGitDb
db with versioning and sync between browser and node.js server

Sample usage:

```javascript
var jsGitDb = new jsGitDb();

element = {
    id: 1,
    title: "test title"
    text: "ok"
    tags: [1, 2, 3, 4]
};

jsGitDb.set(element, function(err, id){
    jsGitDb.sync();
    jsGitDb.get(id, function(err, savedElement){
        JSON.stringify(savedElement) == JSON.stringify(element)
    });
});
```


