/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

// fake out configuration information for now
var exercises = [];
for (var i=0; i < 10; i++) {
  var name = 'Exercise '+i;
  var starting = 100;
  exercises.push({
    name: name,
    reps: [starting, starting+5, starting+10]
  });
}

// menu item for each exercise
var items = exercises.map(function(exercise){
  return {
    title: exercise.name,
    subtitle: exercise.reps.join()
  };
});

var main = new UI.Menu({
  sections: [{
    items: items        
  }]
});

main.on('select', function(e) {
  var exercise = exercises[e.itemIndex];
  var card = new UI.Card();
  card.title(exercise.name);
  card.subtitle(exercise.reps.join());
  card.show();
});

main.show();

// main.on('click', 'up', function(e) {
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Pebble.js',
//         icon: 'images/menu_icon.png',
//         subtitle: 'Can do Menus'
//       }, {
//         title: 'Second Item',
//         subtitle: 'Subtitle Text'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();
// });

// main.on('click', 'select', function(e) {
//   var wind = new UI.Window();
//   var textfield = new UI.Text({
//     position: new Vector2(0, 50),
//     size: new Vector2(144, 30),
//     font: 'gothic-24-bold',
//     text: 'Text Anywhere!',
//     textAlign: 'center'
//   });
//   wind.add(textfield);
//   wind.show();
// });

// main.on('click', 'down', function(e) {
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
// });
