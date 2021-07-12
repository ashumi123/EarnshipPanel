const CAN_CONSOLE = false

const cl = (...args) => {
    let randomColorCode = Math.floor(Math.random()*16777215).toString(16);
    let randomColor = '#' + randomColorCode;

    if (CAN_CONSOLE) {
        if(args[0] === "input values in POST Method" || args[0] === "input values in PUT Method" || args[0] === "input values in GET Method"){
            console.log("%c",'background-color : #424242', args )
        }else if(args[0]==="result inside 200"){
            console.log("%c",'background-color : #345995', args )
        }else{
            console.log( args )
        }
        console.log('%c ----------------------',`color: ${randomColor}`)
    }
}

export default cl

// Random color Generator 

// const CAN_CONSOLE = true

// let rgb = ['255', '0', '0'];
// let textColor;
// let backgroundColor;
// let colorBrightness = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);

// if(colorBrightness > 125) {
//     textColor = '#000000';
// }else{ 
//     textColor = '#ffffff';
// }

// let r = Math.round(Math.random() * 255);
// let g = Math.round(Math.random() * 255);
// let b = Math.round(Math.random() * 255);

// rgb[0] = r;
// rgb[2] = b;               
// rgb[1] = g;

// backgroundColor='rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')'

// const cl = (...args) => {
//     // let randomColorCode = Math.floor(Math.random()*16777215).toString(16);
//     // let randomColor = '#' + randomColorCode;
//     //   if (CAN_CONSOLE) {
//     //     console.log(`%c ${args}`,`color: ${randomColor}`)
//     //     console.log('%c ----------------------',`background-color: ${randomColor};`)
//     // }

//     if (CAN_CONSOLE) {
//         console.log(`%c ${args}`,`background-color: ${backgroundColor}`)
//         console.log('%c ----------------------',`color: ${textColor};`)
//     }
// }

// export default cl