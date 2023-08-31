// This file contains the code for the viewer
// Rollup is used to create "bundle.js" which contains the code from the "web-ifc-viewer" library


import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

const container = document.getElementById("viewer-container");
const input = document.getElementById("fileInput");

// Adding a 'change' event listener that triggers the IFC-viewer when a file is added
input.addEventListener(
    "change",
  
    async (changed) => {
      const file = changed.target.files[0];
      const ifcURL = URL.createObjectURL(file);

      const viewer = new IfcViewerAPI({
        container,
        backgroundColor: new Color(0xf0f0f0),
      });
      
      // Axes and grid that can be enabled
      viewer.axes.setAxes();
      // viewer.grid.setGrid();
      
      // Defining the mouse behavior
      window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
      window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
      viewer.clipper.active = true;
      
      // Defining the keyboard input behavior for creating planes/sections
      window.onkeydown = (event) => {
        if (event.code === "KeyP") {
          viewer.clipper.createPlane();
        } else if (event.code === "KeyO") {
          viewer.clipper.deletePlane();
        }
      };

      // Load the IFC file that is provided by the user
      viewer.IFC.loadIfcUrl(ifcURL, true); 
    },
  
    false
  );

