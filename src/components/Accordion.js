import useToggler from "../hooks/useToggler";

function Accordion({ children, title }) {
  const [isOpen, toggle] = useToggler(false);

  const className = isOpen ? "accordion-open" : "accordion-close";

  return (
    <div className="accordion">
      <h3 className="accordion__title" onClick={toggle}>
        {title}
      </h3>
      <div className={`accordion__item ${className}`}>{children}</div>
    </div>
  );
}

export default Accordion;
