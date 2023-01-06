import { InputFormLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input className="form-input" {...otherProps} />
      {label && (
        <InputFormLabel shrink={otherProps.value.length}>
          {label}
        </InputFormLabel>
      )}
    </Group>
  );
};

export default FormInput;
