var pattern = /\d{5}(-\d{4})?/;
const validation = {
    firstname: {
      presence: {
        message: '^Veuillez Saisir votre nom '
      },
      length: {
        minimum: 3,
        maximum: 15,
        message: '^Le nom doit être entre 3 et 15 lettres '
      }
    },
    lastname: {
        presence: {
          message: '^Veuillez Saisir votre prénom '
        },
        length: {
          minimum: 3,
          maximum: 15,
          message: '^Le prénom doit être entre 3 et 15 lettres '
        }
      },
    
    phonenumber: {
        format:{
            pattern:/[0][5-6-7][0-9]{8}$/,
            message:"Le numéro n'est pas algerien"
        },
      presence: {
        message: '^Veuillez saisir votre numéro de télèphone'
      },
      length: {
        minimum: 10,
        maximum: 10,
        message: '^Le numéro de télèphone doit avoir 10 chiffres'
      }
    
  }

}

export default validation;
  
