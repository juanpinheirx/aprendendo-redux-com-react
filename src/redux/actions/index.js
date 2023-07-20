export const actionCreator = (increment = 1) => ({
  type: 'INCREMENT_COUNTER',
  payload: increment,
});

export const incrementPlusFive = (increment = 5) => ({
  type: 'INCREMENT_PLUS_FIVE',
  payload: increment,
})