'use server';
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function createTodo(formData: FormData) { // formData : props de l'action

    const input = formData.get('input') as string; // Get by name
    if (!input.trim()) {
        return;
    }

    // 'todo' : le model crée
    await prisma.todo.create({
        data: {
            title: input
        }
    });

    //purge cache on '/' path
    revalidatePath("/");
}

export async function changeStatus(formData: FormData) {
    const inputId = formData.get('inputId') as string;

    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId,
        }
    });

    const updateStatus = !todo?.isCompleted;

    await prisma.todo.update({
        where: {
            id: inputId
        },
        data: {
            isCompleted: updateStatus
        }
    })

    revalidatePath('/');
}

export async function editTodo(formData: FormData) {
    const newTitle = formData.get('newTitle') as string;
    const inputId = formData.get('inputId') as string;

    await prisma.todo.update({
        where: {
            id: inputId
        },
        data: {
            title: newTitle
        }
    });

    revalidatePath('/');
}

export async function removeTodo(formData: FormData) {
    const inputId = formData.get('inputId') as string;

    await prisma.todo.delete({
        where: {
            id: inputId
        }
    });

    revalidatePath('/');
}