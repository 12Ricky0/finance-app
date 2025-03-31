import { Overlay } from "../skeletons/overlay";
import Image from "next/image";

interface DeleteProps {
  header: string;
  setDeleteModal: (value: boolean) => void;
}
export default function Delete({ setDeleteModal, header }: DeleteProps) {
  return (
    <Overlay>
      <section className="bg-white rounded-xl md:p-8 p-5 w-full lg:w-[560px] md:mx-[100px] lg:mx-0 mx-4">
        <div className="flex justify-between">
          <h1 className="text-gray-900 font-bold md:text-[32px] text-[20px]">
            Delete `{header}`?
          </h1>
          <Image
            src="/assets/images/icon-close-modal.svg"
            alt="close"
            width={32}
            height={32}
            className=" w-auto h-auto cursor-pointer "
            onClick={() => setDeleteModal(false)}
          />
        </div>
        <p className="text-[14px] font-normal my-[20px] text-gray-500">
          Are you sure you want to delete this budget? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </p>
        <button
          type="submit"
          className="w-full py-4 text-white bg-[#C94736] mt-[20px] text-[14px] hover:bg-red-400 cursor-pointer rounded-lg font-bold"
        >
          Yes, Confirm Deletion
        </button>
        <button
          type="submit"
          className="w-full text-gray-500 bg-transparent mt-[20px] text-[14px] cursor-pointer font-normal"
        >
          No, Go Back
        </button>
      </section>
    </Overlay>
  );
}
