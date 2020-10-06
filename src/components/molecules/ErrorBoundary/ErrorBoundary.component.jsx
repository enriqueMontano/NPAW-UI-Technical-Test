import React, { Component } from 'react';
import { ErrorBoundaryWrapper } from './ErrorBoundary.styled';
import { StyledLink } from '../../atoms';
import { ParagraphItalic } from '../../fonts';
import { ReactComponent as ErrorIcon } from '../../../resources/svg/error.svg';

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryWrapper>
          <ErrorIcon />
          <ParagraphItalic>Something went wrong.</ParagraphItalic>
          <div className='button-container'>
            <StyledLink to={'/'}>Go home</StyledLink>
          </div>
        </ErrorBoundaryWrapper>
      );
    }
    return this.props.children;
  }
}
