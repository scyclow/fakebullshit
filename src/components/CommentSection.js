import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
  comments = (this.props.comments || []).map((comment, i) => (
    <div className="comment-container" key={i}>
      <div className="comment-name">{comment.name}</div>
      <div className="comment-content">{comment.content}</div>
    </div>
  ))

  state = {
    commentMessage: ''
  }

  updateMessage = () => {
    this.setState({ commentMessage: 'Comments are disabled at this time.' });
  }

  render() {
    return (
      <div className="CommentSection">
        <h3>Comments</h3>
        <input className="name-input" placeholder="name" />
        <textarea className="comment-input" placeholder="comment" />
        <button className="comment-submit" onClick={this.updateMessage}>
          SUBMIT COMMENT
        </button>
        <div className="comment-error">{this.state.commentMessage}</div>
        {this.comments}
      </div>
    );
  }
}

export default CommentSection;
