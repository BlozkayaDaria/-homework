function drawTriangle(n){ 
    var pict=' ';
    for (var i=0;i<n-1;i++){
        for (var j=n;j>i;j--) {
            pict+=' '}
        pict+="/";
        for (j=0;j<i;j++){
             pict+='  '}
        pict+='\\\n';
    }
    pict+=' /';
    for (i=0;i<n-1;i++){
        pict+='__'}
    pict+='\\';
    return (console.log(pict));
}
