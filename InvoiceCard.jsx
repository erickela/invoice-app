import StatusBadge from "./StatusBadge";

function InvoiceCard({ invoice, onDelete, onMarkPaid, onEdit }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10, marginTop: 10 }}>
      <h3>{invoice.client}</h3>
      <p>{invoice.email}</p>
      <p>₦{invoice.total}</p>
      <StatusBadge status={invoice.status} />

      <div>
        <button onClick={() => onEdit(invoice)}>Edit</button>
        <button onClick={() => onMarkPaid(invoice.id)}>Mark Paid</button>
        <button onClick={() => onDelete(invoice.id)}>Delete</button>
      </div>
    </div>
  );
}

export default InvoiceCard;
