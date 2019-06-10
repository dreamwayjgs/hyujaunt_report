import React from 'react';
import './Survey.css'
import { IUserProps } from '../libs/User'

class Survey extends React.Component<IUserProps, {}> {
    render(){
        return(
            <div className={this.props.user.isValid ? "surveyForm" : "surveyForm usererror"}>
                <div className="surveyNotice">설문조사 설명</div>                
                <div className="surveyHead">1. 객관식 질문</div>
                <div className="surveyBody">
                    <div className="surveyItem choice">1번</div>
                    <div className="surveyItem choice">2번</div>
                    <div className="surveyItem choice">3번</div>
                    <div className="surveyItem choice">4번</div>                    
                </div>
                <div className="surveyHead">2. 주관식 질문</div>
                <div className="surveyBody">
                    <div className="surveyItem">주관식 답변</div>                    
                </div>
            </div>
        )
    }
}

export default Survey;
