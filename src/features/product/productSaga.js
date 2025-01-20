import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_PRODUCTS_REQUEST } from './productActions';
import { fetchproductssuccess, fetchproductsfailure } from './productActions';

// Function to fetch the products using fetch API
const fetchTheApi = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual token
        'Content-Type': 'application/json',
      },
    });
       if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    console.log(response)
    const data = await response.json();
    return data.products;  // Assuming the API response contains a 'products' array
  } catch (error) {
    throw new Error('Failed to fetch products: ' + error.message);  // Additional error handling
  }
};

// Saga to handle fetching the products
function* fetchProductSaga() {
  try {
    // Call the fetch function
    const products = yield call(fetchTheApi);
    
    // Dispatch the success action with the fetched products
    yield put(fetchproductssuccess(products));
  } catch (error) {
    // Dispatch failure action with error message if fetching fails
    yield put(fetchproductsfailure(error.message));
  }
}

// Root saga to listen for FETCH_PRODUCTS_REQUEST action
export default function* productSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductSaga);
}
