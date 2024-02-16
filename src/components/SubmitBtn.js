'use client';
import { useFormStatus } from 'react-dom'; //* This is helpful to add more interactivity in form

function SubmitBtn() {
    const { pending } = useFormStatus();
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    );
}

export default SubmitBtn;
