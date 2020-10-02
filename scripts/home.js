$(document).ready(function() {
    $(".enemySelection").change(function() {
        console.log($(".enemySelection").value);
        $(".monsterContainer").removeClass($(".monsterContainer").attr('class').split(' ')[1])
        $(".monsterContainer").addClass($("#userSettings select")[0].value);
    });
});