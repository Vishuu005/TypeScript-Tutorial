interface Dimension {
    width: string;
    height: string;
}

function getDimension(dim: Dimension) : string {
    let finaldim  = dim.width +"-"+ dim.height;
    return finaldim;
}

getDimension({width:"300px", height:"250px"});
console.log(getDimension(finaldim));

