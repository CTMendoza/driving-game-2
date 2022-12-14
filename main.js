// create a data model that includes which way the car is facing, (north,south,east, or west)

var car = {
  north: 'turn-north',
  south: 'turn-south',
  east: 'turn-east',
  west: 'turn-west'
};

var img = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  console.log('This is the event.key: ', event.key);
  if (event.key === 'ArrowUp') {
    img.className = car.north;
  } else if (event.key === 'ArrowDown') {
    img.className = car.south;
  } else if (event.key === 'ArrowLeft') {
    img.className = car.west;
  } else if (event.key === 'ArrowRight') {
    img.className = car.east;
  }
});
