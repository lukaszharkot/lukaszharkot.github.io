import { useState } from "react";

export const AddCustomerForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onAdd(name, surname, email, phone_number);
        setName("");
        setSurname("");
        setEmail("");
        setPhone_number("");
    };

    return (
        <form onSubmit={onSubmitHandler} style={{position:'relative'}}>
            <Input
                placeholder = "Name"
                className="inputform"
                value = {name}
                onChange = {(e) => setName(e.currentTarget.value)}
            />
            <Input
                placeholder = "Surname"
                className="inputform"
                value = {surname}
                onChange = {(e) => setSurname(e.currentTarget.value)}
            />
            <Input
                placeholder = "Email"
                className="inputform"
                value = {email}
                onChange = {(e) => setEmail(e.currentTarget.value)}
            />
            <Input
                placeholder = "Phone number"
                className="inputform"
                value = {phone_number}
                onChange = {(e) => setPhone_number(e.currentTarget.value)}
            />
            <Button type="submit">Add</Button>      
        </form>
    )
}

  const Input = ({ type, placeholder, value, onChange, ...restProps }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    );
  };
  
  const Button = ({ type, children, ...restProps }) => {
    return (
      <button type={type} {...restProps}>
        {children}
      </button>
    );
  };