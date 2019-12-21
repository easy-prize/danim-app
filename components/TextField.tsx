import React from 'react';
import styled, { css } from 'styled-components/native';

type TextFieldProps = {
  label: string,
  value: string,
  placeholder: string,
  isPassword?: boolean;
  onChange?: () => void,
};

type TextFieldState = {
  isFocus: boolean;
};

export default class TextField extends React.Component<TextFieldProps, TextFieldState> {
  constructor(props: TextFieldProps) {
    super(props);

    this.state = {
      isFocus: false,
    };

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  public render() {
    const { label, value = '', placeholder, onChange, isPassword = false } = this.props;
    const { isFocus } = this.state;

    return (
      <Container>
        <Label
          focus={isFocus}
        >
          {label}
        </Label>
        <Input
          focus={isFocus}
          value={value}
          editable={true}
          placeholder={placeholder}
          onChangeText={onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          // @ts-ignore
          secureTextEntry={isPassword}
        />
      </Container>
    );
  }

  private onBlur() {
    this.setState({
      isFocus: false,
    });
  }

  private onFocus() {
    this.setState({
      isFocus: true,
    });
  }
}

const Container = styled.View`
  margin-bottom: 20;
`;

type FocusProps = {
  focus: boolean;
};

const Label = styled.Text<FocusProps>`
  font-size: 15;
  font-family: 'NotoSansKR-Medium';
  line-height: ${1.4 * 15};

  ${({ focus }) => focus && css`
    color: #6E00FF;
  `};
`;

const Input = styled.TextInput<FocusProps>`
  background-color: #f8f9fa;
  border-bottom-width: 1px;
  border-bottom-color: #CBCBCB;
  font-size: 18;

  ${({ focus }) => focus && css`
    border-bottom-color: #6E00FF;
  `};
`;
