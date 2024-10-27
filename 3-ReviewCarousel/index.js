const data = [
  {
    img: 'https://picsum.photos/500/300?random=1',
    name: "Alice Johnson",
    job: "Web Developer",
    description: "Alice is a skilled Web Developer with a passion for crafting engaging and interactive web experiences. With a deep knowledge of front-end technologies, she brings creativity and innovation to each project. Alice enjoys finding new ways to solve problems and deliver seamless user interfaces that enhance the browsing experience."
  },
  {
    img: 'https://picsum.photos/500/300?random=2',
    name: "Bob Smith",
    job: "Graphic Designer",
    description: "Bob is a seasoned Graphic Designer who specializes in visual storytelling and brand design. His creative approach combines both art and strategy, resulting in compelling visuals that communicate a brand’s essence. Bob has an eye for detail and is dedicated to crafting designs that leave a lasting impression."
  },
  {
    img: 'https://picsum.photos/500/300?random=3',
    name: "Carol White",
    job: "Data Scientist",
    description: "Carol is a Data Scientist with a strong analytical mind and a passion for turning data into actionable insights. She excels in data analysis, predictive modeling, and machine learning. Carol enjoys uncovering trends and patterns in data that help businesses make informed decisions and drive growth."
  },
  {
    img: 'https://picsum.photos/500/300?random=4',
    name: "David Brown",
    job: "Product Manager",
    description: "David is an experienced Product Manager who is dedicated to aligning project goals with business objectives. He thrives on collaborating with cross-functional teams to create product strategies that deliver value to users. David's focus is on ensuring that every product development step is purposeful and impactful."
  },
  {
    img: 'https://picsum.photos/500/300?random=5',
    name: "Eva Green",
    job: "UX Designer",
    description: "Eva is a UX Designer who combines creativity with user-centered design principles to create interfaces that are both functional and aesthetically pleasing. She is passionate about understanding user behavior and designing experiences that are intuitive and accessible. Eva is dedicated to making digital products easy to use and enjoyable for everyone."
  },
  {
    img: 'https://picsum.photos/500/300?random=6',
    name: "Frank Lee",
    job: "Backend Developer",
    description: "Frank is a proficient Backend Developer with expertise in database management and API development. He plays a key role in creating secure, scalable backend systems that ensure a smooth user experience. Frank is known for his attention to detail and ability to optimize backend processes to maximize efficiency and performance."
  },
  {
    img: 'https://picsum.photos/500/300?random=7',
    name: "Grace Kim",
    job: "Content Writer",
    description: "Grace is a Content Writer who specializes in producing clear, engaging, and informative content tailored to various audiences. She has a knack for understanding complex topics and presenting them in a way that is easy to understand and compelling to read. Grace’s writing helps to build brand credibility and connect with readers on a personal level."
  },
  {
    img: 'https://picsum.photos/500/300?random=8',
    name: "Henry Lopez",
    job: "Digital Marketer",
    description: "Henry is a Digital Marketer with extensive experience in SEO, content strategy, and social media marketing. He is passionate about developing strategies that improve online visibility and drive organic growth. Henry is skilled at crafting campaigns that resonate with target audiences and create meaningful engagement across digital platforms."
  },
  {
    img: 'https://picsum.photos/500/300?random=9',
    name: "Isla Martinez",
    job: "Project Coordinator",
    description: "Isla is a Project Coordinator who excels in managing timelines, team communication, and project milestones. Her strong organizational skills help keep projects on track and ensure that every team member has the information they need to succeed. Isla is known for her ability to handle multiple tasks efficiently and maintain clear communication with all stakeholders."
  },
  {
    img: 'https://picsum.photos/500/300?random=10',
    name: "Jake Wilson",
    job: "Sales Manager",
    description: "Jake is a Sales Manager with a talent for building strong customer relationships and driving sales growth. He is committed to understanding client needs and providing solutions that create long-term value. Jake’s focus on customer satisfaction and his strategic approach to sales help businesses meet their goals and build loyal client bases."
  }
];





let image = document.querySelector(".section__image > img");
let name = document.querySelector(".section__name")
let job = document.querySelector(".section__job")
let desc = document.querySelector(".section__description")
let right = document.getElementById("rightArrow");
let left = document.getElementById("leftArrow");
let surprise = document.getElementById('surprise');

let user = {}

function randomObj() {

  let randomNumber = Math.floor(Math.random() * data.length)
  return data[randomNumber]
}

surprise.addEventListener('click', () => {
  user = randomObj()
  setInfos(user)

})


function setInfos(ob) {

  image.src = ob.img
  name.textContent = ob.name
  job.innerText = ob.job
  desc.innerText = ob.description
}

let index = 0

left.addEventListener('click', () => {


  if (index == 0) {
    index = data.length - 1



  } else {
    index--;
  }

  user = data[index]

  setInfos(user)

})

right.addEventListener('click', () => {

  if (index == data.length - 1) {
    index = 0



  } else {
    index++;
  }

  user = data[index]

  setInfos(user)
})

console.dir(image)