var links = document.getElementsByTagName("a");

for (i = 1; i < links.length; i++) {

    links[i].className = "link-" + i;
}