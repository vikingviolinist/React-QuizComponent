import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  render() {
    console.log(this.props);
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <QuizQuestionButton
              button_text={this.props.quiz_question.answer_options[0]}
            >
              {this.props.quiz_question.answer_options[0]}
            </QuizQuestionButton>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;