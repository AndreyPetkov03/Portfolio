import codeSnippet from '../../public/images/codeSnippet.jpeg';
import Image from "next/image";

export default function CodeSnippet() {
    return (
      <main className="w-full h-full rounded-xl flex justify-end items-center">
        <Image
          src={codeSnippet}
          alt="Code Snippet"
          className="object-contain rounded-xl"
        />
      </main>
    );
  }