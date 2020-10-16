const processData = async () => {
  try {
    let fetchedData = await getData();
    console.log(fetchedData);
  } catch (error) {
    console.log(error);
  }
};

console.log(processData());
