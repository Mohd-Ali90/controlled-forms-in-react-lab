import { useState } from 'react'

function Bookshelf(){
         const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

const [newBook , setNewBook] = useState({
    title:'',
    author:''
})

function handleInputChange(event){
    setNewBook({...newBook, [event.target.name]: event.target.value })
  }

   function handleSubmit(event){
     event.preventDefault() // Stops the form from refreshing and disables default behavior
    setBooks([...books,newBook])
    //reset values in form so form is empty after submit
    setNewBook({
      title:'',
      author:''
    })
  }

    return (
        <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
        type="text"
        value={newBook.title}
        id="title"
        name="title"
        onChange={handleInputChange}
        />

        <label htmlFor="author">Author:</label>
        <input 
        type="text" 
        value={newBook.author}
        id="author"
        name="author"
        onChange={handleInputChange}
        />

        <button>Create Book</button>
      </form>

    
  </div>
  <div className="bookCardsDiv">
     {books.map((oneBook)=>
      <div key={`${oneBook.title} ${oneBook.author}`}>
        <p>{oneBook.title}</p>
      </div>
      )}

  </div>
</div>

    )
}
export default Bookshelf