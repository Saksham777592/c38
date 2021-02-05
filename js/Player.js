class Player {
  constructor(){
   //intialised player objects properties
   this.index=null;
   this.distance=0;
   this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount'); // val: (json--->javascrip)
    playerCountRef.on("value", (data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){    //javascript to json-->{}
    database.ref('/').update({
      playerCount: count
    });
  }

  // in the form.js there is player.update(name)
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name, 
      distance: this.distance
    });
  }
  //static function which are called by the class themselves rather than by objects
  //of  the class
  //a static function is a member of function of the class that can be called even when object of class is not intilaised
  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    });
    
    //arrow function=>
    //function(data)
    //{
    //  allPlayers = data.val();
    //})
  }
}
