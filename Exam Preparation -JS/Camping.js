class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants  = [];
    }

    registerParticipant (name, condition, money){
        let flag = 0;
        for (const key in this.priceForTheCamp) {
            if (key == condition){
                flag++;
            }
        }
        if (flag != 1){
            throw new Error("Unsuccessful registration at the camp.");
        }

        flag = false;
        this.listOfParticipants.forEach(element => {
            if (element.name == name){
                flag = true;
            }
        });
        if (flag){
            return `The ${name} is already registered at the camp.`;
        }

        flag = false;
        if (Number(this.priceForTheCamp[condition]) > Number(money)) flag = true;
        if (flag){
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({name, condition, 'power':  100, 'wins':  0});
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name){
        let flag = true;
        for (let index = 0; index < this.listOfParticipants.length; index++) {
            const element = this.listOfParticipants[index];
            if (element.name == name){
                flag = false;
                this.listOfParticipants.splice(index, 1);
                return `The ${name} removed successfully.`
            }
        }
        if (flag){
            throw new Error(`The ${name} is not registered in the camp.`);
        }
    }

    timeToPlay (typeOfGame, participant1, participant2){
        let firstPlayer = this.listOfParticipants.find(element => element.name == participant1);
        let secondPlayer = this.listOfParticipants.find(element => element.name == participant2);
        if(typeOfGame == 'Battleship'){
            if (firstPlayer == undefined) throw new Error(`Invalid entered name/s.`);
            if (typeOfGame == 'Battleship'){
                firstPlayer.power += 20;
                return `The ${firstPlayer.name} successfully completed the game ${typeOfGame}.`
            }
        } else if(typeOfGame == 'WaterBalloonFights'){
            if (firstPlayer == undefined || secondPlayer == undefined) throw new Error(`Invalid entered name/s.`);
            if (firstPlayer.condition != secondPlayer.condition) throw new Error(`Choose players with equal condition.`);
            if (firstPlayer.power > secondPlayer.power){
                firstPlayer.wins++;
                return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`
            } else if (firstPlayer.power < secondPlayer.power){
                secondPlayer.wins++;
                return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`
            } else return `There is no winner.`;
        }
    }

    toString(){
        let str = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        let rez = this.listOfParticipants.sort((a, b) => {
            return b.wins - a.wins;
        });
        rez.forEach(participant => {
            str += `\n${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`;
        });
        return str;
    }
}

try {
    const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
    console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
    //console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
    console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
    //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
    console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 500));
    console.log(summerCamp.unregisterParticipant("Sara Dickinson"));
    //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
    console.log(summerCamp.toString());
    

} catch (error) {
}

