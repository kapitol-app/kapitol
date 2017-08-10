export const capitalize = str => {
    return str.replace(/\w\S*/g,
    function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

/**
 * FUNCTION TO DETERMINE BAR COLOR FOR GRAPH DATA
 * SETS COLOR TO BLUE (PROGRESSIVE) OR RED (CONSERVATIVE)
 * @param arr
 * @returns {Array}
 */
export const sortColor = arr => {
    let colors = [];
    arr.forEach(item => {
        item < 0 ?
            colors.push('rgba(231, 51, 71, 0.6)') :
            colors.push('rgba(0, 125, 188, 0.6)')
    })
    return colors;
}