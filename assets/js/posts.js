const data = {
  "currentUser": {

    "image": { 

      "svg": "assets/images/avatars/image-juliusomo.svg",

      "webp": "./images/avatars/image-juliusomo.webp"

    },

    "username": "juliusomo"

  },

  "comments": [

    {

      "id": 1,

      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",

      "createdAt": "1 month ago",

      "score": 12,

      "user": {

        "image": { 

          "svg": "assets/images/avatars/image-amyrobson.svg",

          "webp": "./images/avatars/image-amyrobson.webp"

        },

        "username": "amyrobson"

      },

      "replies": []

    },

    {

      "id": 2,

      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",

      "createdAt": "2 weeks ago",

      "score": 5,

      "user": {

        "image": { 

          "svg": "assets/images/avatars/image-maxblagun.svg",

          "webp": "./images/avatars/image-maxblagun.webp"

        },

        "username": "maxblagun"

      },

      "replies": [

        {

          "id": 3,

          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",

          "createdAt": "1 week ago",

          "score": 4,

          "replyingTo": "maxblagun",

          "user": {

            "image": { 

              "svg": "assets/images/avatars/image-ramsesmiron.svg",

              "webp": "./images/avatars/image-ramsesmiron.webp"

            },

            "username": "ramsesmiron"

          }

        },

        {

          "id": 4,

          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",

          "createdAt": "2 days ago",

          "score": 2,

          "replyingTo": "ramsesmiron",

          "user": {

            "image": { 

              "svg": "assets/images/avatars/image-juliusomo.svg",

              "webp": "./images/avatars/image-juliusomo.webp"

            },

            "username": "juliusomo"

          }

        }

      ]

    }

  ]

}


const commentsBox = document.querySelector('.comments');
const addCommentBox = document.querySelector('.addCommentBox');

function loadComments() {
  commentsBox.innerHTML = '';
  commentsBox.innerHTML += data.comments.map((x) => 
  `
  <div class="commentBox">
    <div class="score">
      <p>${x.score}</p>
    </div>
    <div class="comment">
      <div class="commenterSection">
        <div class="commenter">
          <img src="${x.user.image.svg}" alt="">
          <p>${x.createdAt}</p>
        </div>
        <button class="replyBtn">
          Reply
        </button>
      </div>
      <p>${x.content}</p>
    </div>
  </div>
  ${x.replies.length > 0 
    ? `<div class="replies">
        ${x.replies.map(y => 
          `
          <div class="replyBox">
            <div class="score">
              <p>${y.score}</p>
            </div>
            <div class="comment">
              <div class="commenterSection">
                <div class="commenter">
                  <img src="${y.user.image.svg}" alt="${y.user.username}">
                  <p>${y.createdAt}</p>
                </div>
                <button class="replyBtn">
                  Reply
                </button>
              </div>
              <p><span class="replyingTo">@${y.replyingTo}</span> ${y.content}</p>
            </div>
          </div>
          `
        ).join('')}
      </div>`
    : ''
  }
  `
  ).join(' ');

  commentsBox.innerHTML += `
    <div class="addComment">
      <textarea class="newComment" placeholder="Add a comment..."></textarea>
      <button class="sendComment">SEND</button>
    </div>
  `;

  document.querySelector('.sendComment').addEventListener('click', addComment);

}

function addComment() {
  const newCommentContent = document.querySelector('.newComment').value.trim();
  
  if (newCommentContent === '') {
    alert('Comment cannot be empty!');
    return;
  }

  data.comments.push({
    id: data.comments.length + 1,
    content: newCommentContent,
    createdAt: 'Just now',
    score: 0,
    user: data.currentUser,
    replies: []
  });

  loadComments();
}

loadComments();


