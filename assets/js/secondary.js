function myFunction () {
    var myObj = document.getElementById("mySubmit").nodeValue;

    document.getElementById("demo").innerText = myObj;
    console.log(myObj)
}