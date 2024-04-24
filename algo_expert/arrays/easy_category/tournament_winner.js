//  Mon 22/04/24

// 4. Tournament Winner

// There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that recieves the most amount of points.

// Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.

// It's guaranteed that exaclty one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

// Sample Input

// competitions = [
// ["HTML", "C#"],
// ["C#", "Python"],
// ["Python", "HTML"],
//]
// results = [0, 0, 1]

/// Sample Output

// "Python"
// C# beat HTML, Python Beats C#, and Python Beat HTML.
// HTML - 0 points
// C# - 3 points
// Python - 6 points

const home_team_won = 1; // using this value to decide which team won
function tournamentWinner(competitions, results) {
  // Write your code here.

  let currentBestTeam = ""; // intialise the current best team as
  //an empty string, which gets updated

  const scores = { [currentBestTeam]: 0 };
  // intialise a scores object to keep track of all the scores

  for (let i = 0; i < competitions.length; i++) {
    // console.log(competitions);
    // we want to loop through the competitions array

    const result = results[i];

    // console.log(result, { i });
    [homeTeam, awayTeam] = competitions[i]; // destructuring the
    //homeTeam and the awayTeam for each competition, e.g. at idx 0,
    //the homeTeam becomes HTML and the awayTeam becomes C#

    const winningTeam = result === home_team_won ? homeTeam : awayTeam;
    // here is a ternary operator to decide the winning team for each match.
    //if the result (either 1 or 0) is equal to home_team_won (which is 1)
    //the winning team is the homeTeam, otherwise (if the result is 0)
    // the winningTeam is the awayTeam.
    updateScores(winningTeam, 3, scores); //here we our calling a function
    //which is below, where we update the scores in the scores object,
    //passing in the winningTeam, the number of points they recieved
    //(which is 3 in the game), and the scores object

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
    // if the winning team isn't currently in the scores object,
    // we add the winning team with a score of 0 to the scores object
  }
  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
}

// O(n) time, where n is the number of competitions that we have, since we need to loop through all of the competitions that are in our competitions array
// O(k) space, where k is the number of teams competiting in the tournament
