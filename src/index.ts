import * as React from 'react';
import { Core } from './helpers';
import JsonView from './JsonView';
Core.Ensure(React, JsonView);

let object = {
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "bool": true,
            "null": null,
            "numbs": 1563516515.50,
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "url": "http://www.google.com/",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML", ["More", "Arrays"]]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
};

React.render(jsx(`<JsonView json={object} />`), document.getElementById("json-formatter"));