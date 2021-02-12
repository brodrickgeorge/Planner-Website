export const createSpot = (spot) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("spots")
      .add({
        ...spot,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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
