/**
 * Created by dllo on 17/10/18.
 */
function index(arr,a) {
    var b = null;
    for (var i = 0;i<arr.length;i++) {
        if (arr[i] == a) {
            b = i;
        }else {
            b = -1
        }
    }
    return b;
}