class Helper {

    static getFullName (firstName,lastName) {
        return firstName + ` ` + lastName
    }

    static totalCredit (data) {
        let total = 0 
        if (data.Subjects.length > 0){
            for (let i = 0 ; i < data.Subjects.length ; i++){
                total += data.Subjects[i].credits
            } 
        }
        return total
    }
}

module.exports = Helper