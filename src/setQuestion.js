function setQuestion(con , res) {
    const query = 'SELECT * FROM TWD_QUESTIONS;'
    let questions = []
    con.query(query, function (err, result) {
        let number = []
        for (; number.length < 10;) {
            let sayi = Math.floor(Math.random() * result.length - 1)
            if (number.includes(sayi)) {
                
            }
            else{
                number.push(sayi)
                questions.push(result[sayi])
            }
        }
        console.log(questions.length)
        res.send(questions)
    })
}

module.exports = setQuestion;