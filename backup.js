[state, setState] = usestate({
  days: [{ select: null, values: [true, false, false] }],
});

setState({ ...state });
