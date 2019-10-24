while(1){
  for (var j = 0; j < 360; j+=8){
    var dist = scan(j);
    if(dist <= 70 && dist > 10){
      cannon(j, dist);
      swim(j + 10,150);
    }
  }
}
