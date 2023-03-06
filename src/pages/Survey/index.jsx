import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Survey = () => {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    return (
        <div>
            <h1>Survey</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestionNumber}`} style={{pointerEvents: questionNumber === 1 ? 'none' : ''}}>Back</Link>
            {questionNumberInt === 10 ? <Link to='results'>Results</Link> : <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>}
        </div>
    );
};

export default Survey;