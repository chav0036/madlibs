// Little Red Riding Hood

// Part1

const littleRed = {
  color: 'blue',
  nouns: ['flowers', 'ears', 'eyes', 'teeth'],
  adjective: 'fat',
  exclamation: 'Hello',
  sillyWord: 'panda',
  verb: ['rushed', 'hear', 'see']
}

console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
  basket of ${littleRed.nouns[0]} for her grandmother. Suddenly, she met a big 
  ${littleRed.adjective} wolf.
  
  "${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyWord}?"
  
  "I'm going to my grandmother's house," she said. Then the wolf ${littleRed.verb[0]} away.
  
  When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
  dressed like her grandmother.
  
  "My, Grandmother," she said. "What big ${littleRed.nouns[1]} you have."
  
  "The better to ${littleRed.verb[1]} you with," said the wolf.
  
  "And, Grandmother," she said, "what big ${littleRed.nouns[2]} you have."
  
  The wolf said, "The better to ${littleRed.verb[2]} you with."
  
  And then she said, "What big ${littleRed.nouns[3]} you have, Grandmother." But 
  the wolf said nothing. He had just died of indigestion from eating Grandmother.`)

console.log('')

// Part2
littleRed['color'] = 'pink'
littleRed.nouns[2] = 'nails'
littleRed['exclamation'] = 'Hey'
littleRed.verb[1] = 'feed'

console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
  basket of ${littleRed.nouns[0]} for her grandmother. Suddenly, she met a big 
  ${littleRed.adjective} wolf.
  
  "${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyWord}?"
  
  "I'm going to my grandmother's house," she said. Then the wolf ${littleRed.verb[0]} away.
  
  When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
  dressed like her grandmother.
  
  "My, Grandmother," she said. "What big ${littleRed.nouns[1]} you have."
  
  "The better to ${littleRed.verb[1]} you with," said the wolf.
  
  "And, Grandmother," she said, "what big ${littleRed.nouns[2]} you have."
  
  The wolf said, "The better to ${littleRed.verb[2]} you with."
  
  And then she said, "What big ${littleRed.nouns[3]} you have, Grandmother." But 
  the wolf said nothing. He had just died of indigestion from eating Grandmother.`)

// Snow White

// Part 1

let snowWhite = {
  pluralNouns: ['tales', 'dwarves'],
  number: 7,
  adjectives: ['amazing', 'kind', 'small'],
  noun: ['kingdom', 'forest', 'world', 'kiss', 'apple'],
  colors: 'white',
  partOfBody: 'cheeks',
  adverb: 'happily'
}

console.log(`One of the most popular fairy ${snowWhite.pluralNouns[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralNouns[1]}.

Snow White is a princess whose ${snowWhite.adjectives[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjectives[1]} animals who guide her to the 
${snowWhite.adjectives[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.colors}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
${snowWhite.partOfBody}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)

// Part 2

snowWhite['number'] = 8
snowWhite.adjectives[0] = 'uncomparable'
snowWhite.noun[1] = 'jungle'
snowWhite.noun[3] = 'pat'
snowWhite['colors'] = 'pink'

console.log(`One of the most popular fairy ${snowWhite.pluralNouns[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralNouns[1]}.

Snow White is a princess whose ${snowWhite.adjectives[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjectives[1]} animals who guide her to the 
${snowWhite.adjectives[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.colors}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
${snowWhite.partOfBody}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)
