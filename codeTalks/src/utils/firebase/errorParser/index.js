const parseFirebaseError = error => {
  const parsedErrorMessage = {
    'auth/email-already-in-use': 'Bu email adresi zaten kullanılmaktadır',
    'auth/invalid-email': 'Geçerli bir email adresi giriniz',
    'auth/user-disabled':"Bu kullanıcının hesabı kapatılmıştır",
    'auth/wrong-password':"Email adresi veya şifrenizi yanlış girdiniz",
    'auth/invalid-login':"Email adresi veya şifrenizi yanlış girdiniz",
    'auth/operation-not-allowed':"Sistemsel bir hata oluşmaktadır. Lütfen tekrar deneyiniz",
    'auth/weak-password':"Lütfen daha güçlü bir şifre yazınız",
  };

  if (!Object.keys(parsedErrorMessage).includes(error.code)) {
    return error;
  } else {
    return parsedErrorMessage[error.code];
  }
};

export default parseFirebaseError;
