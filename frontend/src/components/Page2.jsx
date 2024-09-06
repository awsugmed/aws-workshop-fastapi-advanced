function Page2() {
  return (
    <>
      <div className="container text-center">
        <h1>
          My Awesome <span className="badge text-bg-success">TODO</span> App
        </h1>
      </div>
      <form>
        <div className="form-group">
          <div className="form-row">
            <label htmlFor="newItem" className="h3">
              New Item:
            </label>
            <input
              type="text"
              id="newItem"
              className="form-control"
              aria-describedby="newItemHelp"
              placeholder="Enter item"
            />
            <small id="newItemHelp" className="form-text text-muted">
              Add items to your TODO list!
            </small>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        <br></br>
      </div>

      <div className="container">
        <h3>Todo Items:</h3>
        <div className="list-group">
          <div className="container">
            <div className="list-group-item d-flex align-items-center justify-content-between">
              <label className="p mb-0">
                <input type="checkbox" className="mr-2" /> ITEM
              </label>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Page2;
