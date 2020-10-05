function grade (scores){
    var total = 0
    scores.forEach(function(score){
        total += score
    });
    var avg = total/scores.length
    return Math.round(avg)
}

var scores = [91, 81, 93, 81, 55, 10]
console.log(grade(scores) + "%" )