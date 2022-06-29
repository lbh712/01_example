import React, { Component } from 'react';

class Contents extends Component {
    render() {
        console.log('Contents render');
        return (
            // <article>
            //     <h2>{this.props.title}</h2>
            //     {this.props.desc}
            // </article>

            <article>
                <h2><a href='/' onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h2>
                {this.props.desc}
            </article>
        )
    };
}

export default Contents;