let basicData = '6456'.split('');
basicData.sort();
for(let [index, data] of basicData.entries()){
    let checkingArray = basicData.slice(index+1,basicData.length);
    if(checkingArray.indexOf(data)!=-1){
        console.log('重複');
        break;
    }
}