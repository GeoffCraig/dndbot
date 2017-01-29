// Description
// Time for the insults!!!

// Commands:
// hubot insult

module.exports = robot => {
  const insults = [ "You mom was a pale skinned drow", "Your mother takes up more tiles than a gelatinous cube!", "Charisma was OBVIOUSLY your dump stat!", "Ugh what the hell is that all over your face? Oh.. that's just your face." ];

  robot.hear( new RegExp( `insult` ), msg => {
    msg.reply( `${ msg.random( insults ) }` );
  } );
};
