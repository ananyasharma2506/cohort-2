const reels = [
  {
    username: "wildlens_raj",
    likecount: 8421,
    isLiked: true,
    commentcount: 312,
    caption: "Tiger walking through the jungle 🐅🌿 #Wildlife",
    video: "./reels/1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    sharecount: 210,
    isfollowed: true
  },
  {
    username: "nature_diaries",
    likecount: 5630,
    isLiked: false,
    commentcount: 198,
    caption: "Golden sunrise over the mountains 🌄✨",
    video: "./reels/2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    sharecount: 145,
    isfollowed: false
  },
  {
    username: "earth_capture",
    likecount: 12980,
    isLiked: true,
    commentcount: 540,
    caption: "Eagle soaring high in the sky 🦅☁️",
    video: "./reels/3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/13.jpg",
    sharecount: 430,
    isfollowed: true
  },
  {
    username: "jungle_stories",
    likecount: 4785,
    isLiked: false,
    commentcount: 167,
    caption: "Elephants enjoying a river bath 🐘💧",
    video: "./reels/4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/14.jpg",
    sharecount: 120,
    isfollowed: false
  },
  {
    username: "green_planet",
    likecount: 9150,
    isLiked: true,
    commentcount: 389,
    caption: "Peaceful waterfall hidden in the forest 🌿💦",
    video: "./reels/5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/15.jpg",
    sharecount: 275,
    isfollowed: true
  }
];

var sum = ''
reels.forEach(function(elem){
  sum = sum + ` <div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                       <div class="user">
                        <img src="${elem.userprofile}" alt="">
                        <h4>${elem.username}</h4>
                        <button>${elem.isfollowed?'Unfollow':'Follow'}</button>
                       </div>
                       <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon ">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likecount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentcount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-send-ins-line"></i></h4>
                            <h6>${elem.sharecount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                           
                        </div>

                    </div>
                </div>`
})
var allReels = document.querySelector('.all-reels')
allReels.innerHTML = sum