import React from 'react'

const AddTodo = () => {

    const handleSubmit = () => {
        
    }

  return (
    <div >
    <h4>Add Todo</h4>
    <form onSubmit={handleSubmit} style={{ margin: '2rem', display: 'flex', flexDirection: 'column' , gap:"10px"}}>
      <label>Description:</label>
      <input type="text" name="Description" />

      <label>Tag:</label>
      <input type="text" name="Tag" />

      <label>End time:</label>
      <input type="time" name="End time" />

      <label>End Date:</label>
      <input type="date" name="End Date" />
 
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

// export default AddTodo