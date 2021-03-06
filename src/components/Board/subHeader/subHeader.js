import React, { Component } from 'react';
import '../../../assets/style/Board/subHeader/subHeader.less';
import { Icon } from 'react-icons-kit';
import { ic_star_border } from 'react-icons-kit/md/ic_star_border';
import { ic_lock_outline } from 'react-icons-kit/md/ic_lock_outline';
import { ic_person_add } from 'react-icons-kit/md/ic_person_add';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz'
import UserList from './userList';
import { connect } from 'react-redux';

class SubHeader extends Component {
    state = {}
    toggleStar() {
        this.props.toggleStar(this.props.location.state["index"]);
    }
    render() {
        var index = this.props.location.state["index"];
        let starClass = this.props.board.boards[index].starred ? "favo bg gold" : "favo bg"
        return (
            <div className="SubHeader" id="SubHeader">
                <div className="boardName bg">
                    {this.props.board.boards[index].name}
                </div>
                <div className={starClass} onClick={this.toggleStar.bind(this)}>
                    <Icon size={16} icon={ic_star_border} />
                </div>
                <div className="privacy">
                    <span className="divider"></span>
                    <div className="bg">
                        Personal
                    </div>
                    <span className="divider"></span>
                    <div className="bg pri">
                        <Icon size={14} icon={ic_lock_outline} />
                        <div> Private</div>
                    </div>
                    <span className="divider"></span>
                </div>
                <div className="uList">
                    <UserList />
                </div>
                <div className="addMember uList">
                    <Icon size={16} icon={ic_person_add} />
                </div>
                <div className="showMenuLabel bg">
                    <Icon size={16} icon={ic_more_horiz} />
                    <div><a href="">Show Menu</a></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        board: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleStar: (index) => {
            dispatch({
                type: "toggleStar",
                payload: index
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
