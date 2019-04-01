
function whatToDo(dayOfWeek, weather) {
    //Create a compound conditional statement below. 
    

    //These three lines will have to be used in the conditional statement. Feel free to re-arrange.
    $("#result").html("I'll go for a bike ride.");
    $("#result").html("I'll go binge watch Netflix.");
    $("#result").html("I'll go to the park.");

} 

$("button").click(function(){
    var dayOfWeek = $("#dayOfWeek").val();
    var weather = $("#weather").val();
    whatToDo(dayOfWeek, weather);   
});