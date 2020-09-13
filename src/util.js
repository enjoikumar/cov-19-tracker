export const sortData = (data) => {
  let sortedData = [...data];

  // sortedData.sort((a, b) => {
  //   if (a.cases > b.cases) {
  //     return -1;
  //   } else {
  //     return 1;
  //   }
  // });
  // return sortedData;
  
  //using es6 to one line the sort function
  return sortedData.sort((a,b) => a.cases > b.cases ? -1 : 1);

};
