import { useState } from "react";

function InvoiceForm({ onSave, initialData }) {
  const [form, setForm] = useState(
    initialData || {
      client: "",
      email: "",
      dueDate: "",
      items: [{ name: "", qty: 1, price: 0 }],
      status: "Pending",
    }
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const total = form.items.reduce(
      (sum, i) => sum + i.qty * i.price,
      0
    );

    onSave({ ...form, id: Date.now(), total });
  };

  return (
    <div>
      <input name="client" placeholder="Client" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="date" name="dueDate" onChange={handleChange} />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default InvoiceForm;
