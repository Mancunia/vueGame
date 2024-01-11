const gameControls = (delay) => {
  if(delay === "restart" || delay === undefined || delay === null) {
    return "Be adventurous";
  }
  else if (delay < 100) {
    return "That was quick, are you a robot?";
  } else if (delay > 100 && delay < 200) {
    return "That was not bad, are you a robot?";
  } else if (delay > 200 && delay < 300) {
    return "That was fair, Human! :)";
  } else if (delay > 300 && delay < 400) {
    return "Ok, :-|";
  } else if (delay > 400 && delay < 500) {
    return "That was really really slow, definitely a human";
  } else if (delay > 500 && delay < 600) {
    return "That was really really really slow, Slow human";
  } else if (delay > 600 && delay < 700) {
    return "That was really really really really slow, grandpa";
  } else {
    return "That was really really really really really slow, hmmm";
  }
};

export default gameControls;
