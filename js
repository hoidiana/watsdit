var project = document.getElementById('project');
var stage = document.getElementById('stage');
var buttonProject = document.getElementsByName('submit-for')[0];
var buttonStage = document.getElementsByName('submit-for')[1];

project.classList.add('javascriptHide');
stage.classList.add('javascriptHide');

buttonProject.addEventListener('change', function () {
	project.classList.remove('javascriptHide');
	stage.classList.add('javascriptHide');
});

buttonStage.addEventListener('change', function () {
	stage.classList.remove('javascriptHide');
	project.classList.add('javascriptHide');
}); 
