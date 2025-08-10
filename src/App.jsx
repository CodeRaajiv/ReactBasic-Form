import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [edittext, setEditText] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edittext !== null) {
      const Updated = [...data]
      Updated[edittext] = { name, email, }
      setData(Updated)
      setEditText(null)
    }
    else {
      setData([...data, { name, email }])
    }
    setName('')
    setEmail('')
  }
  const handleEdit = (index) => {
    setName(data[index].name)
    setEmail(data[index].email)
    setEditText(index)
  }
  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-600'>React Form</h1>
      <form onSubmit={handleSubmit}
        className='flex flex-col w-2xs mx-auto mt-4 border px-7 py-4 rounded-2xl shadow-2xl border-white'>
        <label className='mr-60 font-semibold'>Name</label>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}
          className='border mt-2 h-9 pl-1 rounded' required/>
        <label className='mr-64 font-semibold'>Email</label>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} 
          className='border mt-2 h-9 pl-1 rounded' required/>
        <label className='mr-60 font-semibold'>Password</label>
        <input type="password" placeholder='Enter your password' className='border mt-2 h-9 pl-1 rounded' required/>
        <button className='border mt-6 mx-auto w-36 py-2 bg-blue-500 font-semibold text-white rounded-lg'>
          {edittext !== null ? "Update" : "Add"}
        </button>
      </form>
      <table className='mt-8 mx-auto w-2xl'>
        <thead className='bg-black text-white'>
          <tr>
            <td className='border p-2'>NAME</td>
            <td className='border p-2'>EMAIL</td>
            <td className='border p-2'>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='border'>{item.name}</td>
              <td className='border'>{item.email}</td>
              <td className='border'>
                <button onClick={() => handleEdit(index)}
                  className='bg-cyan-500 w-16 mt-2'>Edit</button>
                <button onClick={() => handleDelete(index)}
                  className='bg-red-400 w-14 mt-2 ml-2'>Delete</button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default App
