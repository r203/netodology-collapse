const Collapse = ({title = '', ariaControls, collapsedLabel, expandedLabel}) => {

  return (
    <>
      <p>
        <a className="btn btn-primary" data-bs-toggle="collapse" href={`#${ariaControls}`} role="button" aria-expanded={expandedLabel ? "true" : "false"} aria-controls={ariaControls}>
          {title}
        </a>
      </p>
      <div className={`collapse ${expandedLabel ? "show" : ""}`} id={ariaControls}>
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </div>
    </>
  )
}

export default Collapse;