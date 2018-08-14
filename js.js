var width = "Total Width: " + screen.width;
var height = "Total Height: " + screen.height;
document.write(width+height);

document.getElementById("newId").innerHTML =
    "Page address: " + window.location.href;


var siteInfo =
    {
        siteTitle: document.title, address: document.location, lastModified: document.lastModified

};



document.write(siteInfo);