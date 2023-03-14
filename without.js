const without = function(source, remove){
    let create = [];
    let v = 0
for (let i = 0; i < source.length; i++){
if (source[i] !== remove[i]){
    create.push(source[i]);
}
}
for (let i = 0; i < source.length; i++){
while (v < source.length){
    if (source[i] === remove[v]){
        create.splice(i, 1);
    }
    v++;
}
}
return create;
}