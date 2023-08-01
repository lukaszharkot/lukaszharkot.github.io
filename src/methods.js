export const fetchCustomers = () =>
    fetch("http://127.0.0.1:8000/customers").then((res) => res.json());

export const createCustomer = ({ name, surname, email, phone_number }) =>
    fetch("http://127.0.0.1:8000/customers", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            email: email,
            phone_number, phone_number,
        }),
    }).then((res) => res.json());

export const editCustomer = (customer_id, updatedData) => 
    fetch(`http://127.0.0.1:8000/customers/${customer_id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
    }).then((res) => res.json());

export const deleteCustomer = (customer_id) =>
    fetch(`http://127.0.0.1:8000/customers/${customer_id}`, {
        method: "DELETE",
    }).then((res) => res.json());