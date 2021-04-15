const projectData = [
  {
    id: 1,
    image: "https://placekitten.com/720/720",
    title: "Project One",
    description: "Lorem one ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem one ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    image: "https://placekitten.com/720/720",
    title: "Project Two",
    description: "Lorem two ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem one ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    image: "https://placekitten.com/720/720",
    title: "Project Three",
    description: "Lorem three ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem one ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

function getQueryVariable(variable)
{
       let query = window.location.search.substring(1);
       let vars = query.split("&");
       for (let i=0;i<vars.length;i++) {
               let pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
let projectIndex = getQueryVariable("id");

document.getElementById('leftArrow').onclick = function decrementprojectIndex() {
  if(projectIndex == 0){
    projectIndex = projectData.length - 1;
    console.log("decrement at limit: " + projectIndex);
  }else {
    projectIndex -= 1;
    console.log("decrement: " + projectIndex);
  }
}
document.getElementById('rightArrow').onclick = function incrementprojectIndex() {
  if(projectIndex == projectData.length - 1){
    projectIndex = 0;
    console.log("increment at limit: " + projectIndex);
  }else{
    projectIndex += 1;
    console.log("increment: " + projectIndex);
  }
}

const buildProjectSection = projectData => {
  const divImg = document.createElement("div");
  const divFade = document.createElement("div");
  const h3Title = document.createElement("h3");
  const divDesc = document.createElement("div");
  const pDesc = document.createElement("p");

  divImg.style.backgroundImage = "url(https://placekitten.com/720/720)";
  h3Title.textContent = projectData.title;
  pDesc.textContent = projectData.description;

  const divProject = document.querySelector(".projectX");
  divProject.append(divImg);
  divProject.append(divFade);
  divProject.append(h3Title);
  divProject.append(divDesc);
  divDesc.append(pDesc);

  divImg.setAttribute("class", "project-img-slide");
  divFade.setAttribute("class", "project-title-fade");
  h3Title.setAttribute("class", "project-title");
  divDesc.setAttribute("class", "project-description");
};
console.log(projectData[projectIndex]);

buildProjectSection(projectData[projectIndex]);
