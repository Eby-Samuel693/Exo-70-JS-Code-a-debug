let test = document.getElementById(main);

document.getElementById('main').innerHTML = "Mon nouveau texte !";

let html = main;

alert(html);

if(html) {
    console.log(html);
}
else {
    let test = document.getElementById('test');
    if(test) {
        alert(test);
    }
}