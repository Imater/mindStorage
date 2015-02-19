# jsGitDb
db with versioning and sync between browser and node.js server

Sample usage:

##browser side
```javascript
var jsGitDb = new jsGitDb(
    url: "http://localhost:9898/jsGitDb"
);

element = {
    id: 1,
    title: "test title"
    text: "ok"
    tags: [1, 2, 3, 4]
};

jsGitDb.set(element, function(err, id){
    jsGitDb.get(id, function(err, savedElement){
        if(JSON.stringify(savedElement) == JSON.stringify(element)){
            console.info("data saved ok")
        }
    });
    jsGitDb.sync().then(function(err, status){
        console.info("sync status = ", status);
    });
});
```


