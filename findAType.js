var data = [
  ['first_name', 'tags'],
  ['Bob', 'hungry,engineer,male'],
  ['Mary', 'hungry,productmanager,female, likes_burritos'],
  ['Sarah', 'hungry, engineer,female,likes_pizza'],
  ['Joe', 'thirsty'],
  ['Tim', 'hungry'],
  ['Maggie', 'hungry,thirsty, engineer, likes_pizza']
];

function getHungryEngineers(data) {
    var hungryEng = [];

    for (var i = 0; i < data.length; i++) {
        var newEng = {};

        if (data[i][1].match('hungry') && data[i][1].match('engineer')) {
            newEng[title] = data[i][1]

            hungryEng.push(newEng);
        }
    }

    return hungryEng;
}

console.log(getHungryEngineers(data));
