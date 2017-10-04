import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PanelGroup, Panel } from 'react-bootstrap'

import { fetchPosts, fetchComments } from '../actions'

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  onSelect = (postId, e) =>{
    this.props.dispatch(fetchComments(postId));
  }

  render() {
    const requestPostsFailed = this.props.posts.get('failed');

    if (requestPostsFailed) {
      return <div>Ошибка загрузки данных</div>
    }

    if (!this.props.posts.get('items')) {
      return <div className='loader-container'><span className='glyphicon glyphicon-refresh spin'></span></div>
    }

    return (
      <PanelGroup>
        {
          this.props.posts.get('items').toJS().map(post => {
            return <Panel onSelect={this.onSelect} key={post.id} eventKey={post.id} collapsible header={post.title}>
              {
                this.props.comments.get('failed') ?
                  <p>Ошибка загрузки данных</p>
                  :
                  !this.props.comments.getIn(['items', post.id]) ?
                    <div className='loader-container'><span className='glyphicon glyphicon-refresh spin'></span></div>
                    :
                    this.props.comments.getIn(['items', post.id]).toJS().map(comment => {
                      return <p key={comment.id}>
                        {comment.body}
                      </p>
                    })
              }
            </Panel>
          })
        }
      </PanelGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
  }
}

export default connect(mapStateToProps)(Posts);
