# jsGitDb
db with versioning and sync between browser and node.js server

Sample usage:

## 1. Save element in browser
```javascript
var jsGitDb = new jsGitDb(
    url: "http://localhost:9898/jsGitDb",
    storage: jsGitDb.AutoLocalStorage("testDb")
);

var element = {
    id: 1,
    title: "test title"
    text: "ok"
    tags: [1, 2, 3, 4]
};

jsGitDb.set(element, function(err, id){
    jsGitDb.get(id, function(err, savedElement){
        if(JSON.stringify(savedElement) == JSON.stringify(element)){
            console.info("data saved ok. Id = " + id); //Id = 4e29c1af880a04b58e2bf1aa4ff25f718ca13d6e
        }
    });
    jsGitDb.sync().then(function(err, status){
        console.info("sync status = ", status);
    });
});
```

## 2. Get element in server
```javascript
var jsGitDb = new jsGitDb(
    url: "http://localhost:9898/jsGitDb",
    storage: jsGitDb.MongoStorage("testDB")
);

var element = {
    id: 1,
    title: "test title"
    text: "ok"
    tags: [1, 2, 3, 4]
};

var sampleId = "4e29c1af880a04b58e2bf1aa4ff25f718ca13d6e";

jsGitDb.get(sampleId, function(err, syncedElement){
    if(JSON.stringify(savedElement) == JSON.stringify(element)){
        console.info("data can be read on server", savedElement)
    }
});
```

