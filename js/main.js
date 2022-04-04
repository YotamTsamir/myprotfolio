console.log('Starting up');
// [
//     {
//      id: "sokoban",
//      name: "Sokoban",
//      title: "Better push those boxes",
//      desc: "lorem ipsum lorem ipsum lorem ipsum",
//      url: "projs/sokoban",
//      publishedAt: 1448693940000,
//      labels: ["Matrixes", "keyboard events"],
//     },
//     …
//     ]
var gProjects = []
const btn = $('.submit').click(submitform)

init()

function createProject(id, name, title, desc, url, publishedAt, img, labels) {
  return {
    id,
    name,
    title,
    desc,
    url,
    publishedAt,
    img,
    labels: []
  }
}

function submitform(){
window.open('https://mail.google.com/mail/u/0/?fs=1&to=me@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com&tf=cm')
}
function init() {
  createProjects()
  renderProjects()
  renderProjectsPort()
}

function createProjects(){
gProjects.push(createProject(0, 'Touch Nums', 'the Touch Nums game!', 'In this project i created a fun game based on speed! you need to finish clicking on each number by order of numbers in order to win.',
  'https://seymort.github.io/project-touch-nums/', 'Date: february 2022', 'img/touch-nums.png'))
gProjects.push(createProject(1, 'Chess', 'My chess project', 'In this project we have the classic game of chess.', 'https://seymort.github.io/chess/',
  'Date: march 2022', 'img/chess.jpg'))
gProjects.push(createProject(2, 'Mine Sweeper', 'MY first sprint!', 'In this project i created the famous game minesweeper! first time made a full prject from scratch and i had a lot of fun making it, hope you have fun watching and playing the game!',
  "https://seymort.github.io/yotam/", 'Date: march 2022', 'img/minesweeper2.png'))
gProjects.push(createProject(3, 'Book Shop', 'project: Book Shop', 'In this project we learned about CRUDL and MVC and had to implement it ',
  'https://seymort.github.io/book-shop/', 'Date: april 2022', 'img/book-shop.jpg'))
gProjects.push(createProject(4,'To Do','To Do App','In this project i created an app that helps you orgenize your time and assigments',
  'https://seymort.github.io/to-do/','Date: april 2022', 'img/to-do.jpg'))
gProjects.push(createProject(8,'Pacmen','Pacmen game','In this project i recreated the famous game pacmen!',
  'https://seymort.github.io/pacman/','Date: april 2022','img/pacman.png'))
}

function renderProjects() {
  var strHtml = '';
  gProjects.map(project => {
    strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${project.img}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>`;
    console.log('hey')
  })
  $('.row-port').append(strHtml)
}

function renderProjectsPort() {
  var strHtml = '';
  gProjects.map(project => {
    strHtml += `<div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="close-modal" data-dismiss="modal">
         <div class="lr">
           <div class="rl"></div>
         </div>
       </div>
       <div class="container">
         <div class="row">
           <div class="col-lg-8 mx-auto">
             <div class="modal-body">
               <h2>${project.name}</h2>
               <p class="item-intro text-muted">${project.title}</p>
               <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">
               <p>${project.desc}</p>
               <ul class="list-inline">
                 <li>${project.publishedAt}</li>
                 <li>Client: Lines</li>
                 <li>Category: Branding</li>
                 <li>link: <a href="${project.url}">the app!</a></li>
               </ul>
               <button class="btn btn-primary" data-dismiss="modal" type="button">
                   <i class="fa fa-times"></i>
                   Close Project</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>`
    $('.modals').append(strHtml)
  })
}