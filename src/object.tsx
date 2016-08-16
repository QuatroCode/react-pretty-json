import * as React from 'react';
import Formatter from './formatter';
import * as Helpers from './helpers';

export interface Props {
    json: any;
    level: number;
    spaces: number;
}

export interface State {
    Collapsed: boolean;
}

export default class JsonObject extends React.Component<Props, State> {
    state: State = {
        Collapsed: false
    };

    // TODO: Fix any.
    private toggleCollapse: React.EventHandler<React.MouseEvent<any>> = (event) => {
        this.setState((state) => {
            state.Collapsed = !state.Collapsed;
            return state;
        });
    }

    private renderItems(obj: any) {
        let items = new Array<JSX.Element>();
        let countLoop = Helpers.objectSize(obj);

        for (let item in obj) {
            let name = Helpers.htmlEncode(item);
            let content = Formatter.valueToHtml(obj[item], this.props.spaces, this.props.level);
            countLoop--;
            items.push(<div key={'object-item-' + item}>
                {Helpers.generateSpace(this.props.level * this.props.spaces + this.props.spaces)}
                <span className="key">{`"${name}"`}</span>:
                {content}
                {countLoop !== 0 ? ',' : ''}
            </div>);
        }

        return items;
    }

    render() {
        let items = this.renderItems(this.props.json);
        let collapserClassName = (this.state.Collapsed ? 'collapsed' : '');

        if (items.length > 0) {
            let bracketSpaces = this.props.level * this.props.spaces;
            let content = <div className="items">
                {items}
            </div>;

            if (this.state.Collapsed) {
                content = <span className="count">{items.length}</span>;
                bracketSpaces = 0;
            }

            return <span className={`object ${collapserClassName}`}>
                <span className="brackets-start" onClick={this.toggleCollapse}>{'{'}</span>
                {content}
                <span className="brackets">{Helpers.generateSpace(bracketSpaces)}{'}'}</span>
            </span>
        }
        return <span className="object">{'{ }'}</span>;
    }
}