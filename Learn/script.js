// function main () {
//     var flightNumber = prompt('vvedite nomer'),
//         flightStatus = prompt('vvedite status');

//     var flight1 = {
//         number : flightNumber,
//         status : flightStatus
//     };

//     console.log('The flight ' + flight1.number + ' is ' + flight1.status);
// }

// function Flight(flightNumber, status) {
//     number = flightNumber;
//     status = status;
// }

//main();
    


function main() {
    var depth = parseInt(prompt('vvedite vysotu'), 10);
    var height = 0, schet = 1;
    while (height<depth) {
        height = height +7 ;
        if (height < depth) {
            height = height - 2;
            schet++;
        } else {
            console.log(schet);
            break;
        }
    } 
}
// main();