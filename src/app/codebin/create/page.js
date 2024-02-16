'use client';
import CodeEditorArea from '@/components/CodeEditorArea';
import { prisma } from '../../../../prisma/client';
import { handleSubmitAction } from '@/app/actions';
import { useFormState } from 'react-dom'; //* If we want our server action must gives us feedback so we can use useFormState.
import SubmitBtn from '@/components/SubmitBtn';

function CreateCodeSanp() {
    //* Server action will work if the js is disable in the browser
    //* This is inline server action. We can't create inline server action If our component is client component.
    // async function handleSubmit(formData) {
    //     'use server';
    //     const title = formData.get('title');
    //     const code = formData.get('code');
    //     const savedcodeBin = await prisma.codeBin.create({
    //         data: {
    //             title: title,
    //             code: code,
    //         },
    //     });
    //     console.log(savedcodeBin);
    // }
    const [state, formAction] = useFormState(handleSubmitAction, {
        message: '',
    });
    return (
        <div className="w-full max-w-screen-md mt-10 mx-auto">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                action={formAction}>
                {state.message && (
                    <p className="text-rose-600 text-2xl p-2 mb-2 bg-red-100 rounded ">
                        {state.message}
                    </p>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input
                        className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter title"
                        name="title"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Code
                    </label>
                    <CodeEditorArea placeholder="Write code here" name="code" />
                </div>
                <div className="flex items-center justify-between">
                    <SubmitBtn></SubmitBtn>
                </div>
            </form>
        </div>
    );
}

export default CreateCodeSanp;
