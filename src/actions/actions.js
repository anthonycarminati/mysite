// REACT & NODE MODULES
import axios from 'axios';

export const FETCH_OPERATIONS = 'FETCH_OPERATIONS';

// FETCH OPERATIONS
export function fetchOperations() {
  const request = axios(
    {
      method: 'get',
      url: 'https://www.foaas.com/operations',
      headers: []
    }
  )

  return {
    type: FETCH_OPERATIONS,
    payload: request
  };
};

// FETCH OPERATIONS RETURNED SUCCESSFULLY
// export function fetchOperationsSuccess(input) {
//   return {
//     type: FETCH_OPERATIONS_SUCCESS,
//     input
//   }
// };

// FETCH OPERATIONS RETURNED FAILURE
// export function fetchOperationsFailed(input) {
//   return {
//     type: FETCH_OPERTAIONS_FAILED,
//     input
//   }
// };
