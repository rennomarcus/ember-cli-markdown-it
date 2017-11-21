# ember-cli-markdown-it

Ember addon that uses [markdown-it](https://github.com/markdown-it/markdown-it)
to parse markdown language to html.

## Installation

`ember install ember-cli-markdown-it`

## Usage

`{{markdown-html text options}}`

Where

* text - string to be parsed by markdown-it
* options - object to pass to markdown-it 

See the options and how they work in their [project here](https://github.com/markdown-it/markdown-it#init-with-presets-and-options)

Example of a component using [ember-highlightjs-shim](https://github.com/rennomarcus/ember-highlightjs-shim)
to highlight some code syntax

    import Ember from 'ember';
    import hljs from highlight;

    export default Ember.Component.extend({
      markdownOptions: {
        // options to include highlight.js
        highlight: function (str, lang) {
          let codeValue;
          if (lang && hljs.getLanguage(lang)) {
            codeValue = hljs.highlight(lang, str, true).value;
          } else {
            codeValue = hljs.highlightAuto(str).value;
          }
          return `<pre><code class="hljs ${lang}">${codeValue}</code</pre>`;
        }
      }
    });

and then

    {{markdown-html "my content" options=markdownOptions}}

## Issues/Suggestions
If you have any question or suggestion, please open an issue.

## Development
* `git clone https://github.com/rennomarcus/ember-cli-markdown-it.git`
* `ember s`

## Tests
* `ember test` or `ember s` and go to /tests
