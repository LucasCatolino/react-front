import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                'mainTitle': 'Let\'s All Adopt',
                'mainSubtitle': 'Puppies, kittens and more',
                'moreInfoButton': 'More info',
                'home': {
                    'firstCardTitle': 'Tiny pets: ',
                    'secondCardTitle': 'Old dogs: ',
                    'thirdCardTitle': 'Cats: ',
                    'fourthCardTitle': 'Dogs: ',
                    'fifthCardTitle': 'Every pet: ',
                    'firstCardPhrase': 'Do you live in a flat? Take a peek at small pets...',
                    'secondCardPhrase': 'Nothing as an old pal...',
                    'thirdCardPhrase': 'A cat transforms an empty house into home sweet home...',
                    'fourthCardPhrase': 'A life without a dog is not as worthy...',
                    'fifthCardPhrase': 'You can\'t buy a friend, but you can adopt it...',

                },
                'pets': {
                    'applyButton': 'Apply',
                },
                'navbar':{
                    'pets': 'Pets',
                    'ngos': 'NGOs',
                    'login': 'Login',
                    'petCares': 'Pet cares',
                },
                'petDetails': {
                    'acceptingApplications': 'The NGO is accepting applications, don\'t miss this opportunity!',
                    'loginForApplication': 'Login to apply',
                },
                'petCardDetails': {
                    'animal': 'Animal',
                    'breed': 'Breed',
                    'age': 'Age',
                    'size': 'Size',
                    'sex': 'Sex',
                    'temper': 'Temper',
                    'treatments': 'Treatments',
                    'goToProfile': 'Go to NGO profile'
                },
                'petCares': {
                    'emasculate': 'Castration',
                    'emasculateBenefits': 'Castration benefits',
                    'emasculateBenefitsl1': 'Female pets live longer and healthier lives.',
                    'emasculateBenefitsl2': 'Male pets have health benefits from castration.',
                    'emasculateBenefitsl3': 'Females won\'t be in heat.',
                    'emasculateBenefitsl4': 'Escaping from home will be discourages in male pets.',
                    'emasculateBenefitsl5': 'Better behaviour in male pets.',
                    'emasculateBenefitsl6': 'Pets do no get fatter after castration.',
                    'emasculateBenefitsl7': 'Castration is cheap.',
                    'emasculateBenefitsl8': 'The number of animals in the streets is reduced with castration.',
                    'catsVaccinesRemoveParasites': 'Cats: Vaccines and removing parasites',
                    'dogsVaccinesRemoveParasites': 'Dogs: Vaccines and removing parasites',
                    'vaccines': 'Vaccines',
                    'catVaccinesl1': 'Triple feline after 8 weeks.',
                    'catVaccinesl2': 'Rabies vaccine after 4 months (Annual reinforcement).',
                    'removeParasites': 'Remove parasites',
                    'catsRemoveParasitesl1': 'Internal and/or external parasites removal after 21 days and every 6 months.',
                    'dogsVaccinesl1': 'First polyvalent vaccine after 6 weeks.',
                    'dogsVaccinesl2': 'Second polyvalent vaccine after 8 weeks.',
                    'dogsVaccinesl3': 'Polivalent vaccine reinforcement after 12 weeks.',
                    'dogsVaccinesl4': 'Annual polivalent vaccine reinforcement and rabies vaccine',
                    'dogsRemoveParasitesl1': 'Annual internal and/or external parasites removal.',
                },
                'ongDetails': {
                    'pets': 'Pets',
                    'reviews': 'Reviews',
                },
                'login': {
                    'email': 'Email',
                    'password': 'Password',
                    'rememberMe': 'Remember me',
                    'login': 'Log in',
                    'registerAsNGO': 'Register as NGO',
                    'registerAsAdopter': 'Register as adopter',
                },
            }
        },
        es: {
            translation: {
                'mainTitle': 'Let\'s All Adopt',
                'mainSubtitle': 'Perritos, gatitos y m??s',
                'moreInfoButton': 'Ver m??s',
                'home': {
                    'firstCardTitle': 'Mascotas peque??as: ',
                    'secondCardTitle': 'Perros adultos: ',
                    'thirdCardTitle': 'Gatos: ',
                    'fourthCardTitle': 'Perros: ',
                    'fifthCardTitle': 'Todas las mascotas: ',
                    'firstCardPhrase': '??Vive en un departamento? ??chele un vistazo a las mascotas peque??as...',
                    'secondCardPhrase': 'Existe un solo amigo fiel, un perro viejo...',
                    'thirdCardPhrase': 'Un gatito transforma el regreso a una casa vac??a en la vuelta al hogar...',
                    'fourthCardPhrase': 'Se puede vivir sin perro, pero no merece la pena...',
                    'fifthCardPhrase': 'Los amigos no se compran, se adoptan...',
                },
                'pets': {
                    'applyButton': 'Aplicar',
                },
                'navbar':{
                    'pets': 'Mascotas',
                    'ngos': 'ONGs',
                    'login': 'Ingresar',
                    'petCares': 'Cuidados b??sicos',
                },
                'petDetails': {
                    'acceptingApplications': 'La ONG est?? aceptando solicitudes, ??no pierdas la oportunidad!',
                    'loginForApplication': 'Inicie sesi??n para crear una solicitud',
                },
                'petCardDetails': {
                    'animal': 'Animal',
                    'breed': 'Raza',
                    'age': 'Edad',
                    'size': 'Tama??o',
                    'sex': 'Sexo',
                    'temper': 'Temperamento',
                    'treatments': 'Tratamientos',
                    'goToProfile': 'Ir al perfil de la ONG'
                },
                'petCares': {
                    'emasculate': 'Castraci??n',
                    'emasculateBenefits': 'Beneficios de la castraci??n',
                    'emasculateBenefitsl1': 'Su mascota hembra vivir?? una vida m??s larga y m??s sana.',
                    'emasculateBenefitsl2': 'La castraci??n proporciona mayores beneficios de salud para su mascota macho.',
                    'emasculateBenefitsl3': 'Su hembra esterilizada no entrar?? en celo.',
                    'emasculateBenefitsl4': 'Su perro macho no querr?? vagar fuera de casa.',
                    'emasculateBenefitsl5': 'Su macho castrado se comportar?? de mejor manera.',
                    'emasculateBenefitsl6': 'La esterilizaci??n o castraci??n NO engordar?? a su mascota.',
                    'emasculateBenefitsl7': 'Es muy econ??mico.',
                    'emasculateBenefitsl8': 'La castraci??n ayuda a reducir el n??mero de animales en la calle.',
                    'catsVaccinesRemoveParasites': 'Gatos: Vacunaci??n y desparacitaci??n',
                    'dogsVaccinesRemoveParasites': 'Perros: Vacunaci??n y desparacitaci??n',
                    'vaccines': 'Vacunaci??n',
                    'catVaccinesl1': 'Triple felina a las 8 semanas de vida',
                    'catVaccinesl2': 'Vacuna contra la rabia a los 4 meses de vida (Repetir anualmente)',
                    'removeParasites': 'Desparasitaci??n',
                    'catsRemoveParasitesl1': 'Desparasitaci??n interna y/o externa a los 21 d??as y cada 6 meses',
                    'dogsVaccinesl1': 'Primera vacuna polivalente (sextuple) a las 6 semanas de vida',
                    'dogsVaccinesl2': 'Segunda dosis de polivalente a las 8 semanas de vida',
                    'dogsVaccinesl3': 'Refuerzo de polivalente a las 12 semanas de vida',
                    'dogsVaccinesl4': 'Refuerzo de polivalente y vacuna contra la rab??a anualmente',
                    'dogsRemoveParasitesl1': 'Desparasitaci??n interna y/o externa anualmente',
                },
                'ongDetails': {
                    'pets': 'Mascotas',
                    'reviews': 'Opiniones',
                },
                'login': {
                    'email': 'Email',
                    'password': 'Contrase??a',
                    'rememberMe': 'Recordarme',
                    'login': 'Ingresar',
                    'registerAsNGO': 'Registrarse como ONG',
                    'registerAsAdopter': 'Registrarse como adoptante',
                },
            }
        }
    }
})