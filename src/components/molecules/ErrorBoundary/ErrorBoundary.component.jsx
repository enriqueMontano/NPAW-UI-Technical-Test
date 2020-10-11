import React, { Component } from 'react';
import { ErrorBoundaryWrapper } from './ErrorBoundary.styled';
import { StyledLink } from '../../atoms';
import { ParagraphItalic } from '../../fonts';
import { ReactComponent as ErrorIcon } from '../../../resources/svg/error.svg';
export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error) {
    // Log or store the error
    console.error('ESTE ES DE BOUNDARY', error);
  }
  render() {
    return this.state.error ? (
      <ErrorBoundaryWrapper>
        <ErrorIcon />
        <ParagraphItalic>Something went wrong.</ParagraphItalic>
        <div className='button-container'>
          <StyledLink to={'/'}>Go home</StyledLink>
        </div>
      </ErrorBoundaryWrapper>
    ) : (
      this.props.children
    );
  }
}
