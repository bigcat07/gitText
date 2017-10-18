/**
 * Created by dllo on 17/10/18.
 */
function filter(arr,fn) {
    var array = [];
    for (var i = 0;i < arr.length;i++) {
        if (fn) {
            array.push(arr[i])
        }
    }
    return array
}