'use strict';
module.exports = function () {
    var MindStorage = require('mindStorage');
    var options = require('./options');
    var async = require('async');
    var mindStorage = new MindStorage(options);

    async.waterfall([
        mindStorage.connect(),
        function (connection, cb) {
            var graph = connection.graph('testGraph');
            cb(null, graph);
        },
        function (graph, cb) {
            var manLabel = graph.label('man');
            var childLabel = graph.label('child');
            var isChildLabel = graph.label('isChild');
            var isFrendLabel = graph.label('isFrend');
            var parentNode = graph.node({title: 'parent node'}, manLabel);
            var childNode1 = graph.node({title: 'child node1'}, childLabel);
            var childNode2 = graph.node({title: 'child node2'}, childLabel);
            var childNode3 = graph.node({title: 'child node3'}, childLabel);
            graph.relation(isChildLabel, [parentNode], [childNode1, childNode2, childNode3]);
            graph.relation(isFrendLabel, [childNode1, childNode2, childNode3], [childNode1, childNode2, childNode3]);

            graph.save(function (err, result) {
                if (!err) {
                    console.info(result);
                    // create relations:
                    // man --isChild--> child
                    // man --isChild--> child
                    // man --isChild--> child
                    // child --isFrend--> child
                    // child --isFrend--> child
                    // child --isFrend--> child
                    // child --isFrend--> child
                    // child --isFrend--> child
                    // child --isFrend--> child
                    // child --isFrend--> child
                    // child --isFrend--> child
                    // child --isFrend--> child
                }
            });
            cb(null, graph);
        }
    ], function (err, result) {
        console.info(err, result);
    });
};
