const users = [
  {
    fullName: "Emma Watson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Creative designer who loves building clean and user-friendly digital interfaces.",
    tags: ["design", "ui", "ux", "figma"]
  },
  {
    fullName: "James Anderson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Full Stack Developer",
    description: "Passionate developer experienced in JavaScript, Node.js, and modern web technologies.",
    tags: ["javascript", "nodejs", "react", "web"]
  },
  {
    fullName: "Sophia Martinez",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Digital Marketer",
    description: "Specialist in social media marketing and brand strategy.",
    tags: ["marketing", "seo", "branding", "socialmedia"]
  },
  {
    fullName: "Daniel Lee",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    profession: "Data Scientist",
    description: "Works with machine learning and big data to extract meaningful insights.",
    tags: ["python", "machinelearning", "data", "ai"]
  },
  {
    fullName: "Olivia Brown",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    profession: "Photographer",
    description: "Travel and lifestyle photographer capturing stories through the lens.",
    tags: ["photography", "travel", "creative", "visual"]
  }
];
var sum = ''
users.forEach(function(elem){
  sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

var main = document.querySelector('main')
main.innerHTML=sum