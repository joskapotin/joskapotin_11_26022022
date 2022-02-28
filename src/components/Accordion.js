import useToggler from "../hooks/useToggler";

function Accordion({ children, title, className }) {
  const [isOpen, toggle] = useToggler(false);

  const statusClassName = isOpen ? "accordion-open" : "accordion-close";

  return (
    <div className={`accordion ${className}`}>
      <button className={`accordion__button ${statusClassName}`} onClick={toggle}>
        {title}
      </button>
      <div className="accordion__panel">
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
