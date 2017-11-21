/* eslint-env node */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-markdown-it',

  included(app, parentAddon) {
    var target = (parentAddon || app);
    this._super.included.apply(this, arguments);
    this.importDependencies(target);
  },

  treeForVendor(vendorTree) {
    var markedPath = path.dirname(require.resolve('markdown-it'));
    var markedTree = new Funnel(markedPath, {
      srcDir: 'dist',
      destDir: 'markdownit'
    });
    if (vendorTree){
      return new MergeTrees([vendorTree, markedTree]);
    }
    return markedTree;
  },

  importDependencies(target) {
    target.import({
      development: 'vendor/markdownit/markdown-it.js',
      production: 'vendor/markdownit/markdown-it.min.js',
    }, {
      using: [
        { transformation: 'amd', as: 'markdown-it' }
      ]
    });
  }
};
