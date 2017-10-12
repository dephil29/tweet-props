import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
// import '/img/seal.jpg';

var testTweet = {
  message: "Typing a longer message to see what happens. Lots of personal information and very, VERY important opinions. Much arguing with people who may or may not exist. Even more message. We really have to test the limits on this one to see if the avatar is going to look messed up with a long message. Looks like it's going to work but do I want to put a limit on the amount of characters someone can put in? Like a certain other website that puts limits on the amount of characters you can have in a tweet",
  gravatar: '38fbbc0cfb920257bc4e5ec7a5474d2a',
  author: {
    handle: 'sneeksmuhgee',
    name: 'Billy Something'
  },
  likes: 2,
  retweets: 10,
  timestamp: '2017-10-10 21:24:17'
};

function Count({count}) {
  if(count > 0) {
    return <span className='retweet-count'>{count}</span>;
  }else {
    return null;
  }
}

const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  return <span className='time'>{timeString}</span>};

const ReplyButton = () => <i className='fa fa-reply reply-button space' />;

function getRetweetCount(count) {
  if(count>0) {
    return (
      <span className='count'>
        {count}
      </span>
    );
  }else{
    return null;
  }
}

const RetweetButton = ({count}) => (
  <span className='count'>
    <i className='fa fa-retweet retweet-button space' />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({count}) => (
  <span className='like-button'>
    <i className='fa fa-heart like-button space' />
    {count > 0 && <span className='like-count'>{count}</span>}
  </span>
);

const MoreOptionsButton = () => <i className='fa fa-ellipsis-h more-options-button space' />;

function Message({text}) {
  return (
    <div className='message'>
      {text}
    </div>
  );
}


function NameWithHandle({author}) {
  const {name, handle} = author;
  return (
    <span className='name-with-handle'>
      <span className='name'>{name}</span>
      <span className='handle'>@{handle}</span>
    </span>
  )
}

function Avatar({hash}) {
  var url = `https://www.gravatar.com/avatar/${hash}`
  return <img src={url} className='seal' alt='avatar' />
}


// ####PropTypes import PropTypes from 'prop-types';###
// function Comment({author, message, likes}) {
//   return (
//     <div>
//       <div className="author"></div>
//       <div className="message"></div>
//       <div className="likes">
//         {likes > 0 ? likes : 'No'} likes
//       </div>
//     </div>
//   );
// }
//
// Comment.propTypes = {
//   message: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   likes: PropTypes.number
// }

function Tweet({tweet}){
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className='content'>
        <NameWithHandle author={tweet.author}/>
        <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}

//These are 4 ways to write a prop

// function Person(props) {
//   return <div className={props.className}>{props.name}</div>;
// }

// const Person = (props)/*no parentheses if only 1 argument*/ => {/*Things to put in*/}

// const Person = ({ name, className}) => <span className={className}>Hello, {name}</span>;

// const Person = props => {
//   const { className, name } = props;
//   return <span className={className}>Hello,
// {name}</span>;
// }

//End 4 ways to write a prop

function handleAction(event) {
  console.log('Child did: ', event)
}

function Parent() {
  return <Child onAction={handleAction} />;
}

function Child({onAction}) {
  return (
    <button onClick={onAction}>Something</button>
  )
}


ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById('root'));
