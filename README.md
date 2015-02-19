# jsGitDb
db with versioning and sync between browser and node.js server

Sample usage:

## 1. Save element in browser
```javascript
var jsGitDb = new jsGitDb({
    url: new jsGitDb.WebsocketClient("ws://localhost:9898/testDbSocket"),
    storage: new jsGitDb.AutoLocalStorage("testDb")
});

var element = {
    id: 1,
    title: "test title",
    text: "ok",
    tags: [1, 2, 3, 4]
};

jsGitDb.set(element, function(err, id){
    jsGitDb.get(id, function(err, savedElement){
        if(JSON.stringify(savedElement) === JSON.stringify(element)){
            console.info("data saved ok. Id = " + id); //Id = 4e29c1af880a04b58e2bf1aa4ff25f718ca13d6e
        }
    });
    jsGitDb.sync().then(function(err, status){
        console.info("sync status = ", status);
    });
});
```

## 2. Get element at server
```javascript
var jsGitDb = new jsGitDb({
    url: new jsGitDb.WebsocketServer("testDbSocket"),
    storage: new jsGitDb.MongoStorage("testDB")
});

var sampleId = "4e29c1af880a04b58e2bf1aa4ff25f718ca13d6e";

jsGitDb.get(sampleId, function(err, syncedElement){
    if(JSON.stringify(syncedElement) === JSON.stringify({
            id: 1,
            title: "test title",
            text: "ok",
            tags: [1, 2, 3, 4]})) {
        console.info("data can be read on server", savedElement)
    }
});
```

