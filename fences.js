var lines = 8;

for(i = 0; i <= lines; i++){
  for(j = 0; j <= lines; j++){
    if((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 &&  j % 2 == 1 )) {
      document.write("0");
    }
    else{document.write("#")
        }
  }
  document.write("<br/>")
}
