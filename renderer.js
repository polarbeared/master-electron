// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// var windowbar = require('windowbar');

// var wb = new windowbar({'style':'mac', 'dblClickable':false,
//     'dark': true, 'style': 'win'
//     })
// 	.on('close', console.log('close'))
// 	.on('minimize', console.log('minimize'))
// 	.on('fullscreen', console.log('fullscreen'))
// 	.on('maximize', console.log('maximize'))
// 	.appendTo(document.body);


//https://npm.io/package/windowbar
//Questions:
// Why does this object not work?
// How do I use the files from photon?

mainWindow.on('blur', () =>
{
  console.log('backgrounded')
//   document.getElementById.style.backgroundColor = "red"
//   document.getElementById.style.color = "blue"
})