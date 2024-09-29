function password(obj) {
      const makePass = obj.siteName+ '#' + obj.name +'@'+ obj.birthYear;
      if( obj.birthYear < 1000 || obj.birthYear > 9999)
      { return "invalid";}

      return makePass;
  

    }
    const pass ={ 
        name: "kolimuddin" , 
        birthYear:2000, 
        siteName: "google" }
console.log(password(pass))