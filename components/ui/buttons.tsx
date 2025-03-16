import Image from "next/image";

export function Prev_Button() {
  return (
    <div className="border rounded-lg px-4 py-3">
      <Image
        src="/assets/images/icon-caret-down.svg"
        alt="down"
        width={24}
        height={24}
        className="w-auto h-auto cursor-pointer"
      />
      <span>Prev</span>
    </div>
  );
}
