function drawRomb(n){ 
    var pict=' ';
    for (var i=0;i<n;i++){
        for (var j=n;j>i;j--) {
            pict+=' '}
        pict+="/";
        for (j=0;j<i;j++){
             pict+='  '}
        pict+='\\\n';
    }
    for (i=n;i>=1;i--){
        pict+=" ";
        for (j=n;j>i;j--){
            pict+=' '}
        pict+="\\"
        for (j=0;j<i-1;j++){
            pict+='  '}
        pict+='/\n';
    }
    return (console.log(pict));
}