'use server';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const { prisma } = require('../../prisma/client');
export async function handleSubmitAction(currentState, formData) {
    try {
        const user = await currentUser();
        const title = formData.get('title');
        const code = formData.get('code');
        if (!user) throw new Error('You must be signed in to create bin');
        if (!title || !code) {
            return {
                message: 'Title and Code are required',
            };
        }
        const savedcodeBin = await prisma.codeBin.create({
            data: {
                title: title,
                code: code,
                userId: user.id,
            },
        });
        console.log(savedcodeBin);
    } catch (error) {
        console.log(error);
        return {
            message: error?.message || 'Something went wrong',
        };
    }
    redirect('/');
}

export async function deleteBinAction(id) {
    await prisma.codeBin.delete({
        where: {
            id: parseInt(id),
        },
    });
    redirect('/');
}
