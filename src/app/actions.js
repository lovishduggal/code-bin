'use server';

import { redirect } from 'next/navigation';

const { prisma } = require('../../prisma/client');
export async function handleSubmitAction(currentState, formData) {
    const title = formData.get('title');
    const code = formData.get('code');
    if (!title || !code) {
        return {
            message: 'Title and Code are required',
        };
    }
    const savedcodeBin = await prisma.codeBin.create({
        data: {
            title: title,
            code: code,
        },
    });
    console.log(savedcodeBin);
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
