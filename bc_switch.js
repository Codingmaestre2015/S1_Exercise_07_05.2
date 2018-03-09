"use strict";

/*

   Exercise_07_05.2
   Author: 
   Date:   

   Filename: bc_switch.js
   
   setupStyles()
   Function to set up the style sheet switcher and insert
   form buttons to allow the user to switch between web
   view and page view
   
*/

window.addEventListener("load", setUpStyles);

function setUpStyles() {
    // Create a link element for the page view style
    var pageStyle = document.createElement("link");
    pageStyle.setAttribute("href", "bc_page.css");
    pageStyle.setAttribute("rel", "stylesheet");

    // Append the link element to the document head
    document.head.appendChild(pageStyle);
}