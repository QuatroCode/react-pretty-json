import * as React from 'react';
import Formatter from './formatter';
import * as Helpers from './helpers';

export interface Props {
    json: any;
    level: number;
    spaces: number;
    clickId: number;
}

export interface State {
    Collapsed: boolean;
}

export default class JsonArray extends React.Component<Props, State> {
    state: State = {
        Collapsed: false
    };

    componentWillMount() {
        if (this.props.clickId != null) {
            Formatter.RegisterClickCallback(this.props.clickId, () => {
                this.toggleCollapse();
            });
        }
    }

    // TODO: Fix any.
    private onClick: React.EventHandler<React.MouseEvent<any>> = (event) => {
        this.toggleCollapse();
    }

    private toggleCollapse() {
        this.setState((state) => {
            state.Collapsed = !state.Collapsed;
            return state;
        });
    }

    private renderItems(arr: Array<any>) {
        let items = new Array<JSX.Element>();
        let countLoop = arr.length;

        for (let item in arr) {
            let innerContent = Formatter.valueToHtml(arr[item], this.props.spaces, this.props.level);
            countLoop--;
            items.push(<div key={'array-item-' + item}>
                {Helpers.generateSpace(this.props.level * this.props.spaces + this.props.spaces)}
                {innerContent.content}
                {countLoop !== 0 ? ',' : ''}
            </div>);
        }

        return items;
    }

    render() {
        let items = this.renderItems(this.props.json);
        if (items.length > 0) {
            let bracketSpaces = this.props.level * this.props.spaces;
            let content = <div className="items">
                {items}
            </div>;

            if (this.state.Collapsed) {
                content = <span className="count">{items.length}</span>;
                bracketSpaces = 0;
            }

            return <span className="array">
                <span className="brackets collapsible" onClick={this.onClick}>{'['}</span>
                {content}
                <span className="brackets collapsible" onClick={this.onClick}>{Helpers.generateSpace(bracketSpaces)}{']'}</span>
            </span>
        }
        return <span className="array">{'[ ]'}</span>;
    }
}
