function runCode(){


let html =
document.getElementById("htmlCode")
.value;


let css =
document.getElementById("cssCode")
.value;


let js =
document.getElementById("jsCode")
.value;



let output =
`
<html>

<head>

<style>

${css}

</style>

</head>


<body>


${html}


<script>

${js}

<\/script>


</body>

</html>
`;



let preview =
document.getElementById("preview")
.contentWindow.document;



preview.open();

preview.write(output);

preview.close();



localStorage.setItem(
"editorData",
output
);


}




function clearCode(){


document.getElementById("htmlCode")
.value="";


document.getElementById("cssCode")
.value="";


document.getElementById("jsCode")
.value="";


runCode();

}




function downloadCode(){


let html =
document.getElementById("htmlCode")
.value;


let css =
document.getElementById("cssCode")
.value;


let js =
document.getElementById("jsCode")
.value;



let file =
`

<html>

<style>

${css}

</style>


<body>

${html}


<script>

${js}

<\/script>


</body>

</html>

`;



let blob =
new Blob(
[file],
{
type:"text/html"
}
);



let a =
document.createElement("a");


a.href =
URL.createObjectURL(blob);


a.download =
"my-code.html";


a.click();


}





window.onload=function(){

let saved =
localStorage.getItem("editorData");


if(saved){

document
.getElementById("preview")
.contentWindow.document
.write(saved);

}

}
