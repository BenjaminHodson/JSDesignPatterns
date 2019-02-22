//Singleton

var mySingleton = (function() {
    //Instance stores a reference to the singleton
    var instance;
    function init(){
        //Singleton
        //Private Methods and Variables
        function privateMethod(){
            console.log("I am private");
        }
        var privateVariable = "I'm also private";
        var privateRandomNumber = Math.random();
        return{
            //Public Methods and Variables
            publicMethod: function(){
                console.log("This can be seen publicly");
            },
            publicProperty: "I am also public",
            getRandomNumber: function(){
                return privateRandomNumber;
            }
        };
    };
    return{
        //Get the singleton instance if one exists
        //create one if it doesn't
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
singleA.publicMethod();
console.log(singleA.publicProperty);
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());
