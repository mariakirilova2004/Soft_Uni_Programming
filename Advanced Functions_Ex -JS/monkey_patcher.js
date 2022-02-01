function solution(command){

    if(command === 'upvote'){
        this.upvotes++;
    } else if(command === 'downvote'){
        this.downvotes++;
    } else if (command === 'score'){
        let result = [];
        let voteIncreaser = Math.ceil(Math.max(this.upvotes, this.downvotes)*0.25);
        let positiveVotesReport = this.upvotes;
        let negativeVotesReport = this.downvotes;
        let total = this.upvotes + this.downvotes;

        if(total > 50){
            positiveVotesReport += voteIncreaser;
            negativeVotesReport += voteIncreaser;
        }

        result.push(positiveVotesReport, negativeVotesReport, positiveVotesReport - negativeVotesReport);

        if(total < 10){
            result.push('new');
        } else if(this.upvotes > total * 0.66){
            result.push('hot');
        } else if(this.upvotes - this.downvotes < 0){
            result.push('unpopular');
        }  else if(total > 100){
            result.push('controversial');
        } else {
            result.push('new');
        }

        return result;
    }
}
