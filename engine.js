//A class that defines a player
class player {
  constructor(team,numbr,posn,formation,formTeam){
    this.team=team;//1 for blue 2 for red
	this.number=numbr-1;//give a number to identify the 11 players and 3 subs
	//Assign the appropriate positions according to the formation.
    if(team==1) {
	  let g=blueMap.get(formation);
	  this.positionID=g[this.number];
	}
	else {
	  this.g=redMap.get(formation);
	  this.positionID=this.g[this.number];
	}
    //Assigning the default roles for each position
	switch(posn) {
	  case 1:
        this.position="GK";
		this.roles=['GOALIE'];
        break;
	  case 2:
        this.position="DF";
		this.roles=['CONTAIN', 'PRESS'];
        break;
	  case 3:
        this.position="MF";
		this.roles=['BUILD', 'CREATE'];
        break;
	  case 4:
        this.position="FW";
		this.roles=['FINISH'];
        break;
	  case 5:
        this.position="SUB";
		break;       
	}
	this.health=10;
    this.playtime=0;//how much time they played yet to calculate fatigue
	this.lastUser=false;//check if a player performed an action the previous turn
	this.available=true;
	this.formValue=formTeam.pop();//assign a skill value for a player
  }
  //method to display a player   
  displaySelfer() {
    let x=document.getElementById(this.positionID);
    x.style.opacity = "1";        
    const y=x.getElementsByTagName("img");
    y[0].style.backgroundColor = "";    
    //if a player is unavailable for a turn, reduce their opacity to denote it
    if(this.available==false) {
        x.style.opacity = "0.3";
    }
    x.style.visibility="visible";
    x.childNodes[0].innerHTML=this.health;        
    x.childNodes[2].innerHTML=this.formValue;
    x.childNodes[0].style.visibility="visible";
    x.childNodes[2].style.visibility="visible";
  }
}
//a map to store all the positions according to each formation of team blue 
const blueMap = new Map([
  [541, ['bluegk', 'bluewb1', 'bluecsb1', 'bluecb', 'bluecsb2', 'bluewb2', 'bluesm1', 'bluescm1', 'bluescm2', 'bluesm2', 'bluecf']],
  [532, ['bluegk', 'bluewb1', 'bluecsb1', 'bluecb', 'bluecsb2', 'bluewb2', 'bluecsm1', 'bluecm', 'bluecsm2', 'bluescf1', 'bluescf2']],
  [523, ['bluegk', 'bluewb1', 'bluecsb1', 'bluecb', 'bluecsb2', 'bluewb2', 'bluescm1', 'bluescm2', 'bluecsf1', 'bluecf', 'bluecsf2']], 
  [451, ['bluegk', 'bluesb1', 'bluescb1', 'bluescb2', 'bluesb2', 'bluewm1', 'bluecsm1', 'bluecm', 'bluecsm2', 'bluewm2', 'bluecf']],
  [442, ['bluegk', 'bluesb1', 'bluescb1', 'bluescb2', 'bluesb2', 'bluesm1', 'bluescm1', 'bluescm2', 'bluesm2', 'bluescf1', 'bluescf2']],
  [433, ['bluegk', 'bluesb1', 'bluescb1', 'bluescb2', 'bluesb2', 'bluecsm1', 'bluecm', 'bluecsm2', 'bluecsf1', 'bluecf', 'bluecsf2']],
  [424, ['bluegk', 'bluesb1', 'bluescb1', 'bluescb2', 'bluesb2', 'bluescm1',  'bluescm2', 'bluesf1', 'bluescf1', 'bluescf2', 'bluesf2']],
  [352, ['bluegk', 'bluecsb1', 'bluecb', 'bluecsb2', 'bluewm1', 'bluecsm1', 'bluecm', 'bluecsm2', 'bluewm2', 'bluescf1', 'bluescf2']],
  [343, ['bluegk', 'bluecsb1', 'bluecb', 'bluecsb2', 'bluesm1', 'bluescm1', 'bluescm2', 'bluesm2', 'bluecsf1', 'bluecf', 'bluecsf2']],
  [334, ['bluegk', 'bluecsb1', 'bluecb', 'bluecsb2', 'bluecsm1', 'bluecm', 'bluecsm2', 'bluesf1', 'bluescf1', 'bluescf2', 'bluesf2']],
  [325, ['bluegk', 'bluecsb1', 'bluecb', 'bluecsb2', 'bluescm1', 'bluescm2', 'bluewf1', 'bluecsf1', 'bluecf', 'bluecsf2', 'bluewf2']]
]);    
//a map to store all the positions according to each formation of team red
const redMap = new Map([
  [541, ['redgk', 'redwb1', 'redcsb1', 'redcb', 'redcsb2', 'redwb2', 'redsm1', 'redscm1', 'redscm2', 'redsm2', 'redcf']],
  [532, ['redgk', 'redwb1', 'redcsb1', 'redcb', 'redcsb2', 'redwb2', 'redcsm1', 'redcm', 'redcsm2', 'redscf1', 'redscf2']],
  [523, ['redgk', 'redwb1', 'redcsb1', 'redcb', 'redcsb2', 'redwb2', 'redscm1', 'redscm2', 'redcsf1', 'redcf', 'redcsf2']], 
  [451, ['redgk', 'redsb1', 'redscb1', 'redscb2', 'redsb2', 'redwm1', 'redcsm1', 'redcm', 'redcsm2', 'redwm2', 'redcf']],
  [442, ['redgk', 'redsb1', 'redscb1', 'redscb2', 'redsb2', 'redsm1', 'redscm1', 'redscm2', 'redsm2', 'redscf1', 'redscf2']],
  [433, ['redgk', 'redsb1', 'redscb1', 'redscb2', 'redsb2', 'redcsm1', 'redcm', 'redcsm2', 'redcsf1', 'redcf', 'redcsf2']],
  [424, ['redgk', 'redsb1', 'redscb1', 'redscb2', 'redsb2', 'redscm1', 'redscm2', 'redsf1', 'redscf1', 'redscf2', 'redsf2']],
  [352, ['redgk', 'redcsb1', 'redcb', 'redcsb2', 'redwm1', 'redcsm1', 'redcm', 'redcsm2', 'redwm2', 'redscf1', 'redscf2']],
  [343, ['redgk', 'redcsb1', 'redcb', 'redcsb2', 'redsm1', 'redscm1', 'redscm2', 'redsm2', 'redcsf1', 'redcf', 'redcsf2']],
  [334, ['redgk', 'redcsb1', 'redcb', 'redcsb2', 'redcsm1', 'redcm', 'redcsm2', 'redsf1', 'redscf1', 'redscf2', 'redsf2']],
  [325, ['redgk', 'redcsb1', 'redcb', 'redcsb2', 'redscm1', 'redscm2', 'redwf1', 'redcsf1', 'redcf', 'redcsf2', 'redwf2']]
]);
//the main function which is self invoking to start the game
const main = (function() {
const teamOne = [];//an array to store the player objects of team blue
const teamTwo = [];//an array to store the player objects of team red
let idRoler=[];//array to help update roles of players
let currentPossession; 
let availManage=false;//turns true after every 15 minutes so that players can make changes
let teamRedSubs=3, teamBlueSubs=3;
let teamBlueName="Blue";
let teamRedName="Red";
let blueScore=0, redScore=0;
let crntTime=0;
let injuryTime=0;
let half=1;
let attacker, defender;//the selected values of attacher and defender in a particular turn
let anyAttacker, anyDefender;//to see if atleast one player is available from each side in a turn
let teamBlueFormation;
let teamRedFormation;
//set eventlisteners that neednot be changed including the game starter
function initialiser() {
  document.getElementById('bluemanage').addEventListener('click', ()=>{subAndRole(1);});
  document.getElementById('redmanage').addEventListener('click', ()=>{subAndRole(2);});
  document.getElementById('updater1').addEventListener('click', updateRoles);
  document.getElementById('updater2').addEventListener('click', updateRoles);
  document.getElementById('updater3').addEventListener('click', updateRoles);
  document.getElementById('etbutton').addEventListener('click', ()=>{tosser(); availManage=true;});
  document.getElementById('psbutton').addEventListener('click', quickPS);
  document.getElementById('namebutton').addEventListener('click', enterNames);
  document.getElementById('blueKO').addEventListener('click', ()=>{gameStart(1);});
  document.getElementById('redKO').addEventListener('click', ()=>{gameStart(2);});
}
//called after entering the team names
function enterNames() {
  let x=document.getElementById("team1").value;
  let y=document.getElementById("team2").value;
  if(x) {teamBlueName=x;}
  if(y) {teamRedName=y;}
  document.getElementById("flex-container").style.visibility="hidden";
  setForm(1);
}
//allows to select a formation
function setForm(team) {
  let z=document.getElementById("formations")
  z.selectedIndex =0;
  teamBlueClearer();
  if(team==1) {
    document.getElementById("guiderText").innerHTML = teamBlueName + ", select your formation.";
    displayer(1,442);
  }
  else {
    document.getElementById("guiderText").innerHTML = teamRedName + ", select your formation.";
    displayer(2,442);
  }
  document.getElementById("guider").showModal();
  let x=document.getElementById("formation");
  x.style.visibility ="visible";
  let y=document.getElementById("cont");
  y.style.visibility="visible";
  if(team==1) {
    z.addEventListener("input", blueFormationInput);
    y.addEventListener("click", blueFormationConfirm);
  }
  else if(team==2){
    z.addEventListener("input", redFormationInput);
    y.addEventListener("click", redFormationConfirm);
  }
}
//confirms blue team formation    
function blueFormationConfirm() {
  document.getElementById("cont").removeEventListener("click", blueFormationConfirm);
  document.getElementById("formations").removeEventListener("input", blueFormationInput);
  teamBlueFormation=document.getElementById('formations').value-0;
  teamCreation(1);
  rolerSetup(1);
}
//confirms red team formation
function redFormationConfirm() {
  document.getElementById("cont").removeEventListener("click", redFormationConfirm);
  document.getElementById("formations").removeEventListener("input", redFormationInput);
  teamRedFormation=document.getElementById('formations').value-0;
  teamCreation(2);
  rolerSetup(2);
}
//display different formations for blue team
function blueFormationInput(Event) {
  teamBlueFormation=Event.target.value-0;
  displayer(1,Event.target.value);
}
//display different formations for red team
function redFormationInput(Event) {
  teamRedFormation=Event.target.value-0;
  displayer(2,Event.target.value);
}
//show different formations
function displayer(team,formation) {
  let x,d,m,f,p,q,r;
  if(team==1) {
    teamBlueFormation=formation-0;
  }
  if(team==2) {
    teamRedFormation=formation-0;
  }
  f = formation % 10;
  formation=(formation-f)/10;
  m = formation % 10;
  formation=(formation-m)/10;
  d = formation;
  if(team==1){//setting the layouts
	teamBlueClearer(); 
	switch(d) {
	  case 3:
        p="d1three";
		break;
	  case 4:
        p="d1four";
		break;
	  case 5: p="d1five";
		break;
	}
  	switch(m) {
	  case 2:
        q="m1two";
		break;
	  case 3:
        q="m1three";
		break;
	  case 4:
        q="m1four";
		break;
	  case 5:
        q="m1five";
		break;
	}
	switch(f) {
	  case 1:
        r="f1one";
		break;
	  case 2:
        r="f1two";
		break;
	  case 3:
        r="f1three";
		break;
	  case 4:
        r="f1four";
		break;
	  case 5:
        r="f1five";
		break;
	}
	document.getElementById("bluegk").style.visibility= "visible";
	x=document.getElementsByClassName(p);
	for(let i=0;i<x.length;i++) {
	  x[i].style.visibility = "visible";
    }
	x=document.getElementsByClassName(q);
	for(let i=0;i<x.length;i++) {
	  x[i].style.visibility = "visible";
    }
	x=document.getElementsByClassName(r);
	for(let i=0;i<x.length;i++) {
	  x[i].style.visibility = "visible";
    }
  }
  else if(team==2){
	teamRedClearer(); 
	switch(d) {//setting the layouts
	  case 3:
        p="d2three";
		break;
	  case 4:
        p="d2four";
		break;
	  case 5:
        p="d2five";
		break;
	}
  	switch(m) {
	  case 2:
        q="m2two";
		break;
	  case 3:
        q="m2three";
		break;
	  case 4:
        q="m2four";
		break;
	  case 5:
        q="m2five";
		break;
	}
	switch(f) {
	  case 1:
        r="f2one";
		break;
	  case 2:
        r="f2two";
		break;
	  case 3:
        r="f2three";
		break;
	  case 4:
        r="f2four";
		break;
	  case 5:
        r="f2five";
		break;
	}
	document.getElementById("redgk").style.visibility= "visible";
	x=document.getElementsByClassName(p);
	for(let i=0;i<x.length;i++) {
	  x[i].style.visibility = "visible";
	}
	x=document.getElementsByClassName(q);
	for(let i=0;i<x.length;i++) {
	  x[i].style.visibility = "visible";
	}
	x=document.getElementsByClassName(r);
	for(let i=0;i<x.length;i++) {
	  x[i].style.visibility = "visible";
	}
  }
}
//function that creates a team after the formation is selected
function teamCreation(team) {
  const formTeam = [1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 10];//the set of skill values of players
  for (let i=19;i>0;i--) {//randomizing the skill values
    let j = Math.floor(Math.random() * (i+1));
    let k = formTeam[i];
    formTeam[i] = formTeam[j];
    formTeam[j] = k;
  }
  if(team==1) {
	let d, m, f;
    let frm=teamBlueFormation;
	teamOne[0] = new player(1,1,1,teamBlueFormation,formTeam);//creating blue goalkeeper 
	f = frm % 10;
	frm=(frm-f)/10;
	m = frm % 10;
	frm=(frm-m)/10;
	d = frm;
	for(let i=1;i<14;i++) {
      if(i<=d) {
       	teamOne[i] = new player(1,i+1,2,teamBlueFormation,formTeam);//creating blue defenders
      }
	  else if(i<=d+m) {
        teamOne[i] = new player(1,i+1,3,teamBlueFormation,formTeam);//creating blue midfielders
      }
      else if(i<=10) {
        teamOne[i] = new player(1,i+1,4,teamBlueFormation,formTeam);//creating blue forwards
      }  
      else {
        teamOne[i] = new player(1,i+1,5,teamBlueFormation,formTeam);//creating blue subs
      }
    }
  }
  else if (team==2){
    let d,m,f;
    let frm=teamRedFormation;
    teamTwo[0] = new player(2,1,1,teamRedFormation,formTeam);//creating red goalkeeper
    f = frm % 10;
	frm=(frm-f)/10;
	m = frm % 10;
	frm=(frm-m)/10;
	d=frm;
	for(let i=1;i<14;i++) {
	  if(i<=d) {
		teamTwo[i] = new player(2,i+1,2,teamRedFormation,formTeam);//creating red defenders
      }
      else if(i<=d+m) {
        teamTwo[i] = new player(2,i+1,3,teamRedFormation,formTeam);//creating red midfielders
      }
  	  else if(i<=10) {
        teamTwo[i] = new player(2,i+1,4,teamRedFormation,formTeam);//creating red forwards
      }  
      else {
        teamTwo[i] = new player(2,i+1,5,teamRedFormation,formTeam);//creating red subs
      }
    }
  }
}
//set roles to players
function rolerSetup(team) {
  document.getElementById("guiderText").innerHTML = "Click on a player and change roles, if needed";
  document.getElementById("guider").showModal();
  document.getElementById("formation").style.visibility ="hidden";
  if(team==1) {
    document.getElementById("cont").addEventListener("click", blueRolesConfirm);
    for(let i=1;i<11;i++) {
      document.getElementById(teamOne[i].positionID).addEventListener("click", blueRoleUpdater);
    }
  }
  else {
    document.getElementById("cont").addEventListener("click", redRolesConfirm);
    for(let i=1;i<11;i++) {
      document.getElementById(teamTwo[i].positionID).addEventListener("click", redRoleUpdater);    
    }
  }
}
//confirm blue players' roles
function blueRolesConfirm() {
  document.getElementById("cont").removeEventListener("click", blueRolesConfirm);
  for(let i=1;i<11;i++) {
    document.getElementById(teamOne[i].positionID).removeEventListener("click", blueRoleUpdater);
  }
  setForm(2);
}
//confirm red players' roles
function redRolesConfirm() {
  document.getElementById("cont").removeEventListener("click", redRolesConfirm);
  for(let i=1;i<11;i++) {
    document.getElementById(teamTwo[i].positionID).removeEventListener("click", redRoleUpdater);
  }
  clearOutter();
  setTimeout(tosser,1000);
}
//allows blue players to change roles
function blueRoleUpdater(Event) {
  roler(Event.currentTarget.id,1);
  iamselected(Event.currentTarget.id);
}
//allows red players to change roles
function redRoleUpdater(Event) {
  roler(Event.currentTarget.id,2);
  iamselected(Event.currentTarget.id);
}
//gives a black highlight to show they have been selected during team changes
function iamselected(myid) {
  const x=document.getElementById(myid);
  const y=x.getElementsByTagName("img");
  y[0].style.backgroundColor = "black";
}
//open the role update box
function roler(id,tm) {
  let i;
  idRoler[0]=id;
  for(i=1;i<11;i++) {
    if((tm==1)&&(teamOne[i].positionID==id)) {
      idRoler[1]=teamOne[i].position;
      break;
    }
    else if((tm==2)&&(teamTwo[i].positionID==id)){
      idRoler[1]=teamTwo[i].position;
      break;
    }
  }
  if(tm==1){
    if(idRoler[1]=="DF") {
      if(teamOne[i].roles[2]!='N'){document.getElementById('defextra').innerHTML=teamOne[i].roles[2];}
      document.getElementById("defroles").selectedIndex =0;
      document.getElementById("defrole").showModal();
    }
    if(idRoler[1]=="MF") {
      if(teamOne[i].roles[2]!='N'){document.getElementById('midextra').innerHTML=teamOne[i].roles[2];}
      document.getElementById("midroles").selectedIndex =0;
      document.getElementById("midrole").showModal();
    }
    if(idRoler[1]=="FW") {
      if(teamOne[i].roles[1]!='N'){document.getElementById('fwdextra1').innerHTML=teamOne[i].roles[1];}
      if(teamOne[i].roles[2]!='N'){document.getElementById('fwdextra2').innerHTML=teamOne[i].roles[2];}
      document.getElementById("fwdroles1").selectedIndex =0;
      document.getElementById("fwdroles2").selectedIndex =0;
      document.getElementById("fwdrole").showModal();
    }
  }
  else {
    if(idRoler[1]=="DF") {
      if(teamTwo[i].roles[2]!='N'){document.getElementById('defextra').innerHTML=teamTwo[i].roles[2];}
      document.getElementById("defroles").selectedIndex =0;
      document.getElementById("defrole").showModal();
    }
    if(idRoler[1]=="MF") {
      if(teamTwo[i].roles[2]!='N'){document.getElementById('midextra').innerHTML=teamTwo[i].roles[2];}
      document.getElementById("midroles").selectedIndex =0;
      document.getElementById("midrole").showModal();
    }
    if(idRoler[1]=="FW") {
      if(teamTwo[i].roles[1]!='N'){document.getElementById('fwdextra1').innerHTML=teamTwo[i].roles[1];}
      if(teamTwo[i].roles[2]!='N'){document.getElementById('fwdextra2').innerHTML=teamTwo[i].roles[2];}
      document.getElementById("fwdroles1").selectedIndex =0;
      document.getElementById("fwdroles2").selectedIndex =0;
      document.getElementById("fwdrole").showModal();
    }
  }
}
//update the roles
function updateRoles() {
  if(idRoler[0][0]=='b') {
    for(let i=1;i<11;i++) {
      if(teamOne[i].positionID==idRoler[0]){  
        if(idRoler[1]=="DF") {
          teamOne[i].roles[2]=document.getElementById("defroles").value;
          if(teamOne[i].roles[2]=="N"){teamOne[i].roles.pop();}
        }
        if(idRoler[1]=="MF") {
          teamOne[i].roles[2]=document.getElementById("midroles").value;
          if(teamOne[i].roles[2]=="N"){teamOne[i].roles.pop();}
        }
        if(idRoler[1]=="FW") {
          teamOne[i].roles[2]=document.getElementById("fwdroles2").value;
          teamOne[i].roles[1]=document.getElementById("fwdroles1").value;               
          if(teamOne[i].roles[2]=="N") {
            teamOne[i].roles.pop();
            if(teamOne[i].roles[1]=="N") {teamOne[i].roles.pop();}
          }
          else if(teamOne[i].roles[2]==teamOne[i].roles[1]) {teamOne[i].roles.pop();}
          else if(teamOne[i].roles[1]=="N") {
            teamOne[i].roles[1]=teamOne[i].roles[2];
            teamOne[i].roles.pop();
          } 
        }
      }
    }
  }
  else { 
    for(let i=1;i<11;i++) {
      if(teamTwo[i].positionID==idRoler[0]){
        if(idRoler[1]=="DF") {
          teamTwo[i].roles[2]=document.getElementById("defroles").value;
          if(teamTwo[i].roles[2]=="N"){teamTwo[i].roles.pop();}
        }
        if(idRoler[1]=="MF") {
          teamTwo[i].roles[2]=document.getElementById("midroles").value;
          if(teamTwo[i].roles[2]=="N"){teamTwo[i].roles.pop();}
        }
        if(idRoler[1]=="FW") {
          teamTwo[i].roles[2]=document.getElementById("fwdroles2").value;
          teamTwo[i].roles[1]=document.getElementById("fwdroles1").value;               
          if(teamTwo[i].roles[2]=="N") {
            teamTwo[i].roles.pop();
            if(teamTwo[i].roles[1]=="N") {teamTwo[i].roles.pop();}
          }
          else if(teamTwo[i].roles[2]==teamTwo[i].roles[1]) {teamTwo[i].roles.pop();}
          else if(teamTwo[i].roles[1]=="N") {
            teamTwo[i].roles[1]=teamTwo[i].roles[2];
            teamTwo[i].roles.pop();
          } 
        }
      }
    }    
  }  
}
//clear blue team from screen
function teamBlueClearer() {
  let z=document.getElementsByClassName("t1");
  for(let i=0;i<28;i++) {
    z[i].style.visibility="hidden";
    z[i].childNodes[0].style.visibility="hidden";
    z[i].childNodes[2].style.visibility="hidden";
  }
}
//clear red team from screen
function teamRedClearer() {
  let z=document.getElementsByClassName("t2");
  for(let i=0;i<28;i++) {
    z[i].style.visibility="hidden";
    z[i].childNodes[0].style.visibility="hidden";
    z[i].childNodes[2].style.visibility="hidden";
  }
}   
//clear both teams from screen after team selections
function clearOutter() {
  teamRedClearer();
  teamBlueClearer();
  document.getElementById("formation").style.visibility ="hidden";
  document.getElementById("cont").style.visibility="hidden";
  document.getElementById("sub").style.visibility="hidden";
  document.getElementById("roler").style.visibility="hidden";
}
//toss to see who decides kickoff    
function tosser() {
  document.getElementById("flex-container3").style.visibility='hidden';
  let j=document.getElementsByClassName("drawoptions");
  for(let i=0;i<j.length;i++) {j[i].style.visibility="hidden";}
  let x=Math.floor(Math.random() * 2);
  if(x==1) {
	document.getElementById("tossteam").innerHTML = teamBlueName;
    let y=document.getElementsByClassName("flex-container2");
    y[0].style.visibility="visible";
    y[0].style.backgroundColor="blue";
  }
  else {
	document.getElementById("tossteam").innerHTML = teamRedName;
    let y=document.getElementsByClassName("flex-container2");
    y[0].style.visibility="visible";
    y[0].style.backgroundColor="red";
  }
}
//starts first half
function gameStart(tm) {
  let y=document.getElementsByClassName("flex-container2");
  y[0].style.visibility="hidden";
  document.getElementById("scorecard").style.visibility="visible";
  if(tm==1) {
    document.getElementById('proceed').addEventListener('click', redSecondHalf);    
  }
  else {
    document.getElementById('proceed').addEventListener('click', blueSecondHalf);
  }
  buildpressPhase(tm);
}
//sets red kickoff second half    
function redSecondHalf() {
  document.getElementById('proceed').removeEventListener('click', redSecondHalf);
  availManage=true;
  buildpressPhase(2);
}
//sets blue kickoff second half
function blueSecondHalf() {
  document.getElementById('proceed').removeEventListener('click', blueSecondHalf);
  availManage=true;
  buildpressPhase(1);
}
//display players with their health and skill
function playersDisplay() {
  for(let i=0;i<11;i++) {
    teamOne[i].displaySelfer();
    teamTwo[i].displaySelfer();
  }
}
//set blue's build move
function blueBuild(Event) {
  timeCount();
  updateTimeScore();
  buildMove(1,Event.currentTarget.id);
}
//set red's build move
function redBuild(Event) {
  timeCount();
  updateTimeScore();
  buildMove(2,Event.currentTarget.id);
}
//first phase which is build vs press
function buildpressPhase(team){
  updateTimeScore();
  document.getElementById('proceed').style.visibility='hidden';
  currentPossession=team;
  anyAttacker=false;
  anyDefender=false;
  if(availManage) {makeChanges();}//check if it is time to make changes to teams
  notifier("Build",team);
  if((half==1)&&(crntTime>=45)) {halfTime();}
  else if((half==2)&&(crntTime>=90)) {fullTime();}
  else if((half==3)&&(crntTime>=105)) {extraHalfTime();}
  else if((half==4)&&(crntTime>=120)) {extraFullTime();}
  else if(team==1){
    for(let i=0;i<11;i++) {
      if(teamOne[i].health==0) {teamOne[i].available=false;}
      else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
      else if(teamOne[i].roles[0]=='BUILD'||teamOne[i].roles[1]=='BUILD'||teamOne[i].roles[2]=='BUILD') {
        teamOne[i].available=true; 
        anyAttacker=true;
        document.getElementById(teamOne[i].positionID).addEventListener('click', blueBuild);
      }
      else {teamOne[i].available=false;}
      //finds the available blue players for buildup this turn and sets them
      if(teamTwo[i].health==0) {teamTwo[i].available=false;}
      else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
      else if(teamTwo[i].roles[1]=='PRESS'||teamTwo[i].roles[2]=='PRESS') {
        teamTwo[i].available=true;
        anyDefender=true;
      }
      else {teamTwo[i].available=false;}//finds the available red players for press this turn
    }
    if(anyAttacker==false) {//check if there is atleast one blue to build
      document.getElementById('bluemanage').style.visibility='hidden';
      document.getElementById('redmanage').style.visibility='hidden';
      timeCount();
      document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
      document.getElementById("guider").showModal();
      buildpressPhase(2);        
    }
    if(anyDefender==false) {//check if there is atleast one red to press
      document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
      document.getElementById("guider").showModal();
      document.getElementById('bluemanage').style.visibility='hidden';
      document.getElementById('redmanage').style.visibility='hidden';
      for(let i=1;i<11;i++){
        document.getElementById(teamOne[i].positionID).removeEventListener("click", blueBuild);
      }
      timeCount();        
      createcontainPhase(1);
    }
  }
  else if(team==2){
    for(let i=0;i<11;i++) {
      if(teamTwo[i].health==0) {teamTwo[i].available=false;}
      else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
      else if(teamTwo[i].roles[0]=='BUILD'||teamTwo[i].roles[1]=='BUILD'||teamTwo[i].roles[2]=='BUILD') {
        teamTwo[i].available=true;
        anyAttacker=true;
        document.getElementById(teamTwo[i].positionID).addEventListener('click', redBuild);
      }
      else {teamTwo[i].available=false;}
      //finds the available red players for buildup this turn and sets them
      if(teamOne[i].health==0) {teamOne[i].available=false;}
      else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
      else if(teamOne[i].roles[1]=='PRESS'||teamOne[i].roles[2]=='PRESS') {
        teamOne[i].available=true;
        anyDefender=true;
      } 
      else {teamOne[i].available=false;}
    }//finds the available blue players to press this turn
    if(anyAttacker==false) {//check if there is atleast one red to build
      document.getElementById('bluemanage').style.visibility='hidden';
      document.getElementById('redmanage').style.visibility='hidden';
      timeCount();
      document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
      document.getElementById("guider").showModal();
      buildpressPhase(1);        
    }
    if(anyDefender==false) {//check if there is atleast one blue to press
      document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
      document.getElementById("guider").showModal();
      document.getElementById('bluemanage').style.visibility='hidden';
      document.getElementById('redmanage').style.visibility='hidden';
      for(let i=1;i<11;i++){
        document.getElementById(teamTwo[i].positionID).removeEventListener("click", redBuild);
      }
      timeCount();    
      createcontainPhase(2);
    }
  }  
  playersDisplay();
}
//sets what to do after selecting the player to build
function buildMove(team, id) {    
  document.getElementById('bluemanage').style.visibility='hidden';//removes the manage buttons if not used
  document.getElementById('redmanage').style.visibility='hidden';
  updateTimeScore();
  if(team==1){    
    for(let i=0;i<11;i++) {
      if(teamOne[i].positionID==id) {//get the skill value of the selected blue player and reduce their health by one
        attacker=teamOne[i].formValue;
        teamOne[i].lastUser=true;
        if(teamOne[i].health!=0) {teamOne[i].health--;}
      }
      else {teamOne[i].lastUser=false;}
      document.getElementById(teamOne[i].positionID).removeEventListener("click", blueBuild);
      if(teamTwo[i].available==true) {
        document.getElementById(teamTwo[i].positionID).addEventListener("click", redPress);
      }//sets the players to press
    }
    notifier("Press",2);
  }
  else if(team==2){
    for(let i=0;i<11;i++) {
      if(teamTwo[i].positionID==id) {//get the skill value of the selected red attacker and reduce their health by one
        attacker=teamTwo[i].formValue;
        teamTwo[i].lastUser=true;
        if(teamTwo[i].health!=0) {teamTwo[i].health--;}
      }
      else {teamTwo[i].lastUser=false;}
      document.getElementById(teamTwo[i].positionID).removeEventListener("click", redBuild);
      if(teamOne[i].available==true) {
        document.getElementById(teamOne[i].positionID).addEventListener("click", bluePress);
      }//sets the players to press
    }
    notifier("Press",1);
  }
  playersDisplay();
}
//blue's press move
function bluePress(Event){
  pressMove(1,Event.currentTarget.id);
}
//red's press move
function redPress(Event){
  pressMove(2,Event.currentTarget.id);  
}
//sets what to do after selecting the player to build
function pressMove(team, id) {
  playersDisplay();
  if(team==1){    
    for(let i=0;i<11;i++) {//get the skill value of the selected blue defender and reduce their health by one
      if(teamOne[i].positionID==id) {
        defender=teamOne[i].formValue;
        teamOne[i].lastUser=true;
        if(teamOne[i].health!=0) {teamOne[i].health--;}
      }
      else {teamOne[i].lastUser=false;}
      document.getElementById(teamOne[i].positionID).removeEventListener("click", bluePress);   
    }
    if(attacker>defender) {timeCount(); createcontainPhase(2);}//compare the skills
    else if(attacker==defender) {timeCount();buildpressPhase(2);}
    else {
      timeCount();
      buildpressPhase(1);
    }
  }
  else if(team==2){
    for(let i=0;i<11;i++) {//get the skill value of the selected red defender and reduce their health by one
      if(teamTwo[i].positionID==id) {
        defender=teamTwo[i].formValue;
        teamTwo[i].lastUser=true;
        if(teamTwo[i].health!=0) {teamTwo[i].health--;}
      }
      else {teamTwo[i].lastUser=false;}
        document.getElementById(teamTwo[i].positionID).removeEventListener("click", redPress);
    }
    if(attacker>defender) {timeCount(); createcontainPhase(1);}//compare the skills
    else if(attacker==defender) {timeCount();buildpressPhase(1);}
    else {
      timeCount();
      buildpressPhase(2);
    }
  }
}
//second phase which is create vs contain
function createcontainPhase(team) {
  anyAttacker=false;
  anyDefender=false;
  updateTimeScore();
  notifier("Create",team);
  if(team==1){
    for(let i=0;i<11;i++) {//finds the available blue players for create this turn and sets them
      if(teamOne[i].health==0) {teamOne[i].available=false;}
      else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
      else if(teamOne[i].roles[1]=='CREATE'||teamOne[i].roles[2]=='CREATE'){
        teamOne[i].available=true;
        anyAttacker=true;
        document.getElementById(teamOne[i].positionID).addEventListener('click', blueCreate);
      }
      else {teamOne[i].available=false;}
    //finds the available red players for contain this turn
      if(teamTwo[i].health==0) {teamTwo[i].available=false;}
      else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
      else if(teamTwo[i].roles[0]=='CONTAIN'||teamTwo[i].roles[1]=='CONTAIN'||teamTwo[i].roles[2]=='CONTAIN'){
        teamTwo[i].available=true;
        anyDefender=true;
      }
      else {teamTwo[i].available=false;}
    }
    if(anyAttacker==false) {//check if atleast one blue attacker is available
      timeCount();
      document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
      document.getElementById("guider").showModal();
      buildpressPhase(2);        
    }
    if(anyDefender==false) {//check if atleast one red defender is available
      document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
      document.getElementById("guider").showModal();
      for(let i=1;i<11;i++){
        document.getElementById(teamOne[i].positionID).removeEventListener("click", blueCreate);
      }
      timeCount();
      finishsavePhase(1);
    }
  }
  else if(team==2){
    for(let i=0;i<11;i++) {//finds the available red players for create this turn and sets them
      if(teamTwo[i].health==0) {teamTwo[i].available=false;}
      else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
      else if(teamTwo[i].roles[1]=='CREATE'||teamTwo[i].roles[2]=='CREATE'){
        teamTwo[i].available=true;
        anyAttacker=true;
        document.getElementById(teamTwo[i].positionID).addEventListener('click', redCreate);
      }
      else {teamTwo[i].available=false;}
    //finds the available blue players for contain this turn
      if(teamOne[i].health==0) {teamOne[i].available=false;}
      else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
      else if(teamOne[i].roles[0]=='CONTAIN'||teamOne[i].roles[1]=='CONTAIN'||teamOne[i].roles[2]=='CONTAIN'){
        teamOne[i].available=true;
        anyDefender=true;
      }
      else {teamOne[i].available=false;}
    }
    if(anyAttacker==false) {//check if atleast one red attacker is available
      timeCount();
      document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
      document.getElementById("guider").showModal();
      buildpressPhase(1);        
    }
    if(anyDefender==false) {//check if atleast one blue defender is available
      document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
      document.getElementById("guider").showModal();            
      for(let i=1;i<11;i++){
        document.getElementById(teamOne[i].positionID).removeEventListener("click", redCreate);
      }
      timeCount();
      finishsavePhase(2);
    }    
  }
  playersDisplay();
}
//blue's create move
function blueCreate(Event){
  timeCount();
  updateTimeScore();
  createMove(1,Event.currentTarget.id);
}
//red's create move
function redCreate(Event){
  timeCount();
  updateTimeScore();
  createMove(2,Event.currentTarget.id);
}
//blue's contain move
function blueContain(Event){
  containMove(1,Event.currentTarget.id);
}
//red's contain move
function redContain(Event){
  containMove(2,Event.currentTarget.id);
}
//sets what to do after selecting the player to create
function createMove(team, id) {    
  if(team==1){    
    for(let i=0;i<11;i++) {
      if(teamOne[i].positionID==id) {//get the skill value of the selected blue player and reduce their health by one
        attacker=teamOne[i].formValue;
        teamOne[i].lastUser=true;
        if(teamOne[i].health!=0) {teamOne[i].health--;}
      }
      else {teamOne[i].lastUser=false;}
      document.getElementById(teamOne[i].positionID).removeEventListener('click', blueCreate);
      if(teamTwo[i].available==true) {
        document.getElementById(teamTwo[i].positionID).addEventListener('click', redContain);
      }//sets red players to contain
    }
    notifier("Contain",2);
  }
  else if(team==2){
    for(let i=0;i<11;i++) {
      if(teamTwo[i].positionID==id) {//get the skill value of the selected blue player and reduce their health by one
        attacker=teamTwo[i].formValue;
        teamTwo[i].lastUser=true;
        if(teamTwo[i].health!=0) {teamTwo[i].health--;}
      }
      else {teamTwo[i].lastUser=false;}
      document.getElementById(teamTwo[i].positionID).removeEventListener('click', redCreate);
      if(teamOne[i].available==true) {
        document.getElementById(teamOne[i].positionID).addEventListener('click', blueContain);
      }//sets blue players to contain
    }
    notifier("Contain",1);
  }
  playersDisplay();
}
//sets what to do after selecting the player to build
function containMove(team, id) {
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {//get the skill value of selected blue player and reduce their health by one
                defender=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).removeEventListener('click', blueContain);
        }
        if(attacker>defender) {timeCount(); finishsavePhase(2);}//compare skills
        else if(attacker==defender) {timeCount(); createcontainPhase(2);}
        else { timeCount();
            buildpressPhase(1);
            }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {//get the skill value of selected red player and reduce their health by one
                defender=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).removeEventListener('click', redContain);
        }
        if(attacker>defender) {timeCount(); finishsavePhase(1);}//compare skills
        else if(attacker==defender) {timeCount(); createcontainPhase(1);}
        else { timeCount();
            buildpressPhase(2);
            }
    }
}
//blue's finish move
function blueFinish(Event) {
  finishMove(1,Event.currentTarget.id);
}
//red's finish move
function redFinish(Event) {
  finishMove(2,Event.currentTarget.id);
}
//third phase which is finish vs save
function finishsavePhase(team) {
  anyAttacker=false;
  anyDefender=false;
  updateTimeScore();
  notifier("Finish",team);
  if(team==1){
    for(let i=0;i<11;i++) {//finds the available blue players for finish this turn and sets them
      if(teamOne[i].health==0) {teamOne[i].available=false;}
      else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
      else if(teamOne[i].roles[0]=='FINISH'||teamOne[i].roles[2]=='FINISH'){
        teamOne[i].available=true;
        anyAttacker=true;
        document.getElementById(teamOne[i].positionID).addEventListener("click", blueFinish);
      }
      else {teamOne[i].available=false;}
    //sets if red goalie is available
      if(teamTwo[i].health==0) {teamTwo[i].available=false;}
      else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
      else if(teamTwo[i].roles[0]=='GOALIE'){
        teamTwo[i].available=true;
        anyDefender=true;
      }
      else {teamTwo[i].available=false;}
    }
    if(anyAttacker==false) {//check for atleast one blue attacker
      timeCount();
      document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
      document.getElementById("guider").showModal();    
      buildpressPhase(2);        
    }
  }
  else if(team==2){
    for(let i=0;i<11;i++) {//finds the available red players for finish this turn and sets them
      if(teamTwo[i].health==0) {teamTwo[i].available=false;}
      else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
      else if(teamTwo[i].roles[0]=='FINISH'||teamTwo[i].roles[2]=='FINISH'){
        teamTwo[i].available=true;
        anyAttacker=true;
        document.getElementById(teamTwo[i].positionID).addEventListener("click", redFinish);
      }
      else {teamTwo[i].available=false;}
    //sets if blue goalie is available
      if(teamOne[i].health==0) {teamOne[i].available=false;}
      else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
      else if(teamOne[i].roles[0]=='GOALIE'){
        teamOne[i].available=true;
        anyDefender=true;
      }
      else {teamOne[i].available=false;}
    }
    if(anyAttacker==false) {//check for atleast one red attacker
      timeCount();
      document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
      document.getElementById("guider").showModal();            
      buildpressPhase(1);        
    }
  }
  playersDisplay();
}
//sets what to do after selecting the player to finish
function finishMove(team, id) {    
  if(team==1){    
    for(let i=0;i<11;i++) {
      if(teamOne[i].positionID==id) {//get the skill value of selected blue and reduces health
        attacker=teamOne[i].formValue;
        teamOne[i].lastUser=true;
        if(teamOne[i].health!=0) {teamOne[i].health--;}
      }
      else {teamOne[i].lastUser=false;}
      document.getElementById(teamOne[i].positionID).removeEventListener('click', blueFinish);
    }    
    saveMove(2);           
  }
  else if(team==2){
    for(let i=0;i<11;i++) {//get the skill value of selected blue and reduces health 
      if(teamTwo[i].positionID==id) {
        attacker=teamTwo[i].formValue;
        teamTwo[i].lastUser=true;
        if(teamTwo[i].health!=0) {teamTwo[i].health--;}
      }
      else {teamTwo[i].lastUser=false;}
      document.getElementById(teamTwo[i].positionID).removeEventListener('click', redFinish);
    }            
    saveMove(1);      
  }
  playersDisplay();
}
//checking the save move
function saveMove(team) {
  playersDisplay();
  if(team==1){    
    for(let i=1;i<11;i++) {
      teamOne[i].lastUser=false;
    }
    if(anyDefender) {//check if blue goalie is available
      defender=teamOne[0].formValue;
      teamOne[0].lastUser=true;
      if(teamOne[0].health!=0) {teamOne[0].health--;}
      if(attacker>defender) {//compare skills
        let rvalue=attacker-defender;//goalkeeper beaten
        redShoot(rvalue);
      }
      else if(attacker==defender) {
        flasherDisplay("REBOUND",2);
        timeCount();
        finishsavePhase(2);
      }
      else {
        timeCount();
        buildpressPhase(1);
      }
    }
    else {//if blue goalie is not available
      redShoot(attacker);
    }
  }
  else if(team==2){
    for(let i=1;i<11;i++) {
      teamTwo[i].lastUser=false;
    }
    if(anyDefender) {//check if red goalie is available
      defender=teamTwo[0].formValue;
      teamTwo[0].lastUser=true;
      if(teamTwo[0].health!=0) {teamTwo[0].health--;}
      if(attacker>defender) {//compare skills
        let bvalue=attacker-defender;//goalkeeper beaten
        blueShoot(bvalue);
      }
      else if(attacker==defender) {
        flasherDisplay("REBOUND",1);
        timeCount(); 
        finishsavePhase(1);
      }
      else {
        timeCount();
        buildpressPhase(2);
      }
    }
    else {//if red goalie is not available
      blueShoot(attacker);
    }
  }
}
function redShoot(value) {//red's shooting action with randomness
  let u=Math.floor(Math.random()*100);
      if(u>(67+value*3)) {flasherDisplay("MISS",2);}
      else { 
        redScore++;
        flasherDisplay("GOAL",2);
      }
      timeCount();
      buildpressPhase(1);
}
function blueShoot(value) {//blue's shooting action with randomness
  let u=Math.floor(Math.random()*100);
      if(u>(67+value*3)) {flasherDisplay("MISS",1);}
      else { 
        blueScore++;
        flasherDisplay("GOAL",1);
      }
      timeCount();
      buildpressPhase(2);
}

//display time and score
function updateTimeScore() {
  switch(half) {//checks to display injury time
    case 1:
      if(crntTime>45) {
        injuryTime++;
        document.getElementById("time").innerHTML = '45+'+injuryTime;
      } 
      else {document.getElementById("time").innerHTML = crntTime;}
      break;
    case 2:
      if(crntTime>90) {
        injuryTime++;
        document.getElementById("time").innerHTML = '90+'+injuryTime;
      } 
      else {document.getElementById("time").innerHTML = crntTime;}
      break;
    case 3:
      if(crntTime>105) {
        injuryTime++;
        document.getElementById("time").innerHTML = '105+'+injuryTime;
      } 
      else {document.getElementById("time").innerHTML = crntTime;}
      break;
    case 4:
      if(crntTime>120) {
        injuryTime++;
        document.getElementById("time").innerHTML = '120+'+injuryTime;
      } 
      else {document.getElementById("time").innerHTML = crntTime;}
      break;
  }
  document.getElementById("bscore").innerHTML = blueScore;
  document.getElementById("rscore").innerHTML = redScore;
}
//increments time and calculates fatigue
function timeCount() {
  crntTime++;
  if((crntTime==15)||(crntTime==30)||(crntTime==60)||(crntTime==75)) {availManage=true;}//making team changes delay 15 mins
  for(let i=0;i<11;i++) {
    teamOne[i].playtime++;
    teamTwo[i].playtime++;
    switch(teamOne[i].position) {//blue player's fatigue according to position and roles
      case 'GK':
        if(((teamOne[i].playtime%30)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
        break;
      case 'DF':
        if(teamOne[i].roles.length==3) {
          if(((teamOne[i].playtime%20)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
        }
        else {
          if(((teamOne[i].playtime%25)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
        }
        break; 
      case 'MF':
        if(teamOne[i].roles.length==3) {
          if(((teamOne[i].playtime%15)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
        }
        else {
          if(((teamOne[i].playtime%20)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
        }
        break;
      case 'FW':
        if(teamOne[i].roles.length==3) {
          if(((teamOne[i].playtime%15)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
        }
        else if(teamOne[i].roles.length==2){
          if(((teamOne[i].playtime%20)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
        }
        else {
          if(((teamOne[i].playtime%25)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
        }
        break;
    }
    switch(teamTwo[i].position) {//red player's fatigue according to position and roles
      case 'GK':
        if(((teamTwo[i].playtime%30)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
        break;
      case 'DF':
        if(teamTwo[i].roles.length==3) {
          if(((teamTwo[i].playtime%20)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
        }
        else {
          if(((teamTwo[i].playtime%25)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
        }
        break; 
      case 'MF':
        if(teamTwo[i].roles.length==3) {
          if(((teamTwo[i].playtime%15)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
        }
        else {
          if(((teamTwo[i].playtime%20)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
        }
        break;
      case 'FW':
        if(teamTwo[i].roles.length==3) {
          if(((teamTwo[i].playtime%15)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
        }
        else if(teamTwo[i].roles.length==2){
          if(((teamTwo[i].playtime%20)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
        }
        else {
          if(((teamTwo[i].playtime%25)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
        }
        break;
    }
  }
}
//enable teamchanges option
function makeChanges() {
  document.getElementById('bluemanage').style.visibility='visible';
  document.getElementById('redmanage').style.visibility='visible';
  availManage=false;
}
//refresh player's health during halftime and fulltime
function refresh(session) {
  for(let i=0;i<11;i++) {
    teamOne[i].lastUser=false;
    teamTwo[i].lastUser=false;
    if(session==1) {
      if(teamOne[i].health!=10) {teamOne[i].health++;}
      if(teamTwo[i].health!=10) {teamTwo[i].health++;}
    }
    else {
      if(teamOne[i].health==0) {teamOne[i].health++;}
      if(teamTwo[i].health==0) {teamTwo[i].health++;}
      if(session==2) {
        teamOne[i].playtime=0;
        teamTwo[i].playtime=0;
      }
    }
  }    
}
//halftime handling
function halfTime() {
  flasherDisplay("HALFTIME",0);
  refresh(1);
  crntTime=45;
  half=2;
  document.getElementById('proceed').style.visibility='visible';
}
//fulltime handling
function fullTime() {   
  flasherDisplay("FULLTIME",0);
  if(blueScore>redScore) {resulter(1);}
  else if(redScore>blueScore) {resulter(2);}
  else {
    crntTime=90;
    refresh(2);
    half=3;
    resulter(0);
  }
}
//halftime in extratime handling
function extraHalfTime() {
  flasherDisplay("HALFTIME",0);
  crntTime=105;
  refresh(3);
  half=4;
  document.getElementById('proceed').style.visibility='visible';
}
//fulltime in extratime handling
function extraFullTime() {
  flasherDisplay("FULLTIME",0);
  manageClearer();
  if(blueScore>redScore) {resulter(1);}
  else if(redScore>blueScore) {resulter(2);}
  else {quickPS();}
}
//handle result display
function resulter(result){
  let i=document.getElementById("flex-container3");
  if(result==0) {//draw options
	document.getElementById("result").innerHTML="It is a draw";
	i.style.border = "black 5px solid";
    let j=document.getElementsByClassName("drawoptions");
    for(let i=0;i<j.length;i++) {
      j[i].style.visibility="visible";
    }
  }
  else if(result==1) {//blue win
    manageClearer();
	document.getElementById("result").innerHTML=teamBlueName + " won the match!";
	i.style.border = "blue 5px solid";
  }
  else if(result==2) {//red win
    manageClearer();
	document.getElementById("result").innerHTML=teamRedName + " won the match!";
	i.style.border = "red 5px solid";
  }
  document.getElementById("finalscore").innerHTML=blueScore+':'+redScore;
  i.style.visibility = "visible";
}
//penalty shootout
function quickPS() {
  manageClearer();
  document.getElementById("flex-container3").style.visibility='hidden';
  let i=document.getElementById("flex-container4");
  i.style.visibility = "visible";
  let amax=5,bmax=5,amin=0,bmin=0,z,x=1;
  while((amax>=bmin)&&(bmax>=amin)&&x<11) {//regular penalty
	  z=Math.floor(Math.random() * 2);
	  x++;
    if(z==0) {amax--;}
	  else {amin++;}
	  if((amax>=bmin)&&(bmax>=amin)) {
	    z=Math.floor(Math.random() * 2);
	    x++;
	    if(z==0) {bmax--;}
	    else {bmin++;}
    }  
  }
  document.getElementById("ppena").innerHTML = amin;
  document.getElementById("opena").innerHTML = bmin;
  if(amin==bmin) {//if sudden death
	document.getElementById("SD").style.visibility="visible";
	while(amin==bmin) {
	  amin+=Math.floor(Math.random() * 2);
    bmin+=Math.floor(Math.random() * 2);
	}
  document.getElementById("ppena1").innerHTML = amin;
	document.getElementById("opena1").innerHTML = bmin;
  }
  if(amin>bmin) {
	let q=document.getElementById("penaltywinner");
	q.innerHTML =teamBlueName +" won";
	q.style.color="blue";
  i.style.border = "blue 5px solid";
  }
  else {
	let q=document.getElementById("penaltywinner");
	q.innerHTML =teamRedName +" won";
	q.style.color="red";
  i.style.border = "red 5px solid";
  }
}
//opens the manage team options
function subAndRole(team) {
  for(let i=0;i<11;i++) {//remove any build eventlisteners
    document.getElementById(teamOne[i].positionID).removeEventListener('click', blueBuild);
    document.getElementById(teamTwo[i].positionID).removeEventListener('click', redBuild);
  }
  document.getElementById("phaseGuide").style.visibility="hidden";                
  let x=document.getElementById("roler");//show the buttons
  let y=document.getElementById("sub");
  let z=document.getElementById("cont");
  x.style.visibility="visible";
  y.style.visibility="visible";
  z.style.visibility="visible";
  document.getElementById("guiderText").innerHTML = "Click on substitute or adjust role button to do so. Click continue to return to game.";
  document.getElementById("guider").showModal();
  if(currentPossession==1) {//set the continue button
    z.addEventListener("click", confirmChangesBlue);
  }
  else {
    z.addEventListener("click", confirmChangesRed);
  }
  if(team==1){
    for(let i=0;i<11;i++) {
      teamOne[i].available=true;
      teamOne[i].displaySelfer();
    }
    document.getElementById('bluemanage').style.visibility='hidden';//set the substitute and role update buttons
    x.addEventListener('click', blueRoleOption);
    y.addEventListener('click', blueSubOption);
    teamRedClearer();
  }
  else {
    for(let i=0;i<11;i++) {
      teamTwo[i].available=true;
      teamTwo[i].displaySelfer();
    }
    document.getElementById('redmanage').style.visibility='hidden';//set the substitute and role update buttons
    x.addEventListener('click', redRoleOption);
    y.addEventListener('click', redSubOption);
    teamBlueClearer();
  }
}
//to remove some event listeners
function removeEventer(){
  document.getElementById("roler").removeEventListener('click', blueRoleOption);
  document.getElementById("roler").removeEventListener('click', redRoleOption);
  document.getElementById("sub").removeEventListener('click', blueSubOption);
  document.getElementById("sub").removeEventListener('click', redSubOption);
  for(let i=0;i<11;i++){
    document.getElementById(teamOne[i].positionID).removeEventListener('click', blueRoleUpdater);
    document.getElementById(teamTwo[i].positionID).removeEventListener('click', redRoleUpdater);
    document.getElementById(teamOne[i].positionID).removeEventListener('click', blueSubPlayer);
    document.getElementById(teamTwo[i].positionID).removeEventListener('click', redSubPlayer);
  }
}
//continue button for blue
function confirmChangesBlue() {
  document.getElementById("cont").removeEventListener('click', confirmChangesBlue);
  removeEventer();
  clearOutter();
  playersDisplay();
  buildpressPhase(1);
}
//continue button for red
function confirmChangesRed() {
  document.getElementById("cont").removeEventListener('click', confirmChangesRed);
  removeEventer();
  clearOutter();
  playersDisplay();
  buildpressPhase(2);
}
//role update for blue
function blueRoleOption() {
  rolerSet(1);
}
//substitute for blue
function blueSubOption() {
  subber(1);
}
//role update for red
function redRoleOption() {
  rolerSet(2);
}
//substitute for red
function redSubOption() {
  subber(2);
}
//eventlistener for substituting for blue
function blueSubPlayer(Event) {
  subme(Event.currentTarget.id,1);
  iamselected(Event.currentTarget.id);
}
//eventlistener for substituting for red
function redSubPlayer(Event) {
  subme(Event.currentTarget.id,2);
  iamselected(Event.currentTarget.id);
}
//substitute setter
function rolerSet(team) {
  document.getElementById("guiderText").innerHTML = "Click on a player and change roles";
  document.getElementById("guider").showModal();
  if(team==1) {
    for(let i=1;i<11;i++) {
      document.getElementById(teamOne[i].positionID).removeEventListener("click", blueSubPlayer);
      document.getElementById(teamOne[i].positionID).addEventListener("click", blueRoleUpdater);
    }
  }
  else {
    for(let i=1;i<11;i++) {
      document.getElementById(teamOne[i].positionID).removeEventListener("click", redSubPlayer);
      document.getElementById(teamTwo[i].positionID).addEventListener("click", redRoleUpdater);
    }
  }
}
//set substitute option for all players
function subber(team) {
  document.getElementById("guiderText").innerHTML = "Click on a player to substitute that player.";
  document.getElementById("guider").showModal();                
  if(team==1) {
    for(let i=0;i<11;i++) {
      document.getElementById(teamOne[i].positionID).removeEventListener('click', blueRoleUpdater);
      document.getElementById(teamOne[i].positionID).addEventListener('click', blueSubPlayer);
    }
  }
  else {
    for(let i=0;i<11;i++) {
      document.getElementById(teamTwo[i].positionID).removeEventListener('click', redRoleUpdater);
      document.getElementById(teamTwo[i].positionID).addEventListener('click', redSubPlayer);
    }
  }
}
//substitute selected player
function subme(id, team) {
  if((team==1)&&(teamBlueSubs)) {
    for(let i=0;i<11;i++) {
      if(teamOne[i].positionID==id) {
        teamOne[i].health=10;
        teamOne[i].playtime=0;
        teamOne[i].lastUser=false;
        teamOne[i].available=true;
        teamOne[i].formValue=teamOne[teamOne.length-1].formValue;
        teamOne.pop();
        teamBlueSubs--;
      }
    }
  }
  else if((team==2)&&(teamRedSubs)) {
    for(let i=0;i<11;i++) {
      if(teamTwo[i].positionID==id) {
        teamTwo[i].health=10;
        teamTwo[i].playtime=0;
        teamTwo[i].lastUser=false;
        teamTwo[i].available=true;
        teamTwo[i].formValue=teamTwo[teamTwo.length-1].formValue;
        teamTwo.pop();
        teamRedSubs--;
      }
    }
  }
  else {alert("All 3 subs are used.");}
}
//show the current phase of play
function notifier(message, tm) {
  let r=document.getElementById("phaseGuideText");
  r.innerHTML = message;
  if(tm==1) {r.style.backgroundColor="blue";}
  if(tm==2) {r.style.backgroundColor="red";}
  document.getElementById("phaseGuide").style.visibility="visible";                
}
//clear the manage team buttons
function manageClearer() {
  document.getElementById('bluemanage').style.visibility='hidden';
  document.getElementById('redmanage').style.visibility='hidden';
}
//display flashing notes for goals, misses, rebounds, halftime and fulltime
function flasherDisplay(message,team) {
  let x=document.getElementById('flasherstext');
  if(team==1) {x.style.color="blue";}
  else if(team==2) {x.style.color="red";}
  else {x.style.color="white";}
  x.innerHTML=message;
  document.getElementById('flashers').style.visibility='visible';
  setTimeout(()=>{document.getElementById('flashers').style.visibility='hidden';},1000);    
}
initialiser();//run the initialiser to kickstart
return 0;
})();
