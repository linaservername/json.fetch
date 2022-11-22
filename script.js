let list = document.querySelector('.header__div');


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    let userObj = json;
    
    for (const user in userObj) {
         console.log(userObj[user].name)
    }
  
  })
  const names = ['Leanne Graham', 'Ervin Howell','Clementine Bauch', 'Patricia Lebsack','Chelsey Dietrich','Mrs. Dennis Schulist','Kurtis Weissnat','Nicholas Runolfsdottir V','Glenna Reichert','Clementina DuBuque'];

  list.innerHTML = names

  