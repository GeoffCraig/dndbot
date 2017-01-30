// Description
// Roll character

// Commands:
// hubot roll new character

function charRoll(cb) {
    var roll = require('roll');
    roll = new roll();

    var output = roll.roll('4d6b3');

    var newCharRolls = [ ];

    for(i=0; i<6; i++){
        var rollNum = i+1
        var CharRoll = roll.roll('4d6b3')
        newCharRolls.push("Roll #" + rollNum + ": " + CharRoll.calculations[0] + " (Rolled " + CharRoll.rolled + ").");
    };
    
    return newCharRolls;
}

module.exports = robot => {
  
  robot.respond( /roll new character/, msg => {
    msg.reply( charRoll() );
  } );
};
