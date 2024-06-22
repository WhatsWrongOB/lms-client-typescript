
const Error = () => {
  return (
    <h1 className="error">
        <img src="data:image/png;base64,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" alt="" />
        404 page Not Found
        </h1>
  )
}

export default Error