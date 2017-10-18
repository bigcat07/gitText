/**
 * Created by dllo on 17/10/18.
 */
function some(arr,fn) {
    var tf = null
    for (var i = 0;i < arr.length;i++) {
        if (fn) {
            tf = true
            break;
        }else {
            tf = false
        }
    }
    return tf
}