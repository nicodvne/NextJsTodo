import React from 'react'
import Form from '../form/Form'
import Input from '../input/input'
import Button from '../button/Button'
import * as actions from '@/actions/index'

const AddTodo = () => {
  return (
    <div>
      <Form action={actions.createTodo}>
        <div className='flex gap-4 items-center'>
            <Input name='input' type='text' placeholder='Add Todo Here'/>
            <Button type='submit' text='Add' bgColor='bg-blue-600'/>
        </div>
      </Form>
    </div>
  )
}

export default AddTodo
