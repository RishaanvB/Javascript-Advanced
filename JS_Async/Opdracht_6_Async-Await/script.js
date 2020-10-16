// const processData = async function () {
//   let fetchedData = await getData();
//   console.log(fetchedData);

// };

// console.log(processData() );

async function doSomethingWithData() {
  try {
    const data = await getData();
    console.log("here is your data to do something:", data);
  } catch (error) {
    console.log(error);
  }
}

doSomethingWithData();
