'use client';

import React, {useState} from 'react'
import Button from '../button/Button';
import { MdEdit } from 'react-icons/md';
import Form from '../form/Form';
import Input from '../input/input';
import { todoProps } from '@/types/index';
import * as actions from '@/actions/index';


const EditTodo = ({todo} : {todo: todoProps}) => {

    const [editTodo, setEditTodoState] = useState(false);

    const handleEdit = () => {
        if (!todo.isCompleted) {
            setEditTodoState(!editTodo);
        }
    }

    const handleSubmit = () => {
        setEditTodoState(false);
    }

    return (
        <div className='flex gap-5 items-center'>
            <Button onClick={handleEdit} text={<MdEdit/>} actionButton/>

            { editTodo ? (
                <Form action={actions.editTodo} onSubmit={handleSubmit}>
                    <Input name='inputId' value={todo.id} type='hidden'></Input>
                    <div className='flex justify-center'>
                        <Input 
                            name='newTitle' 
                            type='text' 
                            placeholder='Edit Todo ...'>
                        </Input>

                        <Button type='submit' text='Save'/>
                    </div>
                </Form>
            ) : null}
        </div>
    )
}

export default EditTodo
