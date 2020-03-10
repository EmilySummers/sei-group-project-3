const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          name: 'Asha Sessay',
          email: 'asha@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581676612/new_phot_oft23d.jpg',
          skills: ['Chinese', 'French', 'African'],
          city: 'Queens Park',
          postcode: 'RH7 6JB',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'David Campbell',
          email: 'david@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581676608/david_f9gcp8.jpg',
          skills: ['Turkish/Middle-Eastern'],
          city: 'Luton',
          postcode: ' LS25 6QE',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'North Kardashian',
          email: 'north@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581675491/teaten_xlw652.jpg',
          skills: ['South-East Asian', 'Caribbean'],
          city: 'Hackney Downs',
          postcode: 'SW20 0ED',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Robyn Fenty',
          email: 'robyn@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581675490/teafive_vcv8df.jpg',
          skills: ['Spanish'],
          city: 'Notting Hill',
          postcode: ' L12 8QL ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Victoria Beckham',
          email: 'victoria@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581675490/teafoour_g3yzsa.jpg',
          skills: ['Vegetarian', 'South-East Asian', 'Vegan'],
          city: 'Wembley',
          postcode: 'DE3 0TQ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Philo Ever',
          email: 'philo@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581675490/teanine_qxp7b7.jpg',
          skills: ['Spanish', 'Vegan', 'Italian'],
          city: 'London',
          postcode: 'KT12 2NZ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Conner Jenkins',
          email: 'Conner@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581675491/teasix_fq9uzu.jpg',
          skills: ['Mexican', 'Japanese'],
          city: 'Birmingham',
          postcode: 'RG7 8HA',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Rosa Parks',
          email: 'rosa@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581675490/teaeight_lk3zob.jpg',
          skills: ['Turkish/Middle-Eastern'],
          city: 'Liverpool',
          postcode: ' SS17 0ND',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Martin Luther King',
          email: 'martin@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581675491/teathree_hndhue.jpg',
          skills: ['Caribbean'],
          city: 'Manchester',
          postcode: 'IP7 6HX',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Marcus Garvey',
          email: 'marcusgarvey@email.com',
          image: 'https://res.cloudinary.com/dsa3peayb/image/upload/v1581675491/teatwo_oo5iwn.jpg',
          skills: ['African', 'Vegan'],
          city: 'The Ends',
          postcode: ' LE18 3TF',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          name: 'Ben Parker',
          email: 'ben@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364904/Chow%20Vow/ben_parker_pk7xf0.jpg',
          skills: ['Moroccan', 'Turkish/Middle-Eastern', 'Italian'],
          city: 'London',
          postcode: 'SW19 3ES',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Beth Williams',
          email: 'beth@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364904/Chow%20Vow/beth_williams_klooht.jpg',
          skills: ['French', 'Italian', 'Greek'],
          city: 'London',
          postcode: 'SE11 5EL',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Edgar Riveria',
          email: 'edgar@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364904/Chow%20Vow/edgar_riveria_cu6ker.jpg',
          skills: ['Mexican', 'Spanish', 'Vegan', 'Vegetarian'],
          city: 'London',
          postcode: 'E17 6RE',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Harry Kent',
          email: 'harry@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364905/Chow%20Vow/harry_kent_v9sznv.jpg',
          skills: ['South East Asian', 'Korean', 'Vegan'],
          city: 'London',
          postcode: 'SW1V 2JP',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jessica Wood',
          email: 'jessica@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364905/Chow%20Vow/jessica_wood_zvlo3b.jpg',
          skills: ['Greek', 'Chinese', 'Indian'],
          city: 'London',
          postcode: 'SE19 1XB',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Sergio De Paula',
          email: 'sergio@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364905/Chow%20Vow/sergio_de_paula_ntunha.jpg',
          skills: ['Vegetarian', 'Indian'],
          city: 'London',
          postcode: 'W1F 9NE',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Steph Gardiner',
          email: 'steph@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364905/Chow%20Vow/steph_gardiner_ougoji.jpg',
          skills: ['Japanese'],
          city: 'London',
          postcode: 'WC1B 3RD',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Francesca Harris',
          email: 'francesca@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364904/Chow%20Vow/francesca_harris_lygehn.jpg',
          skills: ['African', 'Caribbean'],
          city: 'London',
          postcode: 'NW1 3UJ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Marius Stone',
          email: 'marius@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364904/Chow%20Vow/marius_stone_riulax.jpg',
          skills: ['Chinese', 'Japanese'],
          city: 'London',
          postcode: 'N1P 1SG',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Angela Reed',
          email: 'angela@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364904/Chow%20Vow/angela_reed_wqjha2.jpg',
          skills: ['Mexican', 'Spanish', 'Moroccan', 'French'],
          city: 'London',
          postcode: 'N17 0BF',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jack Minton',
          email: 'jack6@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364966/Chow%20Vow/Jack_Minton_rm7gpx.jpg',
          skills: ['Japanese', 'Vegan', 'Italian'],
          city: 'London',
          postcode: 'SE9 3DA',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'John Malcolm',
          email: 'John5@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364966/Chow%20Vow/John_Malcolm_fjajmx.jpg',
          skills: ['Spanish', 'Greek'],
          city: 'London',
          postcode: 'SE28 0FF',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Samantha Rudd',
          email: 'Sam4@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364966/Chow%20Vow/Samantha_Rudd_cntsmq.jpg',
          skills: ['Mexican', 'Vegetarian'],
          city: 'London',
          postcode: 'SE5 7PP',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Mack Jay',
          email: 'Mack@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364966/Chow%20Vow/Mack_Jay_zujyjc.jpg',
          skills: ['Caribbean'],
          city: 'London',
          postcode: 'SE8 3JW',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jennifer Fray',
          email: 'jennifer5@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364966/Chow%20Vow/Jennifer_Fray_vpt42b.jpg',
          skills: ['African', 'Chinese'],
          city: 'London',
          postcode: 'SE8 3JW',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Asai Hiro',
          email: 'Asai@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364966/Chow%20Vow/Asai_Hiro_galqfp.jpg',
          skills: ['Vegetarian', 'Japanese'],
          city: 'London',
          postcode: 'SE9 5HP',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Safiri Abdu',
          email: 'safiri@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364967/Chow%20Vow/Safiri_Abdu_zh2t5i.jpg',
          skills: ['African', 'Vegan'],
          city: 'London',
          postcode: 'SE6 9LP',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Ataleo Signorelli',
          email: 'ataleo@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364966/Chow%20Vow/Ataleo_Signorelli_gewyvz.jpg',
          skills: ['Italian'],
          city: 'London',
          postcode: 'N22 7UQ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Ender Yenal',
          email: 'Ender@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364966/Chow%20Vow/Ender_Yenal_om1brn.jpg',
          skills: ['Turkish/Middle-Eastern', 'Vegan'],
          city: 'London',
          postcode: 'N22 8PH',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Alejandro Curbelo',
          email: 'Alejandro@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364966/Chow%20Vow/Alejandro_Curbelo_mtfqhu.jpg',
          skills: ['Mexican', 'Spanish'],
          city: 'London',
          postcode: 'W9 2JW',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Tahirah Jarrett',
          email: 'tea@jay.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364951/Chow%20Vow/Tahirah_Jarrett_todp1n.jpg',
          skills: ['Caribbean', 'South-East Asian', 'Greek'],
          city: 'Kilburn',
          postcode: 'DH1 3YD',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Katherine Gonzalez',
          email: 'kat@gon.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364951/Chow%20Vow/Katherine_Gonzalez_l99utv.jpg',
          skills: ['African', 'Spanish', 'Greek'],
          city: 'Clapham',
          postcode: 'HA5 3XX',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Rebecca Dunncan',
          email: 'beck@dun.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364950/Chow%20Vow/Becky_Dunncan_ttcnuw.jpg',
          skills: ['South-East Asian', 'Greek'],
          city: 'Brixton',
          postcode: 'SP4 0AS',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jenny Byrnes',
          email: 'jen@byrn.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364951/Chow%20Vow/Jenny_Byrnes_ovuqlw.jpg',
          skills: ['Caribbean', 'Spanish'],
          city: 'Chelsea',
          postcode: 'BS3 3HH',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Talia Bunda',
          email: 'talia@bun.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364951/Chow%20Vow/Talia_Bunda_lsbclw.jpg',
          skills: ['Chinese', 'French', 'African'],
          city: 'Queens Park',
          postcode: 'NW3 1LJ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Patrick Gowie',
          email: 'pat@gow.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364951/Chow%20Vow/Patrick_Gowie_uitkpj.jpg',
          skills: ['Turkish/Middle-Eastern'],
          city: 'Peckham',
          postcode: 'E3 3LG',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Ena Maud',
          email: 'mummy@jane.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364951/Chow%20Vow/Ena_Maud_jpgzbu.jpg',
          skills: ['South-East Asian', 'Caribbean'],
          city: 'Hackney Downs',
          postcode: 'HA9 0PA',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Kelsey Marie',
          email: 'kels@marie.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364951/Chow%20Vow/Kelsey_Marie_qwszbn.jpg',
          skills: ['Spanish'],
          city: 'Notting Hill',
          postcode: 'SS13 2AQ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Joan Taylor',
          email: 'joan@tay.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364951/Chow%20Vow/Joan_Taylor_agfjls.jpg',
          skills: ['Mexican', 'South-East Asian', 'Indian'],
          city: 'Hackney Downs',
          postcode: 'E8 1EY',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Devon Brown',
          email: 'surf@allah.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364951/Chow%20Vow/Devon_Brown_ehapga.jpg',
          skills: ['Vegetarian', 'South-East Asian', 'Vegan'],
          city: 'Harrow',
          postcode: 'PH21 1LQ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Reeva Fraser',
          email: 'reevafraser12@hotmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364930/Chow%20Vow/james3_mhkkwx.jpg',
          skills: ['Spanish', 'Vegan', 'Italian'],
          city: 'London',
          postcode: 'SE1 2UD',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Eden Matthews',
          email: 'edenM23@gmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364932/Chow%20Vow/james8_sdlpjc.jpg',
          skills: ['Mexican', 'Japanese'],
          city: 'Leeds',
          postcode: 'LS1 1HE',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Rosa Adams',
          email: 'rosa.adams1@hotmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364935/Chow%20Vow/james4_vy8rbw.jpg',
          skills: ['Turkish/Middle-Eastern'],
          city: 'London',
          postcode: 'EC4Y 9BJ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Amelia-Rose Green',
          email: 'arose.green@gmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364935/Chow%20Vow/james10_lmwm0q.jpg',
          skills: ['Caribbean', 'Chinese', 'African'],
          city: 'London',
          postcode: 'E1 6NU',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Xavier Oduneye',
          email: 'oduneye123@hotmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364937/Chow%20Vow/james7_duziyw.jpg',
          skills: ['African', 'Chinese', 'Vegan'],
          city: 'London',
          postcode: 'HA01AU',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Kevin Uchiha',
          email: 'favouritecakes77@gmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364933/Chow%20Vow/james1_uzedxs.jpg',
          skills: ['Italian'],
          city: 'London',
          postcode: 'N153BF',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Dillon Bates',
          email: 'Bates245@gmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
          skills: ['Spanish', 'Vegan'],
          city: 'Manchester',
          postcode: 'M1 1EZ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Brayden Howard',
          email: 'Bradybunch@hotmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364941/Chow%20Vow/james2_amzzzj.jpg',
          skills: ['Mexican', 'Vegetarian'],
          city: 'Bristol',
          postcode: 'BS11JN',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jonathan Porter',
          email: 'jonnyp099@hotmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364934/Chow%20Vow/james9_yz136z.jpg',
          skills: ['Turkish/Middle-Eastern', 'Vegan'],
          city: 'Newcastle',
          postcode: 'NE1 1EE',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Tom Cresent',
          email: 'tomcresent.1.@gmail.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364930/Chow%20Vow/james5_uwjatr.jpg',
          skills: ['Mexican', 'Spanish'],
          city: 'Edinburgh',
          postcode: 'EH1 2BU',
          password: 'pass',
          passwordConfirmation: 'pass'
          // recipes: [{
          //   name: 'Spaghetti Carbonara',
          //   image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          //   serving: 4,
          //   cookTime: 35,
          //   ingredients: ['100g pancetta', '50g parmesan', '3 large eggs', '350g spaghetti', 'garlic', '50g unsalted butter', 'salt', 'black pepper']
          // }]
        },
        // }, {
        //   name: 'Larissa Jackson',
        //   email: 'larissa@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675168/Chow%20Vow/new%20seeds/larissa_jackson_oapmzd.jpg',
        //   skills: ['Korean', 'French', 'Moroccan'],
        //   city: 'Plymouth',
        //   postcode: 'PL9 9GE',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        //   name: 'Jordan Sheridan',
        //   email: 'jordan@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675168/Chow%20Vow/new%20seeds/jordan_sheridan_ieby3f.jpg',
        //   skills: ['Indian', 'Vegetarian', 'Korean'],
        //   city: 'Bristol',
        //   postcode: 'BS48 1HX',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        //   name: 'Chelsea Baker',
        //   email: 'chelsea@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675167/Chow%20Vow/new%20seeds/chelsea_baker_qof5kr.jpg',
        //   skills: ['Turkish/Middle-Eastern', 'Moroccan', 'Italian'],
        //   city: 'Manchester',
        //   postcode: 'M28 0YE',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        //   name: 'Carla Cassim',
        //   email: 'carla@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675168/Chow%20Vow/new%20seeds/carla_cassim_cjt2th.jpg',
        //   skills: ['Indian', 'Chinese', 'French'],
        //   city: 'Birmingham',
        //   postcode: 'B4 6HD',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        //   name: 'Brie Williams',
        //   email: 'brie@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675167/Chow%20Vow/new%20seeds/brie_williams_cppzki.jpg',
        //   skills: ['Japanese', 'Moroccan', 'Korean'],
        //   city: 'Bridgend',
        //   postcode: 'CF31 5FL',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        //   name: 'James McKenzie',
        //   email: 'james@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675167/Chow%20Vow/new%20seeds/james_mckenzie_eziyu3.jpg',
        //   skills: ['Vegetarian', 'Mexican'],
        //   city: 'Swansea',
        //   postcode: 'SA44 4QJ',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        //   name: 'Jesse Bateman',
        //   email: 'jesse@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675168/Chow%20Vow/new%20seeds/jesse_bateman_rk09qk.jpg',
        //   skills: ['Turkish/Middle-Eastern', 'Korean', 'Japanese'],
        //   city: 'Liverpool',
        //   postcode: 'L23 5SD',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        //   name: 'Nicola Lawson',
        //   email: 'nicola@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675168/Chow%20Vow/new%20seeds/nicola_lawson_sz2c2e.jpg',
        //   skills: ['French', 'Italian'],
        //   city: 'Liverpool',
        //   postcode: 'L20 8TD',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        //   name: 'William Ossman',
        //   email: 'william@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675168/Chow%20Vow/new%20seeds/william_ossman_wrw3dc.jpg',
        //   skills: ['Indian', 'Chinese'],
        //   city: 'Leeds',
        //   postcode: 'LS28 9HJ',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        //   name: 'Tom Smart',
        //   email: 'tom@hotmail.com',
        //   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581675168/Chow%20Vow/new%20seeds/tom_smart_zeoijc.jpg',
        //   skills: ['French', 'South-East Asian', 'Spanish', 'Greek'],
        //   city: 'Belfast',
        //   postcode: 'BT54 6QB',
        //   password: 'pass',
        //   passwordConfirmation: 'pass'
        // }, {
        {
          name: 'Tom Nichol',
          email: 'Tom12@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581689453/Chow%20Vow/new%20bens/tom-nichol_zql7rt.jpg',
          skills: ['Caribbean', 'Chinese', 'African', 'Korean'],
          city: 'Leicester',
          postcode: 'LE3 2GP',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'James Marcus',
          email: 'James12@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581689453/Chow%20Vow/new%20bens/james-marcus_wkno2p.jpg',
          skills: ['Moroccan', 'Turkish/Middle-Eastern', 'Korean', 'Spanish'],
          city: 'Leicester',
          postcode: 'LE2 8QY',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jane Clarence',
          email: 'Jane12@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581689453/Chow%20Vow/new%20bens/jane-clarence_kdp830.jpg',
          skills: ['Moroccan', 'South-East Asian', 'Vegan'],
          city: 'Leicester',
          postcode: 'LE2 6TQ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Gary Clates',
          email: 'Gaz12@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581689453/Chow%20Vow/new%20bens/gary-clates_q10hsp.jpg',
          skills: ['Mexican', 'Turkish/Middle-Eastern', 'Vegan'],
          city: 'Leicester',
          postcode: 'LE15 OHJ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Sally Santos',
          email: 'Bigsal@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581689454/Chow%20Vow/new%20bens/sally_santos_he0evp.jpg',
          skills: ['Japanese', 'Turkish/Middle-Eastern', 'Chinese'],
          city: 'Leicester',
          postcode: 'LE3 9EE',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jake Gowan',
          email: 'Jake@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581689454/Chow%20Vow/new%20bens/jake_gowan_mbgb74.jpg',
          skills: ['Moroccan', 'Greek', 'Italian'],
          city: 'Leicester',
          postcode: 'LE18 1GD',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Matt Wykes',
          email: 'Mattw@email.com',
          image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581689454/Chow%20Vow/new%20bens/matt-wykes_t5byp8.jpg',
          skills: ['Greek', 'Japanese', 'Korean'],
          city: 'Leicester',
          postcode: 'LE18 9FN',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(createdUsers => {
      console.log(`${createdUsers.length} users created `)
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})