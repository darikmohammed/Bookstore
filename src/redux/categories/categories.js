// ACTION
const STATUS = 'bookStore/category/status';

// REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return ['Comming soon!'];
    default:
      return state;
  }
};
// ACTION CREATOR

export const categoryStatus = () => ({ type: STATUS });
