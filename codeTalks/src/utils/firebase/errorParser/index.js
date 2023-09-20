const parseFirebaseError = error => {
  const parsedErrorMessage = {
    'auth/email-already-in-use': 'Bu email adresi zaten kullanılmaktadır',
  };

  if (!Object.keys(parsedErrorMessage).includes(error.code)) {
    return error;
  } else {
    return parsedErrorMessage[error.code];
  }
};

export default parseFirebaseError;
