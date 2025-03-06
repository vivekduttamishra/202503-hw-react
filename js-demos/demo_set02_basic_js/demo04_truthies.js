
function truthMirror(value){
    if(value)
        console.log(value, 'is true');
    else
        console.log(value, 'is false');
}

truthMirror(true)
truthMirror(false)
truthMirror(8>3)
truthMirror(9<3)

truthMirror(12)
truthMirror(-1.4)
truthMirror(0)
truthMirror(0.02)

truthMirror('Hello')
truthMirror('false')
truthMirror('')

truthMirror(new Date())

truthMirror(new Object())
truthMirror([1,2,3,4])
truthMirror([])

truthMirror(null);
truthMirror(undefined);
truthMirror(NaN);