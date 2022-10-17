function compPlay() {
    const chois = ["Rock", "Paper", "Scissors"];
    return chois[Math.floor(Math.random() * 3)];
  }
  
  function lowerAndCapitalize(text) {
    let lowCaseText = text.toLowerCase();
    return lowCaseText.charAt(0).toUpperCase() + lowCaseText.slice(1);
  }
  
  function oneRound(choice1Score, choice2Score) {
    if (choice1Score === choice2Score) {
      console.log("It's a tie");
      return -1;
    } else {
      if (choice1Score === "Rock") {
        if (choice2Score === "Scissors") {
          console.log("You win Rock beats Scissors!");
          return 1;
        } else {
          console.log("You lose: Paper beats Rock!");
          return 0;
        }
      } else if (choice1Score === "Paper") {
        if (choice2Score === "Rock") {
          console.log("You win: Paper beats Rock!");
          return 1;
        } else {
          console.log("You lose: Scissors beat Paper!");
          return 0;
        }
      } else if (choice1Score === "Scissors") {
        if (choice2Score === "Paper") {
          console.log("You win: Scissors beat Paper!");
          return 1;
        } else {
          console.log("You lose: Rock beats Scissors!");
          return 0;
        }
      } else {
        console.log("Please enter choice");
        return 2;
      }
    }
  }
  
function plainGame() {
    let user = 0;
    let comp = 0;
    for (let i = 0; i < 5; i++) {
      let choice1Score = prompt("Enter your choice: ");
      let currSelection = lowerAndCapitalize(choice1Score);
      let currResPlayer = oneRound(currSelection, compPlay());
      while (currResPlayer === 2) {
        let newChoice = prompt("Enter your new choice: ");
        let lowerNewChoice = lowerAndCapitalize(newChoice);
        currResPlayer = oneRound(lowerNewChoice, compPlay());
      }
      if (currResPlayer === 0) {
        comp++;
      } else if (currResPlayer === 1) {
        user++;
      } else {
        comp++;
        user++;
      }
      console.log(`This is the ${i + 1} round!`);
    }
    console.log(
      `Computer points: ${comp} and your points: ${user}`
    );
    if (comp > user) {
      console.log("Computer win!");
    } else if (user > comp)
     {
      console.log("Player wins!");
    } else {
      console.log("It's tie!");
    }
    console.log("Refresh page");
  }
  
  plainGame();
  