const parseFirebaseError = error => {
  const parsedErrorMessage = {
    'auth/email-already-in-use': 'Bu email adresi zaten kullanılmaktadır',
    "auth/invalid-email" : "Geçerli bir email adresi giriniz"
  };

  if (!Object.keys(parsedErrorMessage).includes(error.code)) {
    return error;
  } else {
    return parsedErrorMessage[error.code];
  }
};

export default parseFirebaseError;
