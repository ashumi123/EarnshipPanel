// Check image Ratio for 2:1
export const validateImageRatio = (file) => {
    return new Promise((resolve, reject) => {
        let image = new Image()
        image.src = URL.createObjectURL(file)
        image.onload = () => image.width / image.height == 2 ? resolve('true') : reject('false')
    })

}

const checkLat=(lat)=>{

    if(lat.match(/^-?(?:90(?:(?:\.0{1,8})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,8})?))$/))
       {
        return true
    }
    else{
        return false
    }

}
const checkLong=(long)=>{
    console.log(long.match(/^(\+|-)?(?:180(?:(?:\.0{1,8})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,8})?))$/))
    if(long.match(/^(\+|-)?(?:180(?:(?:\.0{1,8})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,8})?))$/)){
        return true
    }
    else{
        return false
    }
}


export const convertPolygonValues = (value) => {
    console.log("in the function",value )
    let termianlPolygonValue = `${value}`.toString()
    let termianlPolygonValueWithoutNewline = termianlPolygonValue && termianlPolygonValue.replace(/\n/g, ' ')
    let firstSplit =termianlPolygonValueWithoutNewline && termianlPolygonValueWithoutNewline.split(") ");
    console.log("the split", firstSplit)

    let polygonArray = []
    firstSplit.map((x) => {
        let commaSpilted =x.includes(", ") && x.split(', ')
        console.log(commaSpilted)
        let lat =commaSpilted&& commaSpilted[0].split('(')
        let long =commaSpilted&& commaSpilted[1].split(')')
       
        if(parseFloat(lat[1]) ||parseFloat(long[0])){
        //  if(checkLat(lat[1]) && checkLong(long[0])){
        let obj = {
            latitude: parseFloat(lat[1]), longitude: parseFloat(long[0]),
        }
        polygonArray.push(obj)
    // }
    }
    })  
        return polygonArray
   
} 

export const convertPolygonValuesToMap = (arr) => {
    console.log(arr)
    let array = JSON.parse(arr)
    if (typeof array === "object") {
        console.log("its bobject", typeof array)
    }
    let str = "";
    array.map((polygonObj, index, array) => {
        let value = ""
        if (index === array.length - 1) {
            value = "(" + polygonObj.latitude + ", " + polygonObj.longitude + ")";
        } else {
            value = "(" + polygonObj.latitude + ", " + polygonObj.longitude + ")" +"\n"
        }
        str += value;
    })

    console.log(str)
    return str;
}

// export const updatePagination =(pagination)=>{
//     console.log('init',pagination)
//     let limit = 10;
//     let totalCount=pagination?.page?.totalCount;
//     let offset = (pagination?.page?.currentPage) * limit
//     let totalPages = Math.ceil(totalCount / limit);
//     let currentPage = Math.floor(offset / limit);
//     let prevPage = (currentPage - 1) > 0 ? (currentPage - 1) * limit : 0;
//     let nextPage = (currentPage + 1) <= totalPages ? (currentPage) * limit : currentPage*limit;

//     return ({
//     count :totalCount,
//     page:{
//         currentPage,
//         nextPage,
//         prevPage,
//         totalCount,
//         }
//     })
// }


