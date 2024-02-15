import CodeEditorArea from '@/components/CodeEditorArea';
import { prisma } from '../../../../prisma/client';
import { handleSubmitAction } from '@/app/actions';

function CreateCodeSanp() {
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
    return (
        <div className="w-full max-w-screen-md mt-10 mx-auto">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                action={handleSubmitAction}>
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
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateCodeSanp;
