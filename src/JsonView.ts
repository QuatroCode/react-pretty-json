import * as React from 'react';
import Formatter from './Formatter';
import JsonObject from './Object';
import { Core } from './helpers';
Core.Ensure(React);

export default class JsonView extends React.Component<any, any> {
    render() {
        let contents = Formatter.valueToHtml(this.props.json);

        return jsx(`
            <div className="json-view">
                {contents}
            </div>
        `);
    }
}