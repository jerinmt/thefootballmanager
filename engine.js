const formTeam1 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];//inside main
const formTeam2 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];//inside main
const teamOne = [];
const teamTwo = [];
var idRoler=[];
var currentPossession; 
var availManage=false;
var teamBlueFormation;
var teamRedFormation;const formTeam1 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];//inside main
const formTeam2 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];//inside main
const teamOne = [];
const teamTwo = [];
var idRoler=[];
var currentPossession; 
var availManage=false;
var teamBlueFormation;
var teamRedFormation;
var teamRedSubs=3, teamBlueSubs=3;
var teamBlueName="Blue";
var teamRedName="Red";
var blueScore=0, redScore=0;//inside main
var crntTime=0;
var secondhalfstarter;
var injuryTime=0;
var half=1;
var attacker, defender;
var anyAttacker, anyDefender;
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

function randomForm() {
  for (let i=19;i>0;i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = formTeam1[i];
      formTeam1[i] = formTeam1[j];
      formTeam1[j] = k;
      let l = Math.floor(Math.random() * (i+1));
      let m = formTeam2[i];
      formTeam2[i] = formTeam2[l];
      formTeam2[l] = m;
      }
}
class player {
    constructor(team,numbr,posn,formation) {
		this.team=team;
		this.number=numbr-1;
		if(team==1) {
			let g=blueMap.get(formation);
			this.positionID=g[this.number];
		}
		else {
			this.g=redMap.get(formation);
			this.positionID=this.g[this.number];
		}
		switch(posn) {
			case 1: this.position="GK";
			            this.roles=['G'];
                        break;
			case 2: this.position="DF";
			            this.roles=['D', 'W'];
                        break;
			case 3: this.position="MF";
			            this.roles=['P', 'C'];
                        break;
			case 4: this.position="FW";
			             this.roles=['F'];
                         break;
			case 5: this.position="SUB";
			            break;       
		}
		this.health=10;
        this.playtime=0;
		this.lastUser=false;
		this.available=true;
		if (team==1) {
			this.formValue= formTeam1.pop();
		}
		else {
			this.formValue=formTeam2.pop();
		}
	}
    displaySelfer() {
        let x=document.getElementById(this.positionID);
        iamavailable(this.positionID);        
        const y=x.getElementsByTagName("img");
        y[0].style.backgroundColor = "";    
        if(this.available==false) {unavailable(this.positionID);}
        x.style.visibility="visible";
        x.childNodes[0].innerHTML=this.health;        
        x.childNodes[2].innerHTML=this.formValue;
        x.childNodes[0].style.visibility="visible";
        x.childNodes[2].style.visibility="visible";
    }
}

function teamCreation(team) {
	if(team==1) {
		let d, m, f;
        let frm=teamBlueFormation;
		teamOne[0] = new player(1,1,1,teamBlueFormation);
		f = frm % 10;
		frm=(frm-f)/10;
		m = frm % 10;
		frm=(frm-m)/10;
		d = frm;
		for(let i=1;i<14;i++) {
     			if(i<=d) {
       				teamOne[i] = new player(1,i+1,2,teamBlueFormation);
      			}
			else if(i<=d+m) {
                				teamOne[i] = new player(1,i+1,3,teamBlueFormation);
              			}
              			else if(i<=10) {
                        			teamOne[i] = new player(1,i+1,4,teamBlueFormation);
                      		}  
                      		else {
                         			teamOne[i] = new player(1,i+1,5,teamBlueFormation);
                      		}
    		}console.log(teamOne);
  	}
  	else if (team==2){
    		let d,m,f;
            let frm=teamRedFormation;
    		teamTwo[0] = new player(2,1,1,teamRedFormation);
    		f = frm % 10;
		    frm=(frm-f)/10;
		    m = frm % 10;
		    frm=(frm-m)/10;
		    d=frm;
		    for(let i=1;i<14;i++) {
			    if(i<=d) {
			    	teamTwo[i] = new player(2,i+1,2,teamRedFormation);
      		    	}
      			else if(i<=d+m) {
                				teamTwo[i] = new player(2,i+1,3,teamRedFormation);
              			}
              			else if(i<=10) {
                        			teamTwo[i] = new player(2,i+1,4,teamRedFormation);
                      		}  
                      		else {
                         			teamTwo[i] = new player(2,i+1,5,teamRedFormation);
                      		}
    		}console.log(teamTwo);
  	}
}


function displayer(team,formation) {
	let x,d,m,f,p,q,r;
	f = formation % 10;
	formation=(formation-f)/10;
	m = formation % 10;
	formation=(formation-m)/10;
	d = formation;
    if(team==1){
			teamBlueClearer(); 
		    switch(d) {
			case 3: p="d1three";
			break;
			case 4: p="d1four";
			break;
			case 5: p="d1five";
			break;
		}
  		switch(m) {
			case 2: q="m1two";
			break;
			case 3: q="m1three";
			break;
			case 4: q="m1four";
			break;
			case 5: q="m1five";
			break;
		}
		  switch(f) {
			case 1: r="f1one";
			break;
			case 2: r="f1two";
			break;
			case 3: r="f1three";
			break;
			case 4: r="f1four";
			break;
			case 5: r="f1five";
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
		switch(d) {
			case 3: p="d2three";
			break;
			case 4: p="d2four";
			break;
			case 5: p="d2five";
			break;
		}
  		switch(m) {
			case 2: q="m2two";
			break;
			case 3: q="m2three";
			break;
			case 4: q="m2four";
			break;
			case 5: q="m2five";
			break;
		}
		  switch(f) {
			case 1: r="f2one";
			break;
			case 2: r="f2two";
			break;
			case 3: r="f2three";
			break;
			case 4: r="f2four";
			break;
			case 5: r="f2five";
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

function iamselected(myid) {
const x=document.getElementById(myid);
const y=x.getElementsByTagName("img");
y[0].style.backgroundColor = "black";
}

function unavailable(myid) {
let x=document.getElementById(myid);
x.style.opacity = "0.3";
}

function iamavailable(myid) {
let x=document.getElementById(myid);
x.style.opacity = "1";
}

function enterNames() {
    teamBlueName=document.getElementById("team1").value;
    teamRedName=document.getElementById("team2").value;
    document.getElementById("flex-container").style.visibility="hidden";
    randomForm();
    setForm(1);
}

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

function quickPS() {
    document.getElementById("flex-container3").style.visibility='hidden';
let i=document.getElementsByClassName("flex-container4");
i[0].style.visibility = "visible";
let amax=5,bmax=5,amin=0,bmin=0,z,x=1;
while((amax>=bmin)&&(bmax>=amin)&&x<11) {
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
if(amin==bmin) {
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
}
else {
	let q=document.getElementById("penaltywinner");
	q.innerHTML =teamRedName +" won";
	q.style.color="red";
}
}

function resulter(result){
    let i=document.getElementById("flex-container3");
    if(result==0) {
	document.getElementById("result").innerHTML="It is a draw";
	i.style.backgroundColor = "black";
    let j=document.getElementsByClassName("drawoptions");
    for(let i=0;i<j.length;i++) {j[i].style.visibility="visible";}
	}
else if(result==1) {
	document.getElementById("result").innerHTML=teamBlueName + " won the match!";
	i.style.backgroundColor = "blue";
	}
else if(result==2) {
	document.getElementById("result").innerHTML=teamRedName + " won the match!";
	i.style.backgroundColor = "red";
	}
document.getElementById("finalscore").innerHTML=blueScore+':'+redScore;
i.style.visibility = "visible";
}

function setForm(team) {
resetDropdown();
teamBlueClearer();
teamRedClearer();
if(team==1) {document.getElementById("guiderText").innerHTML = teamBlueName + ", select your formation.";
}
else {document.getElementById("guiderText").innerHTML = teamRedName + ", select your formation.";
}
document.getElementById("guider").showModal();
let x=document.getElementById("formation");
x.style.visibility ="visible";
let y=document.getElementById("cont");
y.style.visibility="visible";
if(team==1) {
	document.getElementById("formations").setAttribute("oninput", "teamBlueFormation=value-0; displayer(1,value);");
y.setAttribute("onclick", "teamCreation(1); rolerSetup(1);");
}
else if(team==2){
	document.getElementById("formations").setAttribute("oninput", "teamRedFormation=value-0; displayer(2,value);");
y.setAttribute("onclick", "teamCreation(2); rolerSetup(2);");
	}
}
function rolerSetup(team) {
    document.getElementById("guiderText").innerHTML = "Click on a player and change roles, if needed";
    document.getElementById("guider").showModal();
    document.getElementById("formation").style.visibility ="hidden";
    if(team==1) {
        for(let i=1;i<11;i++) {
            document.getElementById(teamOne[i].positionID).setAttribute("onclick", "roler(this.id,1); iamselected(this.id);");
            document.getElementById("cont").setAttribute("onclick", "setForm(2);");
        }
    }
    else {
        for(let i=1;i<11;i++) {
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "roler(this.id,2); iamselected(this.id);");
            document.getElementById("cont").setAttribute("onclick", "clearOutter(); setTimeout(tosser,2000);");
        }
    }
}
function rolerSet(team) {
    document.getElementById("guiderText").innerHTML = "Click on a player and change roles";
    document.getElementById("guider").showModal();
    if(team==1) {
        for(let i=1;i<11;i++) {
            document.getElementById(teamOne[i].positionID).setAttribute("onclick", "roler(this.id,1); iamselected(this.id);");
        }
    }
    else {
        for(let i=1;i<11;i++) {
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "roler(this.id,2); iamselected(this.id);");
        }
    }
}

function roler(id,tm) {
    idRoler[0]=id;
    for(let i=1;i<11;i++) {
        if(tm==1) {
            if(teamOne[i].positionID==id){idRoler[1]=teamOne[i].position;}
        }
        else if(tm==2){
            if(teamTwo[i].positionID==id){idRoler[1]=teamTwo[i].position;}
        }
    }
    if(idRoler[1]=="DF") {
        document.getElementById("defroles").selectedIndex =0;
        document.getElementById("defrole").showModal();
    }
    if(idRoler[1]=="MF") {
        document.getElementById("midroles").selectedIndex =0;
        document.getElementById("midrole").showModal();
    }
    if(idRoler[1]=="FW") {
        document.getElementById("fwdroles1").selectedIndex =0;
        document.getElementById("fwdroles2").selectedIndex =0;
        document.getElementById("fwdrole").showModal();
    }
}

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

function resetDropdown() {
    document.getElementById("formations").selectedIndex =0;
}

function teamBlueClearer() {
let z=document.getElementsByClassName("t1");
for(let i=0;i<28;i++) {
		     z[i].style.visibility="hidden";
             z[i].childNodes[0].style.visibility="hidden";
             z[i].childNodes[2].style.visibility="hidden";} 
}

function teamRedClearer() {
let z=document.getElementsByClassName("t2");
for(let i=0;i<28;i++) {
		     z[i].style.visibility="hidden";
             z[i].childNodes[0].style.visibility="hidden";
             z[i].childNodes[2].style.visibility="hidden";} 
}		    

function clearOutter() {
teamRedClearer();
teamBlueClearer();
document.getElementById("formation").style.visibility ="hidden";
document.getElementById("cont").style.visibility="hidden";
document.getElementById("sub").style.visibility="hidden";
document.getElementById("roler").style.visibility="hidden";
}

function playersDisplay() {
for(let i=0;i<11;i++) {
    teamOne[i].displaySelfer();
    teamTwo[i].displaySelfer();
    }
}

function buildpressPhase(team){
    updateTimeScore();
    document.getElementById('proceed').style.visibility='hidden';
    currentPossession=team;
    anyAttacker=false;
    anyDefender=false;
    if(availManage) {
        document.getElementById('bluemanage').style.visibility='visible';
        document.getElementById('redmanage').style.visibility='visible';
        availManage=false;
    }
    notifier("Build",team);
    if((half==1)&&(crntTime>=45)) {halfTime();}
    else if((half==2)&&(crntTime>=90)) {fullTime();}
    else if((half==3)&&(crntTime>=105)) {extraHalfTime();}
    else if((half==4)&&(crntTime>=120)) {extraFullTime();}
    else if(team==1){
        for(let i=0;i<11;i++) {
            document.getElementById(teamOne[i].positionID).setAttribute("onclick", "");
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='P'||teamOne[i].roles[1]=='P'||teamOne[i].roles[2]=='P')
                {teamOne[i].available=true; 
                 anyAttacker=true;
                 document.getElementById(teamOne[i].positionID).setAttribute("onclick", "timeCount(); updateTimeScore(); buildMove(1,this.id);");}
            else {teamOne[i].available=false;}
            
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='W'||teamTwo[i].roles[1]=='W'||teamTwo[i].roles[2]=='W')
                {teamTwo[i].available=true;
                 anyDefender=true;
                }
            else {teamTwo[i].available=false;}
        }
    if(anyAttacker==false) {
        document.getElementById('bluemanage').style.visibility='hidden';
        document.getElementById('redmanage').style.visibility='hidden';
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();
        buildpressPhase(2);        
        }
    if(anyDefender==false) {
        document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
        document.getElementById("guider").showModal();
        document.getElementById('bluemanage').style.visibility='hidden';
        document.getElementById('redmanage').style.visibility='hidden';
        timeCount();        
        createcontainPhase(1);
        }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "");
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='P'||teamTwo[i].roles[1]=='P'||teamTwo[i].roles[2]=='P')
                {teamTwo[i].available=true;
                 anyAttacker=true;
                 document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "timeCount(); updateTimeScore(); buildMove(2,this.id);");}
            else {teamTwo[i].available=false;}
                        
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='W'||teamOne[i].roles[1]=='W'||teamOne[i].roles[2]=='W')
                {teamOne[i].available=true;
                 anyDefender=true;
                }
            else {teamOne[i].available=false;}
        }
    if(anyAttacker==false) {
        document.getElementById('bluemanage').style.visibility='hidden';
        document.getElementById('redmanage').style.visibility='hidden';
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();
        buildpressPhase(1);        
        }
    if(anyDefender==false) {
        document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
        document.getElementById("guider").showModal();
        document.getElementById('bluemanage').style.visibility='hidden';
        document.getElementById('redmanage').style.visibility='hidden';
        timeCount();    
        createcontainPhase(2);
        }
    }
    
playersDisplay();
}
function buildMove(team, id) {    
    document.getElementById('bluemanage').style.visibility='hidden';
    document.getElementById('redmanage').style.visibility='hidden';
    updateTimeScore();
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                attacker=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
            if(teamTwo[i].available==true) {
                document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "pressMove(2,this.id);");
            }
        }
        notifier("Press",2);
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {

                attacker=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");
            if(teamOne[i].available==true) {
                document.getElementById(teamOne[i].positionID).setAttribute("onclick", "pressMove(1,this.id);");
            }
        }
        notifier("Press",1);
    }
    playersDisplay();
}
function pressMove(team, id) {
    playersDisplay();
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                defender=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
        }
        if(attacker>defender) {timeCount(); createcontainPhase(2);}
        else if(attacker==defender) {timeCount();buildpressPhase(2);}
        else { timeCount();
            buildpressPhase(1);
            }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {
                defender=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");          
        }
        if(attacker>defender) {timeCount(); createcontainPhase(1);}
        else if(attacker==defender) {timeCount();buildpressPhase(1);}
        else { timeCount();
            buildpressPhase(2);
            }
    }
}
function createcontainPhase(team) {
    anyAttacker=false;
    anyDefender=false;
    updateTimeScore();
    notifier("Create",team);
    if(team==1){
        for(let i=0;i<11;i++) {
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='C'||teamOne[i].roles[1]=='C'||teamOne[i].roles[2]=='C')
                {teamOne[i].available=true;
                anyAttacker=true;                 
                document.getElementById(teamOne[i].positionID).setAttribute("onclick", "timeCount(); updateTimeScore(); createMove(1,this.id);");}
            else {teamOne[i].available=false;}
            
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='D'||teamTwo[i].roles[1]=='D'||teamTwo[i].roles[2]=='D')
                {teamTwo[i].available=true;
                 anyDefender=true;
                }
            else {teamTwo[i].available=false;}
        }
        if(anyAttacker==false) {
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();
        buildpressPhase(2);        
        }
        if(anyDefender==false) {
        document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
        document.getElementById("guider").showModal();    
        timeCount();
        finishsavePhase(1);
        }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='C'||teamTwo[i].roles[1]=='C'||teamTwo[i].roles[2]=='C')
                {teamTwo[i].available=true;
                  anyAttacker=true;
                 document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "timeCount(); updateTimeScore(); createMove(2,this.id);");}
            else {teamTwo[i].available=false;}
            
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='D'||teamOne[i].roles[1]=='D'||teamOne[i].roles[2]=='D')
                {teamOne[i].available=true;
                 anyDefender=true;
                }
            else {teamOne[i].available=false;}
        }
        if(anyAttacker==false) {
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();
        buildpressPhase(1);        
        }
        if(anyDefender==false) {
            document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
            document.getElementById("guider").showModal();            
        timeCount();
        finishsavePhase(2);
        }    
    }
    playersDisplay();
}

function createMove(team, id) {    
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                attacker=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
            if(teamTwo[i].available==true) {
                document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "containMove(2,this.id);");
            }
        }
        notifier("Contain",2);
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {
                attacker=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");
            if(teamOne[i].available==true) {
                document.getElementById(teamOne[i].positionID).setAttribute("onclick", "containMove(1,this.id);");
            }
        }
        notifier("Contain",1);
    }
    playersDisplay();
}

function containMove(team, id) {
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                defender=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
        }
        if(attacker>defender) {timeCount(); finishsavePhase(2);}
        else if(attacker==defender) {timeCount(); createcontainPhase(2);}
        else { timeCount();
            buildpressPhase(1);
            }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {
                defender=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");          
        }
        if(attacker>defender) {timeCount(); finishsavePhase(1);}
        else if(attacker==defender) {timeCount(); createcontainPhase(1);}
        else { timeCount();
            buildpressPhase(2);
            }
    }
}

function finishsavePhase(team) {
    anyAttacker=false;
    anyDefender=false;
    updateTimeScore();
    notifier("Finish",team);
    if(team==1){
        for(let i=0;i<11;i++) {
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='F'||teamOne[i].roles[1]=='F'||teamOne[i].roles[2]=='F')
                {teamOne[i].available=true;
                 anyAttacker=true;
                 document.getElementById(teamOne[i].positionID).setAttribute("onclick", "finishMove(1,this.id);");}
            else {teamOne[i].available=false;}
            
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='G')
                {teamTwo[i].available=true;
                 anyDefender=true;
                }
            else {teamTwo[i].available=false;}
        }
        if(anyAttacker==false) {
            timeCount();
            document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
            document.getElementById("guider").showModal();    
            buildpressPhase(2);        
        }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='F'||teamTwo[i].roles[1]=='F'||teamTwo[i].roles[2]=='F')
                {teamTwo[i].available=true;
                 anyAttacker=true;
                 document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "finishMove(2,this.id);");}
            else {teamTwo[i].available=false;}
            
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='G')
                {teamOne[i].available=true;
                  anyDefender=true;
                }
            else {teamOne[i].available=false;}
        }
        if(anyAttacker==false) {
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();            
        buildpressPhase(1);        
        }
    }
    playersDisplay();
}

function finishMove(team, id) {    
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                attacker=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
        }    
        saveMove(2);           
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {
                attacker=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");
        }            
        saveMove(1);      
    }
    playersDisplay();
}

function saveMove(team) {
    playersDisplay();
    if(team==1){    
        for(let i=1;i<11;i++) {
            teamOne[i].lastUser=false;
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
        }
        if(anyDefender) {
            defender=teamOne[0].formValue;
            teamOne[0].lastUser=true;
            if(teamOne[0].health!=0) {teamOne[0].health--;}
            if(attacker>defender) {
                redScore++;
                flasherDisplay("GOAL",2);
                timeCount();
                buildpressPhase(1);
            }
            else if(attacker==defender) {
                flasherDisplay("REBOUND",2);
                timeCount();
                finishsavePhase(2);}
            else { timeCount();
                buildpressPhase(1);
            }
        }
        else {
            let u=Math.floor(Math.random()*100);
            if(u>(67+attacker*3)) {
                flasherDisplay("MISS",2);
            }
            else { 
                redScore++;
                flasherDisplay("GOAL",2);
            }
            timeCount();
            buildpressPhase(1);
        }
    }
    else if(team==2){
        for(let i=1;i<11;i++) {
            teamTwo[i].lastUser=false;
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");
        }
        if(anyDefender) {
            defender=teamTwo[0].formValue;
            teamTwo[0].lastUser=true;
            if(teamTwo[0].health!=0) {teamTwo[0].health--;}
            if(attacker>defender) {
                blueScore++;
                flasherDisplay("GOAL",1);
                timeCount();
                buildpressPhase(2);
            }
            else if(attacker==defender) {
                flasherDisplay("REBOUND",1);
                timeCount(); 
                finishsavePhase(1);}
            else { timeCount();
                buildpressPhase(2);
            }
        }
        else {
            let u=Math.floor(Math.random()*100);
            if(u>(67+attacker*3)) {
                flasherDisplay("MISS",1);
            }
            else { 
                blueScore++;
                flasherDisplay("GOAL",1);
            }
            timeCount();
            buildpressPhase(2);
        }
    }
}

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

function updateTimeScore() {
    switch(half) {
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

function timeCount() {
    crntTime++;
    if((crntTime==15)||(crntTime==30)||(crntTime==60)||(crntTime==75)) {availManage=true;}
    for(let i=0;i<11;i++) {
        teamOne[i].playtime++;
        teamTwo[i].playtime++;
        switch(teamOne[i].position) {
            case 'GK': if(((teamOne[i].playtime%30)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
                        break;
            case 'DF': if(teamOne[i].roles.length==3) {if(((teamOne[i].playtime%20)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        else {if(((teamOne[i].playtime%25)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                       break; 
            case 'MF': if(teamOne[i].roles.length==3) {if(((teamOne[i].playtime%15)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        else {if(((teamOne[i].playtime%20)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        break;
            case 'FW': if(teamOne[i].roles.length==3) {if(((teamOne[i].playtime%15)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        else if(teamOne[i].roles.length==2){if(((teamOne[i].playtime%20)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        else {if(((teamOne[i].playtime%25)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        break;
        }
        switch(teamTwo[i].position) {
            case 'GK': if(((teamTwo[i].playtime%30)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
                        break;
            case 'DF': if(teamTwo[i].roles.length==3) {if(((teamTwo[i].playtime%20)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        else {if(((teamTwo[i].playtime%25)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                       break; 
            case 'MF': if(teamTwo[i].roles.length==3) {if(((teamTwo[i].playtime%15)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        else {if(((teamTwo[i].playtime%20)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        break;
            case 'FW': if(teamTwo[i].roles.length==3) {if(((teamTwo[i].playtime%15)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        else if(teamTwo[i].roles.length==2){if(((teamTwo[i].playtime%20)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        else {if(((teamTwo[i].playtime%25)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        break;
        }
    }
}

function halfTime() {
    document.getElementById("guiderText").innerHTML = "Half time";
    document.getElementById("guider").showModal();
    refresh(1);
    crntTime=45;
    half=2;
    document.getElementById('bluemanage').style.visibility='visible';
    document.getElementById('redmanage').style.visibility='visible';
    document.getElementById('proceed').style.visibility='visible';
    availManage=false;
}

function fullTime() {             
    if(blueScore>redScore) {resulter(1);}
    else if(redScore>blueScore) {resulter(2);}
    else {
        crntTime=90;
        refresh(2);
        half=3;
        document.getElementById('bluemanage').style.visibility='visible';
        document.getElementById('redmanage').style.visibility='visible';
        availManage=false;
        resulter(0);
    }
}

function extraHalfTime() {
    document.getElementById("guiderText").innerHTML = "Half time in extra time";
    document.getElementById("guider").showModal();
    crntTime=105;
    refresh(3);
    half=4;
    document.getElementById('bluemanage').style.visibility='visible';
    document.getElementById('redmanage').style.visibility='visible';
    document.getElementById('proceed').style.visibility='visible';
    availManage=false;
}

function extraFullTime() {
    if(blueScore>redScore) {resulter(1);}
    else if(redScore>blueScore) {resulter(2);}
    else {quickPS();}
}

function subAndRole(team) {
    for(let i=0;i<11;i++) {
        document.getElementById(teamOne[i].positionID).setAttribute('onclick', '');
        document.getElementById(teamTwo[i].positionID).setAttribute('onclick', '');
    }
    document.getElementById("phaseGuide").style.visibility="hidden";                
    let x=document.getElementById("roler");
    let y=document.getElementById("sub");
    let z=document.getElementById("cont");
    x.style.visibility="visible";
    y.style.visibility="visible";
    z.style.visibility="visible";
    document.getElementById("guiderText").innerHTML = "Click on substitute or adjust role button to do so. Click continue to return to game.";
    document.getElementById("guider").showModal();
    if(currentPossession==1) {z.setAttribute("onclick", "clearOutter(); playersDisplay(); buildpressPhase(1);");}
    else {z.setAttribute("onclick", "clearOutter(); playersDisplay(); buildpressPhase(2);");}
    if(team==1){
        for(let i=0;i<11;i++) {
            teamOne[i].available=true;
            teamOne[i].displaySelfer();
        }
        document.getElementById('bluemanage').style.visibility='hidden';
        x.setAttribute('onclick', 'rolerSet(1);');
        y.setAttribute('onclick', 'subber(1);');
        teamRedClearer();
    }
    else {
        for(let i=0;i<11;i++) {
            teamTwo[i].available=true;
            teamTwo[i].displaySelfer();
        }
        document.getElementById('redmanage').style.visibility='hidden';
        x.setAttribute('onclick', 'rolerSet(2);');
        y.setAttribute('onclick', 'subber(2);');
        teamBlueClearer();
    }
}

function subber(team) {
    document.getElementById("guiderText").innerHTML = "Click on a player to substitute that player.";
    document.getElementById("guider").showModal();                
    if(team==1) {
        for(let i=0;i<11;i++) {
            document.getElementById(teamOne[i].positionID).setAttribute('onclick', 'subme(this.id,1); iamselected(this.id);');
        }
    }
    else {
        for(let i=0;i<11;i++) {
            document.getElementById(teamTwo[i].positionID).setAttribute('onclick', 'subme(this.id,2); iamselected(this.id);');
        }
    }
}

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

function gameStart(tm) {
let y=document.getElementsByClassName("flex-container2");
y[0].style.visibility="hidden";
document.getElementById("scorecard").style.visibility="visible";
if(tm==1) {secondhalfstarter=2;}
else {secondhalfstarter=1;}
buildpressPhase(tm);
}

function notifier(message, tm) {
let r=document.getElementById("phaseGuideText");
r.innerHTML = message;
if(tm==1) {r.style.backgroundColor="blue";}
if(tm==2) {r.style.backgroundColor="red";}
document.getElementById("phaseGuide").style.visibility="visible";                
}
function manageClearer() {
    document.getElementById('bluemanage').style.visibility='hidden';
    document.getElementById('redmanage').style.visibility='hidden';
}
function flasherDisplay(message,team) {
    let x=document.getElementById('flasherstext');
    if(team==1) {x.style.color="blue";}
    else if(team==2) {x.style.color="red";}
    else {x.style.color="white";}
    x.innerHTML=message;
    
        document.getElementById('flashers').style.visibility='visible';
        setTimeout(()=>{document.getElementById('flashers').style.visibility='hidden';},2000);    
}
var teamRedSubs=3, teamBlueSubs=3;
var teamBlueName="Blue";
var teamRedName="Red";
var blueScore=0, redScore=0;//inside main
var crntTime=0;
var secondhalfstarter;
var injuryTime=0;
var half=1;
var attacker, defender;
var anyAttacker, anyDefender;
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

function randomForm() {
  for (let i=19;i>0;i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = formTeam1[i];
      formTeam1[i] = formTeam1[j];
      formTeam1[j] = k;
      let l = Math.floor(Math.random() * (i+1));
      let m = formTeam2[i];
      formTeam2[i] = formTeam2[l];
      formTeam2[l] = m;
      }
}
class player {
    constructor(team,numbr,posn,formation) {
		this.team=team;
		this.number=numbr-1;
		if(team==1) {
			let g=blueMap.get(formation);
			this.positionID=g[this.number];
		}
		else {
			this.g=redMap.get(formation);
			this.positionID=this.g[this.number];
		}
		switch(posn) {
			case 1: this.position="GK";
			            this.roles=['G'];
                        break;
			case 2: this.position="DF";
			            this.roles=['D', 'W'];
                        break;
			case 3: this.position="MF";
			            this.roles=['P', 'C'];
                        break;
			case 4: this.position="FW";
			             this.roles=['F'];
                         break;
			case 5: this.position="SUB";
			            break;       
		}
		this.health=10;
        this.playtime=0;
		this.lastUser=false;
		this.available=true;
		if (team==1) {
			this.formValue= formTeam1.pop();
		}
		else {
			this.formValue=formTeam2.pop();
		}
	}
    displaySelfer() {
        let x=document.getElementById(this.positionID);
        iamavailable(this.positionID);        
        const y=x.getElementsByTagName("img");
        y[0].style.backgroundColor = "";    
        if(this.available==false) {unavailable(this.positionID);}
        x.style.visibility="visible";
        x.childNodes[0].innerHTML=this.health;        
        x.childNodes[2].innerHTML=this.formValue;
        x.childNodes[0].style.visibility="visible";
        x.childNodes[2].style.visibility="visible";
    }
}

function teamCreation(team) {
	if(team==1) {
		let d, m, f;
        let frm=teamBlueFormation;
		teamOne[0] = new player(1,1,1,teamBlueFormation);
		f = frm % 10;
		frm=(frm-f)/10;
		m = frm % 10;
		frm=(frm-m)/10;
		d = frm;
		for(let i=1;i<14;i++) {
     			if(i<=d) {
       				teamOne[i] = new player(1,i+1,2,teamBlueFormation);
      			}
			else if(i<=d+m) {
                				teamOne[i] = new player(1,i+1,3,teamBlueFormation);
              			}
              			else if(i<=10) {
                        			teamOne[i] = new player(1,i+1,4,teamBlueFormation);
                      		}  
                      		else {
                         			teamOne[i] = new player(1,i+1,5,teamBlueFormation);
                      		}
    		}console.log(teamOne);
  	}
  	else if (team==2){
    		let d,m,f;
            let frm=teamRedFormation;
    		teamTwo[0] = new player(2,1,1,teamRedFormation);
    		f = frm % 10;
		    frm=(frm-f)/10;
		    m = frm % 10;
		    frm=(frm-m)/10;
		    d=frm;
		    for(let i=1;i<14;i++) {
			    if(i<=d) {
			    	teamTwo[i] = new player(2,i+1,2,teamRedFormation);
      		    	}
      			else if(i<=d+m) {
                				teamTwo[i] = new player(2,i+1,3,teamRedFormation);
              			}
              			else if(i<=10) {
                        			teamTwo[i] = new player(2,i+1,4,teamRedFormation);
                      		}  
                      		else {
                         			teamTwo[i] = new player(2,i+1,5,teamRedFormation);
                      		}
    		}console.log(teamTwo);
  	}
}


function displayer(team,formation) {
	let x,d,m,f,p,q,r;
	f = formation % 10;
	formation=(formation-f)/10;
	m = formation % 10;
	formation=(formation-m)/10;
	d = formation;
    if(team==1){
			teamBlueClearer(); 
		    switch(d) {
			case 3: p="d1three";
			break;
			case 4: p="d1four";
			break;
			case 5: p="d1five";
			break;
		}
  		switch(m) {
			case 2: q="m1two";
			break;
			case 3: q="m1three";
			break;
			case 4: q="m1four";
			break;
			case 5: q="m1five";
			break;
		}
		  switch(f) {
			case 1: r="f1one";
			break;
			case 2: r="f1two";
			break;
			case 3: r="f1three";
			break;
			case 4: r="f1four";
			break;
			case 5: r="f1five";
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
		switch(d) {
			case 3: p="d2three";
			break;
			case 4: p="d2four";
			break;
			case 5: p="d2five";
			break;
		}
  		switch(m) {
			case 2: q="m2two";
			break;
			case 3: q="m2three";
			break;
			case 4: q="m2four";
			break;
			case 5: q="m2five";
			break;
		}
		  switch(f) {
			case 1: r="f2one";
			break;
			case 2: r="f2two";
			break;
			case 3: r="f2three";
			break;
			case 4: r="f2four";
			break;
			case 5: r="f2five";
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

function iamselected(myid) {
const x=document.getElementById(myid);
const y=x.getElementsByTagName("img");
y[0].style.backgroundColor = "black";
}

function unavailable(myid) {
let x=document.getElementById(myid);
x.style.opacity = "0.3";
}

function iamavailable(myid) {
let x=document.getElementById(myid);
x.style.opacity = "1";
}

function enterNames() {
    teamBlueName=document.getElementById("team1").value;
    teamRedName=document.getElementById("team2").value;
    document.getElementById("flex-container").style.visibility="hidden";
    randomForm();
    setForm(1);
}

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

function quickPS() {
    document.getElementById("flex-container3").style.visibility='hidden';
let i=document.getElementsByClassName("flex-container4");
i[0].style.visibility = "visible";
let amax=5,bmax=5,amin=0,bmin=0,z,x=1;
while((amax>=bmin)&&(bmax>=amin)&&x<11) {
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
if(amin==bmin) {
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
}
else {
	let q=document.getElementById("penaltywinner");
	q.innerHTML =teamRedName +" won";
	q.style.color="red";
}
}

function resulter(result){
    let i=document.getElementById("flex-container3");
    if(result==0) {
	document.getElementById("result").innerHTML="It is a draw";
	i.style.backgroundColor = "black";
    let j=document.getElementsByClassName("drawoptions");
    for(let i=0;i<j.length;i++) {j[i].style.visibility="visible";}
	}
else if(result==1) {
	document.getElementById("result").innerHTML=teamBlueName + " won the match!";
	i.style.backgroundColor = "blue";
	}
else if(result==2) {
	document.getElementById("result").innerHTML=teamRedName + " won the match!";
	i.style.backgroundColor = "red";
	}
document.getElementById("finalscore").innerHTML=blueScore+':'+redScore;
i.style.visibility = "visible";
}

function setForm(team) {
resetDropdown();
teamBlueClearer();
teamRedClearer();
if(team==1) {document.getElementById("guiderText").innerHTML = "Blue team, select your formation.";
}
else {document.getElementById("guiderText").innerHTML = "Red team, select your formation.";
}
document.getElementById("guider").showModal();
let x=document.getElementById("formation");
x.style.visibility ="visible";
let y=document.getElementById("cont");
y.style.visibility="visible";
if(team==1) {
	document.getElementById("formations").setAttribute("oninput", "teamBlueFormation=value-0; displayer(1,value);");
y.setAttribute("onclick", "teamCreation(1); rolerSetup(1);");
}
else if(team==2){
	document.getElementById("formations").setAttribute("oninput", "teamRedFormation=value-0; displayer(2,value);");
y.setAttribute("onclick", "teamCreation(2); rolerSetup(2);");
	}
}
function rolerSetup(team) {
    document.getElementById("guiderText").innerHTML = "Click on a player and change roles, if needed";
    document.getElementById("guider").showModal();
    document.getElementById("formation").style.visibility ="hidden";
    if(team==1) {
        for(let i=1;i<11;i++) {
            document.getElementById(teamOne[i].positionID).setAttribute("onclick", "roler(this.id,1); iamselected(this.id);");
            document.getElementById("cont").setAttribute("onclick", "setForm(2);");
        }
    }
    else {
        for(let i=1;i<11;i++) {
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "roler(this.id,2); iamselected(this.id);");
            document.getElementById("cont").setAttribute("onclick", "clearOutter(); setTimeout(tosser,2000);");
        }
    }
}
function rolerSet(team) {
    document.getElementById("guiderText").innerHTML = "Click on a player and change roles";
    document.getElementById("guider").showModal();
    if(team==1) {
        for(let i=1;i<11;i++) {
            document.getElementById(teamOne[i].positionID).setAttribute("onclick", "roler(this.id,1); iamselected(this.id);");
        }
    }
    else {
        for(let i=1;i<11;i++) {
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "roler(this.id,2); iamselected(this.id);");
        }
    }
}

function roler(id,tm) {
    idRoler[0]=id;
    for(let i=1;i<11;i++) {
        if(tm==1) {
            if(teamOne[i].positionID==id){idRoler[1]=teamOne[i].position;}
        }
        else if(tm==2){
            if(teamTwo[i].positionID==id){idRoler[1]=teamTwo[i].position;}
        }
    }
    if(idRoler[1]=="DF") {
        document.getElementById("defroles").selectedIndex =0;
        document.getElementById("defrole").showModal();
    }
    if(idRoler[1]=="MF") {
        document.getElementById("midroles").selectedIndex =0;
        document.getElementById("midrole").showModal();
    }
    if(idRoler[1]=="FW") {
        document.getElementById("fwdroles1").selectedIndex =0;
        document.getElementById("fwdroles2").selectedIndex =0;
        document.getElementById("fwdrole").showModal();
    }
}

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

function resetDropdown() {
    document.getElementById("formations").selectedIndex =0;
}

function teamBlueClearer() {
let z=document.getElementsByClassName("t1");
for(let i=0;i<28;i++) {
		     z[i].style.visibility="hidden";
             z[i].childNodes[0].style.visibility="hidden";
             z[i].childNodes[2].style.visibility="hidden";} 
}

function teamRedClearer() {
let z=document.getElementsByClassName("t2");
for(let i=0;i<28;i++) {
		     z[i].style.visibility="hidden";
             z[i].childNodes[0].style.visibility="hidden";
             z[i].childNodes[2].style.visibility="hidden";} 
}		    

function clearOutter() {
teamRedClearer();
teamBlueClearer();
document.getElementById("formation").style.visibility ="hidden";
document.getElementById("cont").style.visibility="hidden";
document.getElementById("sub").style.visibility="hidden";
document.getElementById("roler").style.visibility="hidden";
}

function playersDisplay() {
for(let i=0;i<11;i++) {
    teamOne[i].displaySelfer();
    teamTwo[i].displaySelfer();
    }
}

function buildpressPhase(team){
    updateTimeScore();
    document.getElementById('proceed').style.visibility='hidden';
    currentPossession=team;
    anyAttacker=false;
    anyDefender=false;
    if(availManage) {
        document.getElementById('bluemanage').style.visibility='visible';
        document.getElementById('redmanage').style.visibility='visible';
        availManage=false;
    }
    notifier("Build",team);
    if((half==1)&&(crntTime>=45)) {halfTime();}
    else if((half==2)&&(crntTime>=90)) {fullTime();}
    else if((half==3)&&(crntTime>=105)) {extraHalfTime();}
    else if((half==4)&&(crntTime>=120)) {extraFullTime();}
    else if(team==1){
        for(let i=0;i<11;i++) {
            document.getElementById(teamOne[i].positionID).setAttribute("onclick", "");
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='P'||teamOne[i].roles[1]=='P'||teamOne[i].roles[2]=='P')
                {teamOne[i].available=true; 
                 anyAttacker=true;
                 document.getElementById(teamOne[i].positionID).setAttribute("onclick", "timeCount(); updateTimeScore(); buildMove(1,this.id);");}
            else {teamOne[i].available=false;}
            
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='W'||teamTwo[i].roles[1]=='W'||teamTwo[i].roles[2]=='W')
                {teamTwo[i].available=true;
                 anyDefender=true;
                }
            else {teamTwo[i].available=false;}
        }
    if(anyAttacker==false) {
        document.getElementById('bluemanage').style.visibility='hidden';
        document.getElementById('redmanage').style.visibility='hidden';
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();
        buildpressPhase(2);        
        }
    if(anyDefender==false) {
        document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
        document.getElementById("guider").showModal();
        document.getElementById('bluemanage').style.visibility='hidden';
        document.getElementById('redmanage').style.visibility='hidden';
        timeCount();        
        createcontainPhase(1);
        }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "");
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='P'||teamTwo[i].roles[1]=='P'||teamTwo[i].roles[2]=='P')
                {teamTwo[i].available=true;
                 anyAttacker=true;
                 document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "timeCount(); updateTimeScore(); buildMove(2,this.id);");}
            else {teamTwo[i].available=false;}
                        
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='W'||teamOne[i].roles[1]=='W'||teamOne[i].roles[2]=='W')
                {teamOne[i].available=true;
                 anyDefender=true;
                }
            else {teamOne[i].available=false;}
        }
    if(anyAttacker==false) {
        document.getElementById('bluemanage').style.visibility='hidden';
        document.getElementById('redmanage').style.visibility='hidden';
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();
        buildpressPhase(1);        
        }
    if(anyDefender==false) {
        document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
        document.getElementById("guider").showModal();
        document.getElementById('bluemanage').style.visibility='hidden';
        document.getElementById('redmanage').style.visibility='hidden';
        timeCount();    
        createcontainPhase(2);
        }
    }
    
playersDisplay();
}
function buildMove(team, id) {    
    document.getElementById('bluemanage').style.visibility='hidden';
    document.getElementById('redmanage').style.visibility='hidden';
    updateTimeScore();
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                attacker=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
            if(teamTwo[i].available==true) {
                document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "pressMove(2,this.id);");
            }
        }
        notifier("Press",2);
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {

                attacker=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");
            if(teamOne[i].available==true) {
                document.getElementById(teamOne[i].positionID).setAttribute("onclick", "pressMove(1,this.id);");
            }
        }
        notifier("Press",1);
    }
    playersDisplay();
}
function pressMove(team, id) {
    playersDisplay();
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                defender=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
        }
        if(attacker>defender) {timeCount(); createcontainPhase(2);}
        else if(attacker==defender) {timeCount();buildpressPhase(2);}
        else { timeCount();
            buildpressPhase(1);
            }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {
                defender=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");          
        }
        if(attacker>defender) {timeCount(); createcontainPhase(1);}
        else if(attacker==defender) {timeCount();buildpressPhase(1);}
        else { timeCount();
            buildpressPhase(2);
            }
    }
}
function createcontainPhase(team) {
    anyAttacker=false;
    anyDefender=false;
    updateTimeScore();
    notifier("Create",team);
    if(team==1){
        for(let i=0;i<11;i++) {
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='C'||teamOne[i].roles[1]=='C'||teamOne[i].roles[2]=='C')
                {teamOne[i].available=true;
                anyAttacker=true;                 
                document.getElementById(teamOne[i].positionID).setAttribute("onclick", "timeCount(); updateTimeScore(); createMove(1,this.id);");}
            else {teamOne[i].available=false;}
            
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='D'||teamTwo[i].roles[1]=='D'||teamTwo[i].roles[2]=='D')
                {teamTwo[i].available=true;
                 anyDefender=true;
                }
            else {teamTwo[i].available=false;}
        }
        if(anyAttacker==false) {
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();
        buildpressPhase(2);        
        }
        if(anyDefender==false) {
        document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
        document.getElementById("guider").showModal();    
        timeCount();
        finishsavePhase(1);
        }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='C'||teamTwo[i].roles[1]=='C'||teamTwo[i].roles[2]=='C')
                {teamTwo[i].available=true;
                  anyAttacker=true;
                 document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "timeCount(); updateTimeScore(); createMove(2,this.id);");}
            else {teamTwo[i].available=false;}
            
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='D'||teamOne[i].roles[1]=='D'||teamOne[i].roles[2]=='D')
                {teamOne[i].available=true;
                 anyDefender=true;
                }
            else {teamOne[i].available=false;}
        }
        if(anyAttacker==false) {
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();
        buildpressPhase(1);        
        }
        if(anyDefender==false) {
            document.getElementById("guiderText").innerHTML = "No players available to defend. Next phase!";
            document.getElementById("guider").showModal();            
        timeCount();
        finishsavePhase(2);
        }    
    }
    playersDisplay();
}

function createMove(team, id) {    
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                attacker=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
            if(teamTwo[i].available==true) {
                document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "containMove(2,this.id);");
            }
        }
        notifier("Contain",2);
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {
                attacker=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");
            if(teamOne[i].available==true) {
                document.getElementById(teamOne[i].positionID).setAttribute("onclick", "containMove(1,this.id);");
            }
        }
        notifier("Contain",1);
    }
    playersDisplay();
}

function containMove(team, id) {
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                defender=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
        }
        if(attacker>defender) {timeCount(); finishsavePhase(2);}
        else if(attacker==defender) {timeCount(); createcontainPhase(2);}
        else { timeCount();
            buildpressPhase(1);
            }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {
                defender=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");          
        }
        if(attacker>defender) {timeCount(); finishsavePhase(1);}
        else if(attacker==defender) {timeCount(); createcontainPhase(1);}
        else { timeCount();
            buildpressPhase(2);
            }
    }
}

function finishsavePhase(team) {
    anyAttacker=false;
    anyDefender=false;
    updateTimeScore();
    notifier("Finish",team);
    if(team==1){
        for(let i=0;i<11;i++) {
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='F'||teamOne[i].roles[1]=='F'||teamOne[i].roles[2]=='F')
                {teamOne[i].available=true;
                 anyAttacker=true;
                 document.getElementById(teamOne[i].positionID).setAttribute("onclick", "finishMove(1,this.id);");}
            else {teamOne[i].available=false;}
            
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='G')
                {teamTwo[i].available=true;
                 anyDefender=true;
                }
            else {teamTwo[i].available=false;}
        }
        if(anyAttacker==false) {
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();    
        buildpressPhase(2);        
        }
        if(anyDefender==false) {
            let u=Math.floor(Math.random()*2);
            if(u==0) {
                document.getElementById("guiderText").innerHTML = "Goalkeeper not able";
                document.getElementById("guider").showModal();
                document.getElementById("guiderText").innerHTML = "!!!Missed!!!";
                document.getElementById("guider").showModal();
            }
            else {
                document.getElementById("guiderText").innerHTML = "Goalkeeper not able";
                document.getElementById("guider").showModal();
                blueScore++;
                document.getElementById("guiderText").innerHTML = "!!!GOAL!!!";
                document.getElementById("guider").showModal();}
            timeCount();
            buildpressPhase(2);
        }
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].health==0) {teamTwo[i].available=false;}
            else if(teamTwo[i].lastUser==true) {teamTwo[i].available=false;}
            else if(teamTwo[i].roles[0]=='F'||teamTwo[i].roles[1]=='F'||teamTwo[i].roles[2]=='F')
                {teamTwo[i].available=true;
                 anyAttacker=true;
                 document.getElementById(teamTwo[i].positionID).setAttribute("onclick", "finishMove(2,this.id);");}
            else {teamTwo[i].available=false;}
            
            if(teamOne[i].health==0) {teamOne[i].available=false;}
            else if(teamOne[i].lastUser==true) {teamOne[i].available=false;}
            else if(teamOne[i].roles[0]=='G')
                {teamOne[i].available=true;
                  anyDefender=true;
                }
            else {teamOne[i].available=false;}
        }
        if(anyAttacker==false) {
        timeCount();
        document.getElementById("guiderText").innerHTML = "No players available for attack. Possession change!";
        document.getElementById("guider").showModal();            
        buildpressPhase(1);        
        }
        if(anyDefender==false) {
            let u=Math.floor(Math.random()*2);
            if(u==0) {
                document.getElementById("guiderText").innerHTML = "Goalkeeper not able";
                document.getElementById("guider").showModal();
                document.getElementById("guiderText").innerHTML = "!!!Missed!!!";
                document.getElementById("guider").showModal();
            }
            else {
            document.getElementById("guiderText").innerHTML = "Goalkeeper not able.";
            document.getElementById("guider").showModal(); 
            redScore++;
            document.getElementById("guiderText").innerHTML = "!!!GOAL!!!";
            document.getElementById("guider").showModal();
            }
            timeCount();
            buildpressPhase(1);
        }
    }
playersDisplay();
}

function finishMove(team, id) {    
    if(team==1){    
        for(let i=0;i<11;i++) {
            if(teamOne[i].positionID==id) {
                attacker=teamOne[i].formValue;
                teamOne[i].lastUser=true;
                if(teamOne[i].health!=0) {teamOne[i].health--;}
            }
            else {teamOne[i].lastUser=false;}
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
        }    
        saveMove(2);           
    }
    else if(team==2){
        for(let i=0;i<11;i++) {
            if(teamTwo[i].positionID==id) {
                attacker=teamTwo[i].formValue;
                teamTwo[i].lastUser=true;
                if(teamTwo[i].health!=0) {teamTwo[i].health--;}
            }
            else {teamTwo[i].lastUser=false;}
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");
        }            
        saveMove(1);      
    }
    playersDisplay();
}

function saveMove(team) {
    playersDisplay();
    if(team==1){    
        for(let i=1;i<11;i++) {
            teamOne[i].lastUser=false;
            document.getElementById(teamOne[i].positionID).setAttribute("onclick","");
        }
        defender=teamOne[0].formValue;
        teamOne[0].lastUser=true;
        if(teamOne[0].health!=0) {teamOne[0].health--;}
        if(attacker>defender) {
            redScore++;
            document.getElementById("guiderText").innerHTML = "!!!GOAL!!!";
            document.getElementById("guider").showModal();
            timeCount();
            buildpressPhase(1);
        }
        else if(attacker==defender) {timeCount(); finishsavePhase(2);}
        else { timeCount();
            buildpressPhase(1);
            }
    }
    else if(team==2){
        for(let i=1;i<11;i++) {
            teamTwo[i].lastUser=false;
            document.getElementById(teamTwo[i].positionID).setAttribute("onclick","");
        }
        defender=teamTwo[0].formValue;
        teamTwo[0].lastUser=true;
        if(teamTwo[0].health!=0) {teamTwo[0].health--;}
        if(attacker>defender) {
            blueScore++;
            document.getElementById("guiderText").innerHTML = "!!!GOAL!!!";
            document.getElementById("guider").showModal();
            timeCount();
            buildpressPhase(2);
        }
        else if(attacker==defender) {timeCount(); finishsavePhase(1);}
        else { timeCount();
                buildpressPhase(2);
            }
    }
}

function refresh(session) {
if(session==1) {
    for(let i=0;i<11;i++) {
        if(teamOne[i].health!=10) {teamOne[i].health++; teamOne[i].lastUser=false;}
        if(teamTwo[i].health!=10) {teamTwo[i].health++; teamTwo[i].lastUser=false;}
    }
}
else {
    for(let i=0;i<11;i++) {
        if(teamOne[i].health==0) {teamOne[i].health++; teamOne[i].playtime=0; teamOne[i].lastUser=false;}
        if(teamTwo[i].health==0) {teamTwo[i].health++; teamTwo[i].playtime=0; teamTwo[i].lastUser=false;}
    }
}    
}

function updateTimeScore() {
    switch(half) {
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

function timeCount() {
    crntTime++;
    if((crntTime==15)||(crntTime==30)||(crntTime==60)||(crntTime==75)) {availManage=true;}
    for(let i=0;i<11;i++) {
        teamOne[i].playtime++;
        teamTwo[i].playtime++;
        switch(teamOne[i].position) {
            case 'GK': if(((teamOne[i].playtime%30)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}
                        break;
            case 'DF': if(teamOne[i].roles.length==3) {if(((teamOne[i].playtime%20)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        else {if(((teamOne[i].playtime%25)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                       break; 
            case 'MF': if(teamOne[i].roles.length==3) {if(((teamOne[i].playtime%15)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        else {if(((teamOne[i].playtime%20)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        break;
            case 'FW': if(teamOne[i].roles.length==3) {if(((teamOne[i].playtime%15)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        else if(teamOne[i].roles.length==2){if(((teamOne[i].playtime%20)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        else {if(((teamOne[i].playtime%25)==0)&&teamOne[i].health!=0) {teamOne[i].health--;}}
                        break;
        }
        switch(teamTwo[i].position) {
            case 'GK': if(((teamTwo[i].playtime%30)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}
                        break;
            case 'DF': if(teamTwo[i].roles.length==3) {if(((teamTwo[i].playtime%20)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        else {if(((teamTwo[i].playtime%25)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                       break; 
            case 'MF': if(teamTwo[i].roles.length==3) {if(((teamTwo[i].playtime%15)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        else {if(((teamTwo[i].playtime%20)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        break;
            case 'FW': if(teamTwo[i].roles.length==3) {if(((teamTwo[i].playtime%15)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        else if(teamTwo[i].roles.length==2){if(((teamTwo[i].playtime%20)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        else {if(((teamTwo[i].playtime%25)==0)&&teamTwo[i].health!=0) {teamTwo[i].health--;}}
                        break;
        }
    }
}

function halfTime() {
    document.getElementById("guiderText").innerHTML = "Half time!!";
    document.getElementById("guider").showModal();                
    refresh(1);
    crntTime=45;
    half=2;
    document.getElementById('bluemanage').style.visibility='visible';
    document.getElementById('redmanage').style.visibility='visible';
    document.getElementById('proceed').style.visibility='visible';
    availManage=false;
}

function fullTime() {                
    if(blueScore>redScore) {resulter(1);}
    else if(redScore>blueScore) {resulter(2);}
    else {
        crntTime=90;
        refresh(2);
        half=3;
        document.getElementById('bluemanage').style.visibility='visible';
        document.getElementById('redmanage').style.visibility='visible';//check these
        availManage=false;
        resulter(0);
    }
}

function extraHalfTime() {
    document.getElementById("guiderText").innerHTML = "Half time in extra time!!";
    document.getElementById("guider").showModal();               
    crntTime=105;
    half=4;
    document.getElementById('bluemanage').style.visibility='visible';
    document.getElementById('redmanage').style.visibility='visible';
    document.getElementById('proceed').style.visibility='visible';
    availManage=false;
}

function extraFullTime() {
    document.getElementById("guiderText").innerHTML = "Full time after extra time!!!";
    document.getElementById("guider").showModal();                
    if(blueScore>redScore) {resulter(1);}
    else if(redScore>blueScore) {resulter(2);}
    else {quickPS();}
}

function subAndRole(team) {
    for(let i=0;i<11;i++) {
        document.getElementById(teamOne[i].positionID).setAttribute('onclick', '');
        document.getElementById(teamTwo[i].positionID).setAttribute('onclick', '');
    }
    let x=document.getElementById("roler");
    let y=document.getElementById("sub");
    let z=document.getElementById("cont");
    x.style.visibility="visible";
    y.style.visibility="visible";
    z.style.visibility="visible";
    document.getElementById("guiderText").innerHTML = "Click on substitute or adjust role button to do so. Click continue to return to game.";
    document.getElementById("guider").showModal();                
    if(currentPossession==1) {z.setAttribute("onclick", "clearOutter(); playersDisplay(); buildpressPhase(1);");}
    else {z.setAttribute("onclick", "clearOutter(); playersDisplay(); buildpressPhase(2);");}
    if(team==1){
        for(let i=0;i<11;i++) {
            teamOne[i].available=true;
            teamOne[i].displaySelfer();
        }
        document.getElementById('bluemanage').style.visibility='hidden';
        x.setAttribute('onclick', 'rolerSet(1);');
        y.setAttribute('onclick', 'subber(1);');
        teamRedClearer();
    }
    else {
        for(let i=0;i<11;i++) {
            teamTwo[i].available=true;
            teamTwo[i].displaySelfer();
        }
        document.getElementById('redmanage').style.visibility='hidden';
        x.setAttribute('onclick', 'rolerSet(2);');
        y.setAttribute('onclick', 'subber(2);');
        teamBlueClearer();
    }
}

function subber(team) {
    document.getElementById("guiderText").innerHTML = "Click on a player to substitute that player.";
    document.getElementById("guider").showModal();                
    if(team==1) {
        for(let i=0;i<11;i++) {
            document.getElementById(teamOne[i].positionID).setAttribute('onclick', 'subme(this.id,1); iamselected(this.id);');
        }
    }
    else {
        for(let i=0;i<11;i++) {
            document.getElementById(teamTwo[i].positionID).setAttribute('onclick', 'subme(this.id,2); iamselected(this.id);');
        }
    }
}

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

function gameStart(tm) {
let y=document.getElementsByClassName("flex-container2");
y[0].style.visibility="hidden";
document.getElementById("scorecard").style.visibility="visible";
if(tm==1) {secondhalfstarter=2;}
else {secondhalfstarter=1;}
buildpressPhase(tm);
}

function notifier(message, tm) {
let r=document.getElementById("phaseGuideText");
r.innerHTML = message;
if(tm==1) {r.style.backgroundColor="blue";}
if(tm==2) {r.style.backgroundColor="red";}
document.getElementById("phaseGuide").style.visibility="visible";                
}
