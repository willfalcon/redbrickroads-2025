import { useFormStatus } from "react-dom";

export default function Submit({children}: {children?: string}) {
  const { pending } = useFormStatus();
  return (
    <input
      className="bg-orange text-white py-4 px-12 uppercase font-bold mt-8 block w-max"
      type="submit"
      disabled={pending}
      value={children || 'Submit'}
    />
  );
}