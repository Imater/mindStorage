'use strict';
var app = ['app/**/!(*spec).js'];
var test = ['app/*.spec.js'];
var vendor = [];

module.exports = {
  app: app,
  test: test,
  vendor: vendor,
  karma: vendor.concat(app).concat(test)
};
