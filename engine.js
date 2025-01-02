// ------------------------------------
// config.js (Optional separate file)
// ------------------------------------
export const TIME_MARKERS = {
  FIRST_HALF_END: 45,
  SECOND_HALF_END: 90,
  EXTRA_HALF_1_END: 105,
  EXTRA_HALF_2_END: 120
};

export const MAX_SUBSTITUTIONS = 3;
export const MAX_HEALTH = 10;

// ------------------------------------
// player.js
// ------------------------------------
export class Player {
  constructor(teamId, number, position, formation, roles = []) {
    this.teamId = teamId;
    this.number = number - 1;  // If you really need -1 indexing
    this.position = position;  // e.g. 'GK', 'DF', 'MF', 'FW', or 'SUB'
    this.roles = roles;        // e.g. ['D','W']
    this.health = MAX_HEALTH;
    this.playtime = 0;
    this.lastUser = false;
    this.available = true;
    this.formValue = null;     // e.g. from the formTeam arrays

    // e.g. assign positionID (DOM element ID) based on formation
    // ...
  }

  decrementHealth(amount = 1) {
    this.health = Math.max(0, this.health - amount);
  }

  incrementHealth(amount = 1) {
    this.health = Math.min(MAX_HEALTH, this.health + amount);
  }

  resetPlaytime() {
    this.playtime = 0;
  }

  // ... Additional methods for the player's logic
}

// ------------------------------------
// team.js
// ------------------------------------
import { Player } from './player.js';
import { MAX_SUBSTITUTIONS } from './config.js';

export class Team {
  constructor(name, teamId) {
    this.name = name;
    this.teamId = teamId;          // 1 for Blue, 2 for Red, etc.
    this.players = [];             // array of Player objects
    this.currentFormation = null;  // e.g. 442, 433
    this.remainingSubs = MAX_SUBSTITUTIONS;
    this.score = 0;
  }

  initPlayers(formation) {
    this.currentFormation = formation;
    // Logic to create Player objects based on formation
    // ...
  }

  substitutePlayer(playerIndex) {
    if (!this.remainingSubs) {
      alert("No substitutions left!");
      return;
    }
    const player = this.players[playerIndex];
    // logic to swap health, formValue, etc.
    this.remainingSubs -= 1;
  }

  // ... Additional methods for roles, etc.
}

// ------------------------------------
// match.js
// ------------------------------------
import { Team } from './team.js';
import { TIME_MARKERS } from './config.js';

export class Match {
  constructor(teamBlueName, teamRedName) {
    this.teamBlue = new Team(teamBlueName, 1);
    this.teamRed = new Team(teamRedName, 2);

    this.currentTime = 0;
    this.half = 1;
    this.injuryTime = 0;
    this.currentPossession = null;
    // ...
  }

  start() {
    // e.g. randomForm(), set formation for each team, etc.
    // Then begin the game with a chosen starting possession
    this.currentPossession = Math.random() < 0.5 ? 1 : 2;
    this.buildpressPhase(this.currentPossession);
  }

  buildpressPhase(teamId) {
    // Example logic: check available attackers/defenders
    // ...
    // Trigger UI updates
  }

  advanceTime(minutes = 1) {
    this.currentTime += minutes;
    // e.g. handle half-time, extra time, etc.:
    if (this.currentTime >= TIME_MARKERS.FIRST_HALF_END && this.half === 1) {
      this.handleHalfTime();
    }
  }

  handleHalfTime() {
    // Display UI for half time, refresh players, etc.
    this.half = 2;
    // ...
  }

  // ... more methods for second half, extra time, etc.
}

// ------------------------------------
// uiManager.js
// ------------------------------------
// A simple module to keep DOM interactions separate:
export function showModal(message) {
  document.getElementById("guiderText").innerHTML = message;
  document.getElementById("guider").showModal();
}

export function updateScoreboard(blueScore, redScore) {
  document.getElementById("bscore").innerHTML = blueScore;
  document.getElementById("rscore").innerHTML = redScore;
}

export function updateTimeDisplay(half, currentTime, injuryTime) {
  let displayTime = currentTime;
  if ((half === 1 && currentTime > 45) ||
      (half === 2 && currentTime > 90) ||
      (half === 3 && currentTime > 105) ||
      (half === 4 && currentTime > 120)) {
    displayTime = `${displayTime}+${injuryTime}`;
  }
  document.getElementById("time").innerHTML = displayTime;
}

// ... and so on
