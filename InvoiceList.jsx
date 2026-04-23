import { useState, useEffect } from "react";
import InvoiceCard from "../components/InvoiceCard";
import InvoiceForm from "../components/InvoiceForm";
import Modal from "../components/Modal";
import FilterBar from "../components/FilterBar";

function InvoiceList() {
  const [invoices, setInvoices] = useState(() => {
    return JSON.parse(localStorage.getItem("invoices")) || [];
  });

  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const saveInvoice = (inv) => {
    if (editData) {
      setInvoices(invoices.map(i => i.id === inv.id ? inv : i));
    } else {
      setInvoices([inv, ...invoices]);
    }
    setShowForm(false);
    setEditData(null);
  };

  const deleteInvoice = (id) => {
    setInvoices(invoices.filter(i => i.id !== id));
  };

  const markAsPaid = (id) => {
    setInvoices(invoices.map(i =>
      i.id === id ? { ...i, status: "Paid" } : i
    ));
  };

  const filtered = filter === "All"
    ? invoices
    : invoices.filter(i => i.status === filter);

  return (
    <div>
      <button onClick={() => setShowForm(true)}>New Invoice</button>

      <FilterBar filter={filter} setFilter={setFilter} />

      {filtered.map(inv => (
        <InvoiceCard
          key={inv.id}
          invoice={inv}
          onDelete={deleteInvoice}
          onMarkPaid={markAsPaid}
          onEdit={(data) => {
            setEditData(data);
            setShowForm(true);
          }}
        />
      ))}

      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <InvoiceForm onSave={saveInvoice} initialData={editData} />
        </Modal>
      )}
    </div>
  );
}

export default InvoiceList;
