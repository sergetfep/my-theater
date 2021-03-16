// [state, setState] = usestate({
//   days: [{ select: null, values: [true, false, false] }],
// });

// setState({ ...state });

export interface Free {
  days: [
    {
      date: string,
      values: boolean[],
    }
  ];
}

// {
//   select: 0,
//   days: [
//     {
//       date: 0,
//       values: [
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//       ],
//     },
//     {
//       date: 1,
//       values: [
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//       ],
//     },
//     {
//       date: 2,
//       values: [
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//       ],
//     },
//   ],
// }
