import { PropsWithChildren } from "react";

export default function PageTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="text-center text-[4rem] relative pt-32 pb-20">
      <span className="absolute w-1/2 h-full bg-string-lights bg-contain bg-center bg-no-repeat top-0 right-1/2 [transform:rotateY(180deg)]" />
      {children}
      <span className="absolute w-1/2 h-full bg-string-lights bg-contain bg-center bg-no-repeat top-0 left-1/2" />
    </h1>
  );
}