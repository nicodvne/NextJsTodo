import React from 'react'
import Form from '../form/Form'
import Input from '../input/input'
import Button from '../button/Button'
import * as actions from '@/actions/index'
import { todoProps } from '@/types'
import { FaCheck } from 'react-icons/fa'



const ChangeTodo = ({ todo }: {todo: todoProps}) => {
  return (
    <Form action={actions.changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden"></Input>
      <Button 
        text={<FaCheck/>} 
        actionButton 
        bgColor={todo.isCompleted ? 'bg-green-400' : 'bg-blue-500'}>
    </Button>
    </Form>
  )
}

export default ChangeTodo
