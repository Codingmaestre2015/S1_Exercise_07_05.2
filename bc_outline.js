"use strict";

/*
   
   Exercise_07_05.2
   Author: 
   Date:   

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

/* Generate an outline based on the h1 through h6 headings in the source document*/
window.addEventListener("load", makeOutline);

function makeOutline() {
    // Location of the document outline
    var outline = document.getElementById("outline");

    // Source document for the outline
    var source = document.getElementById("doc");

    var mainHeading = document.createElement("h1");
    var outlineList = document.createElement("ol");
    var headingText = document.createTextNode("Outline");

    mainHeading.appendChild(headingText);
    outline.appendChild(mainHeading);
    outline.appendChild(outlineList);

    createList(source, outlineList);
}

function createList(source, outlineList) {
    //Headings for the outline
    var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];

    // Previous level of the Headings
    var prevLevel = 0;

    /* Loop through all of the child nodes of source article until no child nodes are left*/

    for (var n = source.firstChild; n !== null; n = n.nextSibling) {
        // Examine only article headings
        var headLevel = headings.indexOf(n.nodeName);
        if (headLevel !== -1) {
            var listElem = document.createElement("li");
            listElem.innerHTML = n.firstChild.nodeValue;
            if (headLevel === prevLevel) {
                // Append the list item to the current list
                outlineList.appendChild(listElem);
            } else if (headLevel > prevLevel) {
                // Start a new nested list
                var nestedList = document.createElement("ol");
                nestedList.appendChild(listElem);
                // Append nested list to last item in the current list
                outlineList.lastChild.appendChild(nestedList);
                // Change the current list to the nested list
                outlineList = nestedList;
            } else {
                // Append the list item to a higher list
                // Calculate the difference between the current and previous level
                var levelUp = prevLevel - headLevel;
                // Go up to the higher
                for (var i = 1; i <= levelUp; i++) {
                    outlineList = outlineList.parentNode.parentNode;
                }
                outlineList.appendChild(listElem);
            }
            // Update the value of prevLevel
            prevLevel = headLevel;
        }
    }
}