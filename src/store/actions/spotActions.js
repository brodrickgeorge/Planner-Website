export const createSpot = (spot) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("spots")
      .add({
        ...spot,
        authorFirstName: "Brodrick",
        authorLastName: "George",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_SPOT", spot });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_SPOT_ERROR", err });
      });
  };
};
