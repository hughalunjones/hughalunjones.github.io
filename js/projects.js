const projectData = [
  {
    id: 1,
    image: "./images/museumGameImgOne.jpg",
    alt: "An art gallery scene in a pixel art style",
    title: "Museum Game",
    descriptionOne: "Initially created as my final year university project the development of the as yet unnamed 'Museum Game' now continues in my spare time. The game allows the player to take on the role of a curator and fill a museum of their own with historical artefacts and exhibits. It is being developed using the Unity Engine and C#",
    descriptionTwo: "The idea comes from a personal love for history, cultivated from growing up near an Edwardian castle and spending much of my youth playing Sid Meier's Civilization V. The project is created entirely by myself, art assets included."
  },
  {
    id: 2,
    image: "./images/webDesignProject.jpg",
    alt: "A collection of Javascript, HTML and CSS code",
    title: "Portfolio Website",
    descriptionOne: "Almost a paradox, a website created to show off projects and work, with the website itself being one of those projects.",
    descriptionTwo: "Created using Javascript, CSS3 and HTML5 using mobile first principles the webpage is responsive at any size."
  },
  {
    id: 3,
    image: "./images/agileTeamDevelopment.jpg",
    alt: "An image of the Folio landing page",
    title: "Agile Team Development",
    descriptionOne: "Completed in my second year at university this project was the creation of a mock e-commerce website, front and back-end. This project was my first exposure to working on a piece of software in a team environment. Our e-commerce site was a book selling site named Folio",
    descriptionTwo: "Agile methodologies were employed and the team met each week for sprint meetings and GitHub was utilised for version control. I found this project particularly enjoyable and the collaboration on a project with others was a great experience."
  }
];

function getQueryVariable(variable)
{
       let query = window.location.search.substring(1);
       let vars = query.split("&");
       for (let i = 0;i < vars.length;i++) {
               let pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
let projectIndex = getQueryVariable("id");

const buildProjectSection = projectData => {
  const divImg = document.createElement("div");
  const divFade = document.createElement("div");
  const h3Title = document.createElement("h3");
  const divDesc = document.createElement("div");
  const pDescOne = document.createElement("p");
  const pDescTwo = document.createElement("p");

  divImg.style.backgroundImage = "url(" + projectData.image + ")";
  h3Title.textContent = projectData.title;
  pDescOne.textContent = projectData.descriptionOne;
  pDescTwo.textContent = projectData.descriptionTwo;

  const divProject = document.querySelector(".projectX");

  divProject.append(divImg);
  divProject.append(divFade);
  divProject.append(h3Title);
  divProject.append(divDesc);
  divDesc.append(pDescOne);
  divDesc.append(pDescTwo);

  divImg.setAttribute("class", "project-img-slide");
  divImg.setAttribute("alt", projectData.alt);
  divFade.setAttribute("class", "project-title-fade");
  h3Title.setAttribute("class", "project-title");
  divDesc.setAttribute("class", "project-description");
};

buildProjectSection(projectData[projectIndex]);
