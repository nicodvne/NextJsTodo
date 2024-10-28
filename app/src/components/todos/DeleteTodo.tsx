import { todoProps } from '@/types/index'
import React from 'react'
import Form from '../form/Form'
import Input from '../input/input'
import Button from '../button/Button'
import { FaTrash } from 'react-icons/fa'
import * as actions from '@/actions/index'

const DeleteTodo = ({todo} : {todo: todoProps}) => {
  return (
    <Form action={actions.removeTodo}>
        <Input type="hidden" name="inputId" value={todo.id}></Input>
        <Button 
            actionButton 
            type='submit' 
            bgColor='bg-red-400' 
            text={<FaTrash/>}>
        </Button>
    </Form>
  )
}

export default DeleteTodo
