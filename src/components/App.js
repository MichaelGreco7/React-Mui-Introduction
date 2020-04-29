import React, { Fragment, Component } from 'react';
import { Header, Footer } from './layouts';
import Exercise from './exerciseComponent';
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises,
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header />
        <Exercise exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
