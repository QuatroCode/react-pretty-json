import * as React from 'react';
import Formatter from './formatter';

export interface Props {
    json: any;
    spaces?: number;
}

export interface State { }

export default class JsonView extends React.Component<Props, State> {
    static defaultProps: Props = {
        json: undefined,
        spaces: 4
    }

    render() {
        return <div className="json-view">
            {Formatter.valueToHtml(this.props.json, this.props.spaces as number).content}
        </div>;
    }
}