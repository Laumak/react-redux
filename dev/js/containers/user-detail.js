import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

    render() {
        if(!this.props.user) {
            return (<h4>Select a user...</h4>);
        }
        return (
            <div>
                <p>Nimi: {this.props.user.first} {this.props.user.last}</p>
                <p>Ikä: {this.props.user.age}</p>
                <p>Desc: {this.props.user.description}</p>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);