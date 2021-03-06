import React, { Fragment, Component } from 'react';
import { Header, Footer } from './layouts';
import Exercise from './exerciseComponent';
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises,
    exercise: {},
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

  handleCategorySelected = (category) => {
    this.setState({
      category,
    });
  };

  handleExerciseSelected = (id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header />
        <Exercise
          exercise
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          category={category}
          onSelect={this.handleCategorySelected}
          muscles={muscles}
        />
      </Fragment>
    );
  }
}
