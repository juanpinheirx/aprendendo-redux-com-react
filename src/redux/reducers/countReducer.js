const INITIAL_STATE = {
  count: {
    value: 0,
  }
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        count:
               {
          value: state.count.value +1
        }
      };
      case 'INCREMENT_PLUS_FIVE':
      return {
        count: {
          value: state.count.value + action.payload
        }
      };
      default:
        return {
          count: {
            value: state.count.value
          }
        }
  }
}

export default counterReducer;
