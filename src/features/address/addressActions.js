export const FETCH_ADDRESSES_REQUEST = "FETCH_ADDRESSES_REQUEST";
export const FETCH_ADDRESSES_SUCCESS = "FETCH_ADDRESSES_SUCCESS";
export const FETCH_ADDRESSES_FAILURE = "FETCH_ADDRESSES_FAILURE";

export const ADD_ADDRESS_REQUEST = "ADD_ADDRESS_REQUEST";
export const ADD_ADDRESS_SUCCESS = "ADD_ADDRESS_SUCCESS";
export const ADD_ADDRESS_FAILURE = "ADD_ADDRESS_FAILURE";

export const UPDATE_ADDRESS_REQUEST = "UPDATE_ADDRESS_REQUEST";
export const UPDATE_ADDRESS_SUCCESS = "UPDATE_ADDRESS_SUCCESS";
export const UPDATE_ADDRESS_FAILURE = "UPDATE_ADDRESS_FAILURE";

export const DELETE_ADDRESS_REQUEST = "DELETE_ADDRESS_REQUEST";
export const DELETE_ADDRESS_SUCCESS = "DELETE_ADDRESS_SUCCESS";
export const DELETE_ADDRESS_FAILURE = "DELETE_ADDRESS_FAILURE";

// Action Creators
export const fetchAddresses = (userId) => ({
  type: FETCH_ADDRESSES_REQUEST,
  payload: userId,
});

export const addAddress = (addressData) => ({
  type: ADD_ADDRESS_REQUEST,
  payload: addressData,
});

export const updateAddress = (addressId, updatedData) => ({
  type: UPDATE_ADDRESS_REQUEST,
  payload: { addressId, updatedData }, // Ensure addressId is separate from updatedData
});


console.log(updateAddress.addressId);

export const deleteAddress = (addressId) => ({
  type: DELETE_ADDRESS_REQUEST,
  payload: addressId,
});
