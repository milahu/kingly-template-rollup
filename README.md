# kingly-template-rollup

a starter template with

* [kingly](https://github.com/brucou/kingly), a javascript finite state machine generator
* [rollup](https://github.com/rollup/rollup)
* [counter app](https://brucou.github.io/documentation/v1/tutorials/counter-application.html) demo of kingly

based on [sveltejs/template](https://github.com/sveltejs/template)

## FSM compiler

a javascript FSM compiler? not really :(

the [slim](https://github.com/brucou/slim) compiler
([kingly docs](https://brucou.github.io/documentation/v1/tooling/compiling.html))
will only generate JS code to create kingly state machines,
by calling the regular kingly API ... so its not a real compiler like svelte

## sample graph files

* https://github.com/brucou/slim/tree/master/tests/graphs

## graph editors

* kingly docs on [graph editing](https://brucou.github.io/documentation/v1/tooling/graph_editing.html)
* browser based
   * [https://github.com/jagenjo/litegraph.js](litegraph.js) (2000 stars, up to date)
   * [zoomcharts graph editor](https://apps.zoomcharts.com/graph-editor/) (export to JSON)
   * [mxgraph grapheditor](https://jgraph.github.io/mxgraph/javascript/examples/grapheditor/www/index.html) based on [mxgraph](https://jgraph.github.io/mxgraph/javascript/index.html) (UML, export to XML)
* desktop
   * [gephi](https://gephi.org/)

### litegraph.js

export to json (nodes, links, groups)

```
git clone --depth 1 https://github.com/jagenjo/litegraph.js.git
cd litegraph.js
npm install
node utils/server.js
```

## graph formats

* SO: [Best/more standard graph representation file format? (GraphSON, Gexf, GraphML? )](https://stackoverflow.com/questions/31321009)
   * https://github.com/jsongraph/json-graph-specification
