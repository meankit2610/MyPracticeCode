var s="meayl"
var k=2
longestKSubstr(s, k)
function longestKSubstr(s, k) {
    //code here
    var max = -999999
    var len = s.length
    
    for (var i = 0; i < len; i++) {
        var map1 = new Map()
        var j = i
        var arr = []
       
    
        while (map1.size <= 3 && j <= len - 1) {
            
            if (map1.has(s[j])) {
                map1.set(s[j], map1.get(s[j]) + 1)
            }
            else {
                map1.set(s[j], 1)
            }
            arr.push(s[j])
            
            j++
        }

            if(map1.size>3){
                max=Math.max(max,arr.length-1)
            }
            else{
                max=Math.max(max,arr.length)
            }
        }
        console.log(max)
        return max
    }