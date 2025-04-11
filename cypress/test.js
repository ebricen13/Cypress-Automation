function countSockPairs() {
    const socksColors = [10,20,20,10,10,30,50,10,20];
    let pairs = 0;
  
    for(let color of socks) {
      socksColors[color] = (socksColors[color] || 0) + 1;
    }
  
    for(let color in socksColors) {
      pairs += Math.floor(socksColors[color] / 2);
    }
  
    return pairs;
  
  }
  
  console.log(countSockPairs());