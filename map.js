/**
 * Created by dllo on 17/10/19.
 */
function map(arr,fn) {
    var array = [];
    for (var i = 0;i < arr.length;i++) {
        if (fn) {
            array.push(arr[i])
        }
    }
    return array
}