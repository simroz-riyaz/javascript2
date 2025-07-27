let Javascript = "amazing"
            if(Javascript === "amazing") alert ("Javascript is FUN!");

            40+8+23-10;
            console.log(40+8+23-10);

           let firstName = "simrose";
           console.log(firstName);

           // basic operators

           // arithmetic operators

           const now = 2037;
           const ageRose = now - 1991;
           const ageSim = now - 2018;
           console.log(ageRose, ageSim);
           console.log(ageRose * 2, ageRose / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3

           const firstName = 'Sim';
           const lastName = 'Rose';
              console.log(firstName + ' ' + lastName);

              // assignment operators 

              let x = 10 + 5; // 15
                x += 10; // x = x + 10
                x *= 4; // x = x * 4
                x++; // x = x + 1
                x--; // x = x - 1
                console.log(x); // 64

                // comparison operators
                
                console.log(ageRose > ageSim); // >, <, >=, <=
                console.log(ageSim >= 18); // true
                const isFullAge = ageSim >= 18;
                console.log(isFullAge);

                // strings and template literals

                const firstName = 'Rose';
                const job = 'developer';
                const birthyear = 1991;
                const year = 2037;

                const Rose = "I'm " + firstName + ', a ' + (year - birthyear) + ' years old ' + job + '!';
                console.log(Rose);

                // template literals
                const RoseNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}!`;
                console.log(RoseNew);

                // multi-line strings
                console.log(`String with\n\
                multiple\n\
                lines`);

                //taking decisions: if / else statements

                const age = 15;
                if (age >= 18) {
                    console.log('Sarah can start driving license 🚗');
                } else {
                    const yearsLeft = 18 - age;
                    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
                }

                // if else

                const birthYear = 2012;
                let century;
                if (birthYear <= 2000) {
                    century = 20;
                } else {
                    century = 21;
                }
                console.log(century);

                //type conversion and coercion

                // type conversion

                const inputYear = '1991';
                console.log(Number(inputYear), inputYear);
                console.log(Number(inputYear) + 18);

                // type coercion
                console.log('I am ' + 20 + ' years old ' );// coerces number to string
                console.log('23' - '10' - 3); // coerces string to number
                console.log('23'/ '2'); // coerces string to number

                let n = '1' + 1; // coerces number to string
                n = n - 1; // coerces string to number
                console.log(n); // 10

                //equality operators

                const age = 18;
                if (age === 18);
                console.log('you just became an adult!');

                // strict and loose equality operators

                const Age = 18;
                if (Age === 18){
                    console.log('you just became an adult! (loose)');
                }


                const favourite = Number(prompt("What's your favourite color?"));
                console.log(favourite);
                if (favourite === 23) {
                    console.log('Cool! 23 is an amazing number!');
                }
                else if (favourite === 7) {
                    console.log('7 is also a cool number!');
                } else if (favourite === 9) {
                    console.log('9 is also a cool number!');
                } else {
                    console.log('Number is not 23 or 7 or 9');
                }
                if (favourite !== 23) {
                    console.log('Why not 23?');
                }

                //boolean logic

                const hasDriversLicense = true; // A
                const hasGoodVision = true; // B
                console.log(hasDriversLicense && hasGoodVision); // A and B
                console.log(hasDriversLicense || hasGoodVision); // A or B
                console.log(!hasDriversLicense); // not A
                const shouldDrive = hasDriversLicense && hasGoodVision;
                if (shouldDrive) {
                    console.log('rose is able to drive!');
                } else {
                    console.log('Someone else should drive...');
                }

                //switch statement

                const day = 'tuesday';
                switch (day)
                case 'monday':
                    console.log('course');
                    break;

                    case 'tuesday':
                    console.log('picture');
                    console.log('videos');
                    break;

                    case 'wednesday':
                      console.log('white');
                      break;
                      
                      case 'thursday':
                        console.log('black');
                        break;

                    case 'friday':
                        console.log('red');
                        break;

                      case 'saturday':
                        console.log('blue');
                        break;
                        
                    case 'sunday':
                        console.log('green');
                        break;

                        default:
                        console.log('Not a valid day!');
                        

                        // strict
                        'use strict';
                        let hasDriversLicense = false;
                        const passTest = true;
                        if (passTest) hasDriversLicense = true;
                        if (hasDriversLicense) console.log('I can drive :D');

                        
                
                        


        






                


           