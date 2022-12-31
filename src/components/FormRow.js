const FormRow = ({
  type,
  name,
  value,
  changeHandler,
  labelText,
  placeholder,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="">
        {labelText}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={changeHandler}
        className="form-input input-decoration"
      ></input>
    </div>
  );
};

export default FormRow;
