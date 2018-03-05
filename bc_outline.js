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
}