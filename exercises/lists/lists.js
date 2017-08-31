// class participants
var participant = ['Alonso', 'Ellie', 'Rik', 'Steve', 'Julian', 'Flavio', 'Aucher', 'Yicen', 'George', 'Isabel', 'Benz', 'Rye', 'Joe'];

console.log(participant[0]);

// reports
var report = [];
report[0] = 'Werner Herzog. Lo and Behold';
report[1] = 'Kurgan, Laura. Close and at a Distance';
report[2] = 'Steyerl, Hito. A Sea of Data';
report[3] = 'Kate Crawford, Can an Algorithm be Agonisic?';
report[4] = 'Hayles, Katherine N. Unthought, Chapter 5';
report[5] = 'Hayles, Katherine N. Unthought, Chapter 6';
report[6] = 'Selected UNDP RBA reading';

console.log(report);

var assignment = [];

for(var i=0; i<report.length; i++) {
    assignment[i] = {
        report: report[i],
        team: []
    }
}

console.log(assignment);

for (var key in assignment) {
    while (assignment[key].team.length < 2) {
        var rnd = Math.floor(Math.random() * participant.length);
        assignment[key].team.push(participant[rnd]);
        participant.splice(rnd, 1);
    }
}

console.log(assignment);