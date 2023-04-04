import React from 'react'
import { categories } from '../../constants/categories'
import './Form.css'

const Form = ({ formData, setFormData, handleChange }) => {
  return (
    <div className='Form'>
        <hr className='vertical-line'/>
        <form className='form'>
              <h2 className='form--title'>Options</h2>
              <label>Questions </label>
              <input 
                type='number'
                name='number'
                value={formData.number}
                onChange={handleChange}
                min={5}
                max={20}
                placeholder='5'
              />
            
            
              <label>Category </label>
              <select value={formData.category} name='category' onChange={handleChange}>
                <option value={0}>Any</option>
                {categories.map((category, i) => (
                  <option key={i} value={i+9}>{category}</option>
                ))}
              </select>
            
            
              <label>Difficulty </label>
              <select value={formData.difficulty} name='difficulty' onChange={handleChange}>
                <option value=''>Any</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            
            
              <label>Type </label>
              <select value={formData.type} name='type' onChange={handleChange}>
                <option value=''>Any</option>
                <option value='multiple'>Multiple Choice</option>
                <option value='boolean'>True / False</option>
              </select>
            
          </form>
    </div>
  )
}

export default Form