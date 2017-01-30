// Description
// What does this spell do?

// Commands:
// hubot what does spell x do?
const path = require('path');
const fs = require('fs');


function getSpell(spellName, cb) {
    const path = require('path');
    const fs = require('fs');
    var spellData = '';
    var jsSpell = JSON.parse(fs.readFileSync(path.join (__dirname, "/spells.json")));
    var output = '';
    
    for(var key in jsSpell){
        if( key.toLowerCase() == spellName.toLowerCase() ) {
            var keyData = jsSpell[key];
            var castingtime = "casting time: " + keyData.casting_time + "\n";
            var components = "components: " + keyData.components + "\n";
            var description = "description: " + keyData.description + "\n";
            var duration = "description: " + keyData.description + "\n";
            var level = "level: " + keyData.level + "\n";
            var range = "range: " + keyData.range + "\n";
            var school = "school: " + keyData.school + "\n";
            output = key + "\n" + castingtime + components + description + duration + level + range + school;
        }
        
    }
    return output
    
}

function getAllSpellNames(cb) {

    var jsSpell = JSON.parse(fs.readFileSync(path.join (__dirname, "/spells.json")));
    var output = '';
    
    for(var key in jsSpell){
            output += key + "\n";        
    }
    return output;          
    
}

module.exports = robot => {
  robot.respond( /what does spell (.*) do/, msg => {
    let spell = msg.match[ 1 ];
    let spellReply = getSpell( spell );
    
    if( spellReply.length == 0 ) {
        msg.reply( "That spell was not found, try again" );
    } else {
        msg.reply( spellReply );
    }    
  } );

  robot.respond ( /list all spells/, msg => {
      let allSpells = getAllSpellNames();
      msg.reply( allSpells );
  })
};
