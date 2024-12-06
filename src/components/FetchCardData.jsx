async function fetchData(prop) {
  console.log(`Request = https://makeup-api.herokuapp.com/api/v1/products?product_type=${prop}`)
  try {
    const data = await fetch(

      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${prop}`
    );
    const result = await data.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }

}

fetchData();

export default fetchData;
